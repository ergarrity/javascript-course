const _ = {};

_.reduce = function(list, cb, initialValue){
    let accumulator = initialValue;
    for (let i = 0; i < list.length; i++){
        if (i === 0 && accumulator === undefined) {
            accumulator = list[0]
        } else {
        accumulator = cb(list[i], accumulator)
        }
    }
    return accumulator;
}

console.log(_.reduce([1, 2, 3], (v, sum) => v + sum));