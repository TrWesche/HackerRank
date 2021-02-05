function alternatingCharacters(s) {
    let lastChar = "";
    let count = 0;

    for (const char of s) {
        if (char === lastChar) {
            count++;
        }

        lastChar = char;
    }

    return count;
}


const testString1 = "AAAA";
const testString2 = "BBBBB";
const testString3 = "ABABABAB";
const testString4 = "BABABA";
const testString5 = "AAABBB";

console.log(alternatingCharacters(testString1));
console.log(alternatingCharacters(testString2));
console.log(alternatingCharacters(testString3));
console.log(alternatingCharacters(testString4));
console.log(alternatingCharacters(testString5));