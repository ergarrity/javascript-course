// Instructions:

// 1. Create an object that looks like this:

// {"name": "Rusty", "room": "kitchen", "weapon": "candlestick"}

// 2. Extract out the weapon and location using destructuring.

let murderMystery = {name: "Rusty", room: "kitchen", weapon: "candlestick"};

let {weapon, room} = murderMystery;

console.log(weapon);
console.log(room);