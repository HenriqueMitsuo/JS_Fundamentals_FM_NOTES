//! Implementação de forEach estilo Lodash;

let _ = {

    Each: function (ArrayList, Callback) {

        //! Check para ver se foi fornecido um Array ou Objeto
        //! Não usar typeoff em Arrays
        if(Array.isArray(ArrayList)) {
            // ? Implementação em caso de Array
            for (let index = 0; index < ArrayList.length; index++) {

                Callback(ArrayList[index], index, ArrayList);
            }
        }
        else {
            // ? Implementação em caso de Objeto
            for (let key in list) {

                Callback(list[key], key, list);
            }
        }
    }
}

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

_.Each(suspects, function (name) {
    
    SuspectList.push(createSuspect(name));
})

console.table(SuspectList);

SuspectList[0].speak();

_.Each(suspects, function (name, index, list) {
    
    if(list[index + 1]) {

        console.log(`${name} is younger than ${list[index + 1]}`);
    }
    else {
        console.log(`${name} is the oldest`);
    }
})