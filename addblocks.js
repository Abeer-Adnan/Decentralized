const CILCoin = new BlockChain();

CILCoin.addBlock({sender: "Thor of Asgard", receiver: "Thanos", amount: 1090});


CILCoin.addBlock({sender: "Sky Walker", receiver: "Jedi", amount: 450});


CILCoin.addBlock({sender: "The Penguin", receiver: "Dr. Steven Strange", amount: 35});


console.log(JSON.stringify(CILCoin, null, 4));
