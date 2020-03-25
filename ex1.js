//! Criação de objeto e como atribuir valores
let game = {};

game.murderer = "???";
game.charecters = ["Foo", "Bar", "John"];

// game["weapons"] = ["W1", "W2", "W3"];

game["weapons"] = [
    { type: "W1", location: "Local 1" }, 
    { type: "W2", location: "Local 2" }, 
    { type: "W3", location: "Local 3" }
];

game.locations = [];

game.locations[0] = "Local 1";
game.locations[1] = "Local 2";
game.locations.push("Local 3");

console.log(game);