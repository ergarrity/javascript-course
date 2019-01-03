const _ = require('underscore');
const alert = require('alert-node');

const myAlert = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;
    const alerter = ()=>{
        alert(`${x} ${++count}`);
    };
    return alerter;
};

//assigns value of alerter to new variable funcAlert (this will be a function body)
const funcAlert = myAlert();

//assigns value of alerter to funcAlert2 (this will be a function body)
const funcAlert2 = myAlert();

//runs alerter function with x and count strings defined in myAlert
funcAlert();

//count will be incremented by one from previous call, because we haven't
//created a new execution context--count hasn't been re-written since last call
funcAlert();

//runs alerter function with a new/separete execution context from funcAlert
funcAlert2();

//increments by 1 again because the execution context will stay consistent from
//last time we called funcAlert2
funcAlert2();