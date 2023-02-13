function multipyingNumbers (array) {
    let product = 1;
    for(i=0; i<array.length; i++){
        product *= array[i];
    }
    return product;
}

module.exports = multipyingNumbers();