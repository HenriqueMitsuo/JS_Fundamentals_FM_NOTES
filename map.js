//! Implementação de map estilo Lodash;
let _ =  {
    
    //? Each não retorna nada
    Each: function (ArrayList, Callback) {

        if (Array.isArray(ArrayList)) {

            for (let index = 0; index < ArrayList.length; index++) {

                Callback(ArrayList[index], index, ArrayList);
            }
        }
        else {

            for (let key in list) {

                Callback(list[key], key, list);
            }
        }
    },

    //? Map retorna um Array
    Map: function (ArrayList, Callback) {

        let storage = [];

        //! implementação com for
        // for (let index = 0; index < ArrayList.length; index++) {
        //     storage.push(Callback(list[index], index, list));
        // }

        //! implementação com Each
        _.Each(ArrayList, function (v, i, list) {

            storage.push(Callback(v, i, list));
        })

        return storage;
    }
}

function createSuspect(name) {

    return {

        name: name,
        color: name.split(' ')[1],
        speak() {

            console.log(`My name is ${name}`);
        }
    }
}

function makeBroken(item) {

    return `broken ${item}`;
}

let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mrs. White'];

let weapons = ["candlestick", "lead pipe", "revolver"];

let SuspectList = _.Map(suspects, function (name) {

    return createSuspect(name);
});

let brokenWeapons = _.Map(weapons, function (item) {

    return makeBroken(item);
});

console.table(SuspectList);
console.log(brokenWeapons);

