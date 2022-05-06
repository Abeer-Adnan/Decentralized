console.log("Validity: ", Coin.chainIsValid());

Coin.chain[0].data.receiver = "droll";

console.log("Validity: ", Coin.chainIsValid());
