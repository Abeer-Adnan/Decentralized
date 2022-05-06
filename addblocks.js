const Coin = new BlockChain();

Coin.addBlock({sender: "Abeer", receiver: "Alaa", amount: 1090});


Coin.addBlock({sender: "Doaa", receiver: "Maram", amount: 450});


Coin.addBlock({sender: "Hadeel", receiver: "Sara", amount: 35});


console.log(JSON.stringify(Coin, null, 4));
