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


// function activityNotifications(expenditures, d) {
//     let totalAlerts = 0;
//     let idxLeft = 0;
//     let idxRight = 0;

//     while (idxRight < expenditures.length) {
//         if (idxRight < d) {
//             console.log(`Accumulating data: ${idxRight}`);
//             idxRight++;
//         } else {
//             console.log(`Have data: ${idxLeft}:${idxRight}`);
//             let median;
//             const sortedSubArray = mergeSort(expenditures.slice(idxLeft, idxRight));
           
//             console.log(`Sorted SubArray: ${sortedSubArray}`)
//             if (sortedSubArray.length % 2) {
//                 median = sortedSubArray[Math.floor(sortedSubArray.length / 2)];
//             } else {
//                 median = (sortedSubArray[sortedSubArray.length / 2] + sortedSubArray[sortedSubArray.length/2 - 1]) / 2;
//             }

//             console.log(`Median Value: ${median}`);
//             console.log(`Value to Check Against: ${expenditures[idxRight]}`);
//             if (expenditures[idxRight] >= median * 2) {
//                 totalAlerts++;
//             }

//             idxRight++;
//             idxLeft++;
//         }
//     }

//     return totalAlerts;
// }




function activityNotifications(expenditures, d) {
    let totalAlerts = 0;
    let idxLeft = 0;
    let idxRight = 0;
    let sortedSubArray = null;

    while (idxRight < expenditures.length) {
        if (idxRight < d) {
            idxRight++;
        } else {
            let median;

            console.log(`------Have data: ${idxLeft}:${idxRight}`);

            if (sortedSubArray) {
                const tempArr = [];
                let windowLeftRemoved = false;
                let windowRightAdded = false;
                
                console.log(`Value to be removed = ${expenditures[idxLeft - 1]}`);
                console.log(`Value to be added ${expenditures[idxRight]}`);

                sortedSubArray.forEach((val, idx) => {
                    if (!windowLeftRemoved && val === expenditures[idxLeft - 1]) {
                        console.log(`Skipping ${val} at ${idx}`)
                        windowLeftRemoved = true;
                    } else {
                        if (!windowRightAdded && expenditures[idxRight] <= val) {
                            console.log(`Adding new expenditure ${expenditures[idxRight]} in the temp array.`);
                            tempArr.push(expenditures[idxRight]);
                            tempArr.push(val);
                            windowRightAdded = true;
                        } else {
                            console.log(`Continuing with ${val} in the current order of the array.`);
                            tempArr.push(val);
                        }
                    }
                })

                if (!windowRightAdded) {
                    console.log(`Adding ${expenditures[idxRight]} to the end of the array.`)
                    tempArr.push(expenditures[idxRight]);
                }

                sortedSubArray = tempArr;
                
            } else {
                sortedSubArray = mergeSort(expenditures.slice(idxLeft, idxRight));
            }
            
           
            console.log(`Sub Array = ${sortedSubArray}`)
            if (sortedSubArray.length % 2) {
                median = sortedSubArray[Math.floor(sortedSubArray.length / 2)];
            } else {
                median = (sortedSubArray[sortedSubArray.length / 2] + sortedSubArray[sortedSubArray.length/2 - 1]) / 2;
            }

            console.log(`Median Value: ${median}`);
            console.log(`Value to Check Against: ${expenditures[idxRight]}`);
            if (expenditures[idxRight] >= median * 2) {
                totalAlerts++;
            }

            idxRight++;
            idxLeft++;
        }
    }

    return totalAlerts;
}




// const testArray = [2, 3, 4, 2, 3, 6, 8, 4, 5];
// const testDays = 5;

// const testArray = [1, 2, 3, 4, 4];
// const testDays = 4;

const testArray = [1, 1, 2, 2, 3, 3, 3, 1, 1 ,1, 4, 5, 6, 6, 1];
const testDays = 5;


console.log(activityNotifications(testArray, testDays));