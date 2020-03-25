function createSuspect(name) {

    return {

        name: name,
        color: name.split(' ')[1],
        //! ES6- Atributo tipo função
        // speak: function () {
        //     console.log(`My name is ${name}`);
        // }
        
        //! ES6+ Método declarado direto como atributo
        speak() {

            console.log(`My name is ${name}`);
        }
    }
}

let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mrs. White'];

let SuspectList = [];

suspects.forEach(function (suspect) {

    SuspectList.push(createSuspect(suspect));
});

console.table(SuspectList);

SuspectList[0].speak();