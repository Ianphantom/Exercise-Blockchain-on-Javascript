const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const previousBlockHash = "8907as9d8f79as8d79as8df7a9s7f";
const currentBlockData = [
  {
    amount: 10,
    sender: "IANFELIX",
    recipient: "asdfhjkasdhjfkasdfhks",
  },
  {
    amount: 10,
    sender: "IANFELIX",
    recipient: "asdfhjkasdhjfkasdfhks",
  },
  {
    amount: 10,
    sender: "IANFELIX",
    recipient: "asdfhjkasdhjfkasdfhks",
  },
];

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 157233));
