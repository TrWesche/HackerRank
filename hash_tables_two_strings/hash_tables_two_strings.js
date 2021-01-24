// Final version (console.log instead of returning value)
function twoStrings(s1, s2) {
    let exists = false;
    const s1Arr = s1.split('');
    const s2Arr = s2.split('');

    const kvStore = new Map();

    s1Arr.map((key) => {
        kvStore.set(key, true); 
    })

    for (const char of s2Arr) {
        exists = exists || (kvStore.get(char));
        if (exists) {
            break;
        }
    }

    // console.log(exists ? 'Yes' : 'No');
    return (exists ? 'YES' : 'NO');
}




const string1A = 'hello';
const string2A = 'world';

console.log(twoStrings(string1A, string1A));


const string1B = 'hi';
const string2B = 'world';

console.log(twoStrings(string1B, string2B));