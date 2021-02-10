function minimumAbsoluteDifference(arr) {
    let minDiff = null;

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            const testVal = Math.abs(arr[i] - arr[j]);

            if (minDiff === null || testVal < minDiff) {
                minDiff = testVal
            }
        }
    }

    return minDiff;
}


 



const testArr1 = [3, -7, 0];
const testArr2 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];

console.log(minimumAbsoluteDifference(testArr1));
console.log(minimumAbsoluteDifference(testArr2));