// const newYearChaos = (q) => {
//     let totalSwaps = 0;
//     let tooChaotic = false;
    
//     let currentMax = null;
//     let individualSwaps = 0;
//     for (let i = 0; i < q.length; i++) {
//         if (currentMax === null) {
//             currentMax = q[i];
//             continue;
//         }

//         if (currentMax > q[i]) {
//             individualSwaps++;
//             totalSwaps++;
//             if (individualSwaps > 2) {
//                 tooChaotic = true;
//                 break;
//             }
//         } else {
//             individualSwaps = 0;
//             currentMax = q[i]
//         }
//     }

//     if (tooChaotic) {
//         console.log("Too chaotic")
//     } else {
//         console.log(totalSwaps);
//     }
// }


// const newYearChaos = (q) => {
//     let totalSwaps = 0;
//     let tooChaotic = false;
    
//     let lastValue = null;
//     for (let i = 0; i < q.length; i++) {
//         // Store value at index 0 and continue
//         if (lastValue === null) {
//             lastValue = q[i];
//             continue;
//         }

//         console.log("Last Value:", lastValue, "Current Index:", i);
//         // Compare last value to current value
//         if (lastValue > i) {
//             const individualSwaps = lastValue - i;
//             console.log("Individual Swaps:", individualSwaps);
//             totalSwaps = totalSwaps + individualSwaps;
//             if (individualSwaps > 2) {
//                 tooChaotic = true;
//                 break;
//             }
//         }
//         console.log("Total Swaps:", totalSwaps);

//         lastValue = q[i]
//     }

//     if (tooChaotic) {
//         console.log("Too chaotic")
//     } else {
//         console.log(totalSwaps);
//     }
// }


const newYearChaos = (q) => {
    let totalSwaps = 0;
    let tooChaotic = false;

    // Check for to chaotic O(n)
    let lastValue = null;
    for (let i = 0; i < q.length; i++) {
        // Store value at index 0 and continue
        if (lastValue === null) {
            lastValue = q[i];
            continue;
        }

        // Check to see if any values are more then 2 off their target index
        if (lastValue > i) {
            const individualSwaps = lastValue - i;
            if (individualSwaps > 2) {
                tooChaotic = true;
                break;
            }
        }
        lastValue = q[i]
    }

    if (tooChaotic) {
        console.log("Too chaotic");
        return;
    }
    

    // If not to chaotic calculate the number of swaps which were made
    let sorted = false;
    while (!sorted) {
        for (let i = 0; i < q.length - 1; i++) {
            if (q[i] > q[i+1]) {
                const tempVal = q[i]
                q[i] = q[i + 1];
                q[i + 1] = tempVal;
                totalSwaps++;
                break;
            }

            if (i === q.length - 2) {
                sorted = true;
            }
        }
    }

    console.log(totalSwaps);
}


newYearChaos([2, 1, 5, 3, 4]);
newYearChaos([2, 5, 1, 3, 4]);
newYearChaos([1, 2, 5, 3, 4, 7, 8, 6]);
newYearChaos([5, 1, 2, 3, 7, 8, 6, 4])
newYearChaos([1, 2, 5, 3, 7, 8, 6, 4])