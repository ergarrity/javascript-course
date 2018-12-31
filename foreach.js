// Write _.each() method.

const _ = {};

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
            callback(list[key], i, list);
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
  
  
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']; 
  
var suspectsList = [];

_.each(suspects, function(name, i, list){
    suspectsList.push(CreateSuspectObjects(name));
})

console.log(suspectsList);

