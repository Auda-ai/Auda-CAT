function addingNumbers (array) {
    let sum = 0;
    for(i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}

module.exports = addingNumbers();