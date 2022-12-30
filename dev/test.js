const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const previousBlockHash =
  "000063f228a4810b59e80ee0deb63b2a2effd596465adce7c5f74deab0de80d3";
const currentBlockData = [
  {
    amount: "123",
    sender: "ianfelixjonathan",
    recipient: "joshuabutar",
  },
];

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 102066));

// console.log(bitcoin);
