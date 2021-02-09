// k = integer -> maximum amount of losses in important contests allowed
// contests = [
//     [L1, T1]
//     [.., ..]
//     [Ln, Tn]
// ]
// Where L is an integer representing the luck value and T is an integer 1 or 0 representing a True/False if the contest is important.

// function luckBalance(k, contests) {
//     let sumImportant = 0;
//     let sumNotImportant = 0;

//     for (const contestPair of contests) {
//         if (contestPair[1]) {
//             sumImportant = sumImportant + contestPair[0];
//         } else {
//             sumNotImportant = sumNotImportant + contestPair[0];
//         }
//     }

//     return [sumImportant, sumNotImportant];
// }





function luckBalance(k, contests) {
    const minLosses = [];
    let totalLuck = 0;

    for (const contestPair of contests) {
        if (contestPair[1]) {
            minLosses.push(contestPair[0]);
            minLosses.sort((a, b) => b - a);
        } else {
            totalLuck = totalLuck + contestPair[0];
        }
    }

    if (minLosses.length > 0) {
        for (let i = 0; i < minLosses.length; i++) {
            if (i < k) {
                totalLuck = totalLuck + minLosses[i];
            } else {
                totalLuck = totalLuck - minLosses[i];
            }
    
        }
    }

    return totalLuck;
}


const contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];
const mustWins = 3;

console.log(luckBalance(mustWins, contests));


