//! Implementação de Filter estilo Lodash;
const _ = {

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

    Filter: function (arr, Callback) {

        const storage = [];

        _.Each(arr, function (item, i, list) {
            
            if (Callback(item, i, list) === true) {

                storage.push(item);
            }
        })

        return storage;
    }
}

const videoData = [

    {
        name: 'Miss Scarlet',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },

    {
        name: 'Mrs. White',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
]

let Suspects = [];

Suspects = _.Filter(videoData, function(suspectObject) {

    return suspectObject.present;
})

console.table(Suspects);

Suspects = _.Filter(videoData, function (suspectObject) {

    return !suspectObject.present;
})

console.table(Suspects);