const videoData = [

    {
        name: 'Miss Scarlet',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: true },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': true },
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
            { library: true }
        ]
    },
    {
        name: 'Mrs. White',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: true },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: true }
        ]
    },
]

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
    },

    Reduce: function (list, callback, initial) {

        let memo = initial;
        for (let index = 0; index < list.length; index++) {

            if (index === 0 && memo === undefined) {

                memo = list[0];
            }
            else {

                memo = callback(list[index], memo);
            }
        }
        return memo;
    }
}

const notInRoom = (suspect, memo) => {

    const emptyRoom = _.Reduce(suspect.rooms, (room, memo) => {

        if(room === false) memo.push(room);
        return memo;
    }, [])
    
    return emptyRoom;
};

notInRooms = _.Map(videoData, notInRoom);

console.log(notInRooms);
