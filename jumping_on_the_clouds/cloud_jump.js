// Input

const cloudJump = (cloudData) => {
    let jumps = 0;
    let pointer = 0;

    while (pointer < cloudData.length - 1) {
        pointer += 2;
        if (cloudData[pointer]) {
            pointer -= 1;
        }
        jumps++;
    }
    return jumps;
}

console.log(cloudJump([0,0,1,0,0,1,0]));
console.log(cloudJump([0,0,0,0,1,0]));
console.log(cloudJump([0,0,1,0,0,1,0,1,0,0,1,0,1,0,0]));