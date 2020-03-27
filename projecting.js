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
    },

    Map: function (ArrayList, Callback) {

        let storage = [];
        
        _.Each(ArrayList, function (v, i, list) {

            storage.push(Callback(v, i, list));
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

const suspects = _.Filter(videoData, (suspectsObj) => {

    return suspectsObj.present;
});

const suspectsNames = _.Map(suspects, (suspect) => {

    return suspect.name;
});