// Final version (console.log instead of returning value)
// Doesn't handle r=1 case in this form.  Maybe will do that later.

function countTriplets(arr, r) {
    const kvStore = new Map();
    let qtyTriplets = 0;

    let outerIdxLeft = 0;
    const outerIdxRight = arr.length - 1;
    const tripletMax = arr[outerIdxRight];

    while (arr[outerIdxLeft] * r < tripletMax) {
        let tripletIdx = 0;
        let innerIdxLeft = outerIdxLeft;
    
        const searchVals = [arr[outerIdxLeft], arr[outerIdxLeft] * r, arr[outerIdxLeft] * r * r, arr[outerIdxLeft] * r * r * r];
        const foundTransitions = [outerIdxLeft];

        while (tripletIdx < 3) {    
            let innerIdxRight = outerIdxRight;
            let notFound = false;
            let testIdx;

            tripletIdx++;

            while (!notFound) {
                testIdx = Math.floor( (innerIdxRight - innerIdxLeft + 1) / 2) + innerIdxLeft;

                if ((arr[testIdx] === searchVals[tripletIdx]) && (arr[testIdx -1] === searchVals[tripletIdx - 1])) {
                    foundTransitions.push(testIdx);
                    innerIdxLeft = testIdx;
                    break;
                } else if (innerIdxLeft + 1 === innerIdxRight || searchVals[tripletIdx] > tripletMax) {
                    notFound = true;
                } else if (arr[testIdx] < searchVals[tripletIdx]) {
                    innerIdxLeft = testIdx;
                } else {
                    innerIdxRight = testIdx;
                }
            }
    
    
            if (!foundTransitions[tripletIdx] && searchVals[tripletIdx] < tripletMax) {
                outerIdxLeft = innerIdxRight;
                break;
            }

            if (tripletIdx === 3 && searchVals[2] === tripletMax) {
                foundTransitions.push(arr.length);
            }
        }

        if(foundTransitions.length === 4) {
            outerIdxLeft = foundTransitions[1];
            const total = (foundTransitions[1] - foundTransitions[0]) * (foundTransitions[2] - foundTransitions[1]) * (foundTransitions[3] - foundTransitions[2]);
            kvStore.set(`${searchVals[0]}-${searchVals[1]}-${searchVals[2]}`, total);
            qtyTriplets = qtyTriplets + total;
        }
    }

    console.log(kvStore);

    return qtyTriplets;
}


console.log(countTriplets([1, 1, 3, 3, 9], 3));

console.log(countTriplets([1, 1, 1, 1, 9, 9 , 9], 3))

console.log(countTriplets([1, 1, 3, 3, 3, 9, 9], 3));

console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));

console.log(countTriplets([1, 5, 5, 25, 125], 5));

console.log(countTriplets([1, 2, 2, 4], 2))