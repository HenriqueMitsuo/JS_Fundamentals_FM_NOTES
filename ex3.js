//! Exemplo destructuring 2 + loops
const game = {

    suspects: [
        
        {
            name: "Rusty",
            color: "Orange"
        },

        {
            name: "Scarlet",
            color: "Red"
        }
    ] 
}

for (let i = 0; i < game.suspects.length; i++) {

    let person = game.suspects[i];

    console.log(`Name: ${person.name}, Color: ${person.color}`);
}

for (let i = 0; i < game.suspects.length; i++) {

    let person = game.suspects[i];

    if (person.name == "Rusty") {
        
        console.log(`Name: ${person.name}, Color: ${person.color} GUILTY`);
    }
    else {

        console.log(`Name: ${person.name}, Color: ${person.color}`);
    }
}

let suspects = [

    {
        name: "Rusty",
        color: "Orange"
    },

    {
        name: "Scarlet",
        color: "Red"
    }
] 

//* const {ORANGE, RED} = {ORANGE: suspects[0].color, RED: suspects[1].color};

//* const [ORANGE, RED] = [suspects[0].color, suspects[1].color];

const [{color: ORANGE}, {color: RED}] = suspects;

console.log("\n" +ORANGE+ " " +RED);