const _ = {};


// Implement _.each method.
_.each = function(list, callback) {
    if (Array.isArray(list)) {
        //loop through array
        for (let i = 0; i < list.length; i++){
            //call the callback with a list item
            callback(list[i], i, list);
        }
    } else {
        //loop through object
        for (let key in list) {
            //call the callback with an object property value
            callback(list[key], key, list);
        }
    }
}


function CreateSuspectObjects(name) { 
    return { 
      name: name,   
      color: name.split(' ')[1],   
      speak() {log(`my name is ${name}`);}
    }; 
}; 
  

let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']; 

let suspectsList = [];

_.each(suspects, function(name, i, list){
    suspectsList.push(CreateSuspectObjects(name));
})

console.log(suspectsList);

// Implement _.map method.
_.map = function(list, callback) {

    let results = [];
    
    for (let i = 0; i < list.length; i++){
        results.push(callback(list[i]));
    }
    return results;
}

console.log(_.map([1, 2, 3], function(value) { return value + 1;}));