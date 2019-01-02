const _ = {};

_.from = function(arr) {
    result = [];
    for (let i = 0; i < arguments.length; i++){
        result.push(arguments[i]);
    }
    return result;
}