const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rp = require("request-promise");

const port = process.argv[2];

const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();
const nodeAddress = uuidv4().split("-").join("");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/blockchain", function (req, res) {
  res.send(bitcoin);
});

app.post("/transaction", function (req, res) {
  const blockIndex = bitcoin.createNewTransaction(
    req.body.amount,
    req.body.sender,
    req.body.recipient
  );

  res.json({ note: `Transaction will be added in block ${blockIndex}` });
});

app.get("/mine", function (req, res) {
  const lastBlock = bitcoin.getLastBlock();
  const hash = lastBlock["hash"];

  const currentBlockData = {
    transaction: bitcoin.pendingTransactions,
    index: lastBlock["index"] + 1,
  };

  const nonce = bitcoin.proofOfWork(lastBlock, currentBlockData);
  const blockcHash = bitcoin.hashBlock(lastBlock, currentBlockData, nonce);
  const newBlock = bitcoin.createNewBlock(nonce, hash, blockcHash);

  bitcoin.createNewTransaction(12.5, "00", nodeAddress);

  res.json({
    note: "New Block mined succesfuully",
    block: newBlock,
  });
});

app.post("/register-and-broadcast-node", function (req, res) {
  const newNodeUrl = req.body.newNodeUrl;
  if (bitcoin.networkNodes.indexOf(newNodeUrl) == -1)
    bitcoin.networkNodes.push(newNodeUrl);

  const regNodesPromises = [];

  bitcoin.networkNodes.forEach((networkNodesUrl) => {
    // register Node Endpoints
    const requestOptions = {
      uri: networkNodesUrl + "/register-node",
      method: "POST",
      body: {
        newNodeUrl: newNodeUrl,
      },
      json: true,
    };

    regNodesPromises.push(rp(requestOptions));
  });

  Promise.all(regNodesPromises)
    .then((data) => {
      const bulkRegisterOptions = {
        uri: newNodeUrl + "/register-nodes-bulk",
        method: "POST",
        body: {
          allNetworkNodes: [...bitcoin.networkNodes, bitcoin.currrentNodeUrl],
        },
        json: true,
      };

      return rp(bulkRegisterOptions);
    })
    .then((data) => {
      res.json({
        note: "New Node registered with network succesfully",
      });
    });
});

app.post("/register-node", function (req, res) {});

app.post("register-nodes-bulk", function (req, res) {});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
