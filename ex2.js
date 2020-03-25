//! Exemplo destructuring 1
let game = {};

game.name = "Rusty";
game.room = "kitchen";
game.weapon = "candlestick";

let {W1, L1} = {W1: game.weapon, L1: game.room};

console.log(W1+ " " +L1);