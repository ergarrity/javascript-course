// Part 1: Loop through the suspects array

const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange",
            guess: "not guilty"
        }, {
            name: "Miss Scarlet",
            color: "red",
            guess: "guilty"
        }
    ]
}

function printSuspects() {
    for (let i = 0; i < game.suspects.length; i++){
        console.log(game.suspects[i]);
    }
}

printSuspects();

// Part 2: Loop through all of the properties of the suspects
// object in the suspects array. Mark them if you think they
// are guilty.

function printSuspectProperties() {
    
    for (let i = 0; i < game.suspects.length; i++){
        
        console.log("SUSPECT " + (i+1) + ":");
        
        let suspect = game.suspects[i];
        
        for (let property in suspect) {
            console.log("    " +property + ": " + suspect[property]);
        }
    }
}

printSuspectProperties();

// Part 3: Destructure this nested data structure into two variables
// with the strings 'red' and 'orange'

var suspects = [
    {
        name: "Rusty",
        color: "orange"
    }, {
        name: "Miss Scarlet",
        color: "red"
    }
];

let [firstColor, secondColor] = [suspects[0].color, suspects[1].color];

console.log(firstColor, secondColor);

// ALT SOLUTION

let [{color: colorOne}, {color: colorTwo}] = suspects;

console.log(colorOne, colorTwo);
