// function arrayManipulation(n, queries) {
//     let maxValue = null;
//     const calcMap = new Map();

//     for (let i = 0; i < n; i++) {
//         calcMap.set(i, 0);
//     }


//     for (const query of queries) {
//         for (let i = query[0] - 1; i < query[1]; i++) {
//             const currentVal = calcMap.get(i);
//             calcMap.set(i, currentVal + query[2]);

//             if (maxValue === null) {
//                 maxValue = query[2];
//             }

//             if (currentVal + query[2] > maxValue) {
//                 maxValue = currentVal + query[2]
//             }
//         }
//     }

//     return maxValue;
// }

// console.log(arrayManipulation(10, [ [1,5,3], [4,8,7], [6,9,1] ]));


// Result derived from the great work referenced in the discussions
function arrayManipulation(n, queries) {
    let maxValue = 0;
    let counter = 0
    const calcMap = new Map();

    for (let i = 1; i <= n; i++) {
        calcMap.set(i, 0);
    }


    for (const query of queries) {
        const valLeftIdx = calcMap.get(query[0]);
        const valRightIdx = calcMap.get(query[1] + 1);

        calcMap.set(query[0], valLeftIdx + query[2]);
        calcMap.set(query[1] + 1, valRightIdx - query[2]);
    }

    calcMap.forEach((val) => {
        counter = counter + val;
        if (counter > maxValue) {
            maxValue = counter;
        }
    })

    return maxValue;
}


const longTestArrayLen = 40;
const something = 30;
const longTestArray = [
    [29, 40, 787],
    [9, 26, 219],
    [21, 31, 214],
    [8, 22, 719],
    [15, 23, 102],
    [11, 24, 83],
    [14, 22, 321],
    [5, 22, 300],
    [11, 30, 832],
    [5, 25, 29],
    [16, 24, 577],
    [3, 10, 905],
    [15, 22, 335],
    [29, 35, 254],
    [9, 20, 20],
    [33, 34, 351],
    [30, 38, 564],
    [11, 31, 969],
    [3, 32, 11],
    [29, 35, 267],
    [4, 24, 531],
    [1, 38, 892],
    [12, 18, 825],
    [25, 32, 99],
    [3, 39, 107],
    [12, 37, 131],
    [3, 26, 640],
    [8, 39, 483],
    [8, 11, 194],
    [12, 37, 502]
];

console.log(arrayManipulation(longTestArrayLen, longTestArray))