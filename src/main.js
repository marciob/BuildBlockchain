const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('1a9a7f37a011e32b2ee438561b805fb7acd00174884f82e72fb86321fd38a6cf');
const myWalletAddress = myKey.getPublic('hex');

let builtBlockchain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
builtBlockchain.addTransaction(tx1);

console.log('\n Starting the miner...');
builtBlockchain.minePendingTransactions(myWalletAddress);

console.log('\n Balance of xavier is ', builtBlockchain.getBalanceOfAddress(myWalletAddress));

//builtBlockchain.chain[1].transactions[0].amount = 1;

console.log('Is chain valid? ', builtBlockchain.isChainValid());