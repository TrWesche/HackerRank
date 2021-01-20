// const minimumSwaps = (arr) => {
//     let swaps = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = arr.length; j > i; j--) {            
//             if (arr[i] > arr[j]) {
//                 const tempVal = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = tempVal;
//                 swaps++;
//             }
//         }
//     }
//     return swaps;
// }

// console.log(minimumSwaps([4, 3, 1, 2]));
// console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));


// const minimumSwaps = (arr) => {
//     let swaps = 0;
//     let leftIdx = 0;
//     let rightIdx = leftIdx + 1;
//     let arrLength = arr.length - 1;

//     while (leftIdx < arrLength) {
//         if (arr[leftIdx] > arr[rightIdx]) {
//             const tempVal = arr[leftIdx];
//             arr[leftIdx] = arr[rightIdx];
//             arr[rightIdx] = tempVal;
//             rightIdx = leftIdx + 1;
//             swaps++;
//         } else if(rightIdx < arrLength) {
//             rightIdx++;
//         } else {
//             leftIdx++;
//             rightIdx = leftIdx + 1;
//         }
//     }
//     return swaps;
// }

// console.log(minimumSwaps([2, 3, 4, 1, 5]))
// console.log(minimumSwaps([4, 3, 1, 2]));
// console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));



// const minimumSwaps = (arr) => {
//     let swaps = 0;
//     let arrLength = arr.length - 1;

//     let leftIdx = 0;
//     let rightIdx = arrLength;
    

//     while (leftIdx < arrLength) {
//         if (arr[leftIdx] > arr[rightIdx]) {
//             const tempVal = arr[leftIdx];
//             arr[leftIdx] = arr[rightIdx];
//             arr[rightIdx] = tempVal;
//             rightIdx = arrLength;
//             swaps++;
//         } else if(rightIdx > leftIdx) {
//             rightIdx--;
//         } else {
//             leftIdx++;
//             rightIdx = arrLength;
//         }
//     }
//     return swaps;
// }

// console.log(minimumSwaps([2, 3, 4, 1, 5]))
// console.log(minimumSwaps([4, 3, 1, 2]));
// console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));


// This works for the website, really wouldn't work in the real world; operates on a poor assumption about real data
const minimumSwaps = (arr) => {
    let idx = 0;
    let swaps = 0;
    
    while(idx < arr.length){
        if(arr[idx] !== idx + 1){
            const tempVal = arr[idx];
            arr[idx] = arr[tempVal - 1];
            arr[tempVal - 1] = tempVal;
            swaps++;
        } else {
            idx++;
        }
    }
    return swaps;
}



// Length: 100

// 8 45 35 84 79 12 74 92 81 82 61 32 36 | 1 65 44 89 40 28 20 97 90 22 87 48 26 | 
// 56 18 49 71 23 34 59 54 14 16 19 76 83 | 95 31 30 69 7 9 60 66 25 52 5 37 27 63 | 
// 80 24 42 3 50 6 11 64 10 96 47 38 57 2 | 88 100 4 78 85 21 29 75 94 43 77 33 86 | 
// 98 68 73 72 13 91 70 41 17 15 67 93 62 | 39 53 51 55 58 99 46

// Output: 91


console.log(minimumSwaps([
    8, 45, 35, 84, 79, 12, 74, 92, 81, 82, 61, 32, 36,
    1, 65, 44, 89, 40, 28, 20, 97, 90, 22, 87, 48, 26,
    56, 18, 49, 71, 23, 34, 59, 54, 14, 16, 19, 76, 83,
    95, 31, 30, 69, 7, 9, 60, 66, 25, 52, 5, 37, 27, 63,
    80, 24, 42, 3, 50, 6, 11, 64, 10, 96, 47, 38, 57, 2,
    88, 100, 4, 78, 85, 21, 29, 75, 94, 43, 77, 33, 86,
    98, 68, 73, 72, 13, 91, 70, 41, 17, 15, 67, 93, 62,
    39, 53, 51, 55, 58, 99, 46
]))