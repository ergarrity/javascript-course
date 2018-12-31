const _ = {};

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

_.filter = function(array, callback){
    let results = [];

    for (let i = 0; i < array.length; i++){
        if (callback(array[i])) {
            results.push(array[i]);
        }
    }
    return results;
}

console.log(
_.filter(videoData, function(item){
    return item.present;
    }));

// Next exercise: filter and map videoData to get names of final suspects to send
// back to the team

_.map = function(list, callback) {

    let results = [];
    
    for (let i = 0; i < list.length; i++){
        results.push(callback(list[i]));
    }
    return results;
}

console.log(_.map((_.filter(videoData, function(suspect){
    return suspect.present;
})), function(suspect) {
    return suspect.name;
}));
    
