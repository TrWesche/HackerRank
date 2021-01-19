const sales_by_match = (n, arrayIn) => {
    const matchCollection = new Map();
    let matchQty = 0;

    arrayIn.forEach(element => {
        matchCollection.set(element, matchCollection.has(element) ? matchCollection.get(element) + 1 : 1);
    });

    matchCollection.forEach(value => {
        matchQty = matchQty + Math.floor(value/2);
    });

    return matchQty;
}

console.log(sales_by_match([1,2,1,2,1,3,2]));
console.log(sales_by_match([10,20,20,10,10,30,50,10,20]));