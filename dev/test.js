const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1672605530593,
      transaction: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1672605554731,
      transaction: [
        {
          amount: 10,
          sender: "IAN JONATHAN SIAMNJUNTAK JONATHAN",
          recipient: "IANFELIX SIMANJUTAK",
          transcationId: "2dcd481db87e4ad196e37387657837fa",
        },
        {
          amount: 20,
          sender: "IAN JONATHAN SIAMNJUNTAK JONATHAN",
          recipient: "IANFELIX SIMANJUTAK",
          transcationId: "71f4d936b98848c3a9afa23dc26034b3",
        },
        {
          amount: 30,
          sender: "IAN JONATHAN SIAMNJUNTAK JONATHAN",
          recipient: "IANFELIX SIMANJUTAK",
          transcationId: "d049fb37b0c44862be385ffdb32aaeeb",
        },
      ],
      nonce: 47206,
      hash: "00004cd66981dffa0d2f99a69eaf0f718b596cf8822a48b591c607610ccb256c",
      previousBlockHash: "0",
    },
  ],
  pendingTransactions: [
    {
      amount: "12.5",
      sender: "00",
      recipient: "aa2f6a3dc76c4361b5464549a4548934",
      transcationId: "e95c1b39b0994cd682d62fb9fae4460d",
    },
  ],
  currrentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log(bitcoin.chainIsValid(bc1.chain));

// console.log(bitcoin.proofOfWork(lastBlock, currentBlockData));

// console.log(bitcoin.hashBlock("0", currentBlockData, 96802));

// console.log(bitcoin);
