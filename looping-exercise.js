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

// printSuspects();

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