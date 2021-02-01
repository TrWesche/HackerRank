// function mergeSort (arr) {
//     const returnArray = [];

//     if (arr.length > 1) {
//         let idxLeft = 0;
//         let idxRight = 0;

//         const arrLeft = arr.slice(0, Math.floor(arr.length) / 2);
//         const arrRight = arr.slice(Math.floor(arr.length / 2));

//         const sortedLeft = mergeSort(arrLeft);
//         const sortedRight = mergeSort(arrRight);

//         while (idxLeft < sortedLeft.length || idxRight < sortedRight.length) {
//             if (idxLeft > sortedLeft.length) {
//                 returnArray.push(...sortedRight.slice(idxRight));
//                 console.log("Array Left Depleted, adding all right side:", sortedRight.slice(idxRight));
//                 break;
//             }
            
//             if (idxRight > sortedRight.length) {
//                 returnArray.push(...sortedLeft.slice(idxLeft));
//                 console.log("Array Right Depleted, adding all left side:", sortedLeft.slice(idxLeft));
//                 break;
//             }

//             if (sortedLeft[idxLeft] <= sortedRight[idxRight] || sortedRight[idxRight] === undefined) {
//                 returnArray.push(sortedLeft[idxLeft]);
//                 console.log(`Value at ${idxLeft} on the Left side (${sortedLeft[idxLeft]}) <= value at ${idxRight} on the Right side (${sortedRight[idxRight]}).  Return array is now: ${returnArray}`);
//                 idxLeft++;
//             } else {
//                 returnArray.push(sortedRight[idxRight]);
//                 console.log(`Value at ${idxLeft} on the Left side (${sortedLeft[idxLeft]}) > value at ${idxRight} on the Right side (${sortedRight[idxRight]}).  Return array is now: ${returnArray}`);
//                 idxRight++;
//             }
//         }
//         return returnArray;
//     } else {
//         if (arr[0]) {
//             returnArray.push(arr[0]);
//         }
//         return returnArray;
//     }
// }




function mergeSort (arr) {
    const returnArray = [];

    if (arr.length > 1) {
        let idxLeft = 0;
        let idxRight = 0;

        const arrLeft = arr.slice(0, Math.floor(arr.length) / 2);
        const arrRight = arr.slice(Math.floor(arr.length / 2));

        const sortedLeft = mergeSort(arrLeft);
        const sortedRight = mergeSort(arrRight);

        while (idxLeft < sortedLeft.length || idxRight < sortedRight.length) {

            if (sortedLeft[idxLeft] <= sortedRight[idxRight] || sortedRight[idxRight] === undefined) {
                returnArray.push(sortedLeft[idxLeft]);
                idxLeft++;
            } else {
                returnArray.push(sortedRight[idxRight]);
                idxRight++;
            }
        }
        return returnArray;
    } else {
        if (arr[0]) {
            returnArray.push(arr[0]);
        }

        return returnArray;
    }
}


function maximumToys(prices, k) {
    let priceIdx = 0;
    let fundsTracker = k;
    let toysTracker = 0;
    const sortedPrices = mergeSort(prices);

    while (fundsTracker >= 0 && priceIdx < sortedPrices.length) {
        fundsTracker = fundsTracker - sortedPrices[priceIdx];

        if (fundsTracker >= 0) {
            toysTracker++;
            priceIdx++;
        }
    }

    return toysTracker;
}

const inputArray = [1, 12, 5, 111, 200, 1000, 10];
const totalFunds = 0;

// const inputArray = [1, 1, 2, 2, 5, 7, 2, 50, 22, 5, 100, 48, 8, 9];

console.log(mergeSort(inputArray));

console.log(maximumToys(inputArray, totalFunds));