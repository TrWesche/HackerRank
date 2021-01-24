// Final version (console.log instead of returning value)
function sherlockAndAnagrams(s) {
    let total = 0;

    const sArr = s.split('');
    let idxLeft = 0;
    let idxRight = 1;

    const kvStore = new Map();

    while (idxLeft < sArr.length) {
        const tempArr = sArr.slice(idxLeft, idxRight);

        // const hashInt = tempArr.reduce((acc, val, idx) => {
        //     return acc * (val.charCodeAt(0));
        // }, tempArr.length)
        // const hashValue = `${tempArr.length}-${hashInt.toString()}`;

        const hashValue = tempArr.sort().toString('');


        const lastHashValue = kvStore.get(hashValue);
        if (lastHashValue) {
            kvStore.set(hashValue, kvStore.get(hashValue) + 1);
        } else {
            kvStore.set(hashValue, 1)
        }

        if (idxRight < sArr.length) {
            idxRight++;
        } else {
            idxLeft++;
            idxRight = idxLeft + 1;
        }
    }

    kvStore.forEach((val) => {
        if (val > 1) {
            total = total + ((val-1)*val/2);
        }
    })

    return total;
}



// const string1 = 'abba';
// const string2 = 'abcd';
// const string3 = 'ifailuhkqq';
// const string4 = 'kkkk';
// const string5 = 'cdcd';
// const string6 = 'mom';
const string7 = 'ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel'; // 399
// const string7 = 'gffryqktmwocejbxfidpjfgrrkpowoxwggxaknmltjcpazgtnakcfcogzatyskqjyorcftwxjrtgayvllutrjxpbzggjxbmxpnde'; // 471
// const string9 = 'mqmtjwxaaaxklheghvqcyhaaegtlyntxmoluqlzvuzgkwhkkfpwarkckansgabfclzgnumdrojexnrdunivxqjzfbzsodycnsnmw'; // 370
// const string10 = 'ofeqjnqnxwidhbuxxhfwargwkikjqwyghpsygjxyrarcoacwnhxyqlrviikfuiuotifznqmzpjrxycnqktkryutpqvbgbgthfges'; // 403
// const string11 = 'zjekimenscyiamnwlpxytkndjsygifmqlqibxxqlauxamfviftquntvkwppxrzuncyenacfivtigvfsadtlytzymuwvpntngkyhw'' // 428


// const string7 = 'abcdab';

// console.log(sherlockAndAnagrams(string1));
// console.log(sherlockAndAnagrams(string2));
// console.log(sherlockAndAnagrams(string3));
// console.log(sherlockAndAnagrams(string4));
// console.log(sherlockAndAnagrams(string5));
// console.log(sherlockAndAnagrams(string6));
console.log(sherlockAndAnagrams(string7));