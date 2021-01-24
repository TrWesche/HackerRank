// charCode

// function hash(key) {
//     return Array.from(key).reduce(
//         (accum, char) => accum + char.charCodeAt(), 0
//     )
// }

// function checkMagazine(magazine, note) {
//     let available = true;
//     const magazineWords = new Set(magazine);

//     for (const word of note) {
//         available = available & magazineWords.has(word);

//         if (!available) {
//             break;
//         }
//     }

//     return available ? 'Yes' : 'No';
// }

// Return Version
// function checkMagazine(magazine, note) {
//     let available = true;
//     const kvStore = new Map();

//     magazine.map((key) => {
//         if (kvStore.has(key)) {
//             kvStore.set(key, kvStore.get(key) + 1);
//         } else {
//            kvStore.set(key, 1); 
//         }  
//     })

//     for (const word of note) {
//         available = available & (kvStore.get(word) > 0);
//         if (available) {
//             kvStore.set(word, kvStore.get(word) - 1)
//         }
//     }

//     return available ? 'Yes' : 'No';
// }

// Final version (console.log instead of returning value)
function checkMagazine(magazine, note) {
    let available = true;
    const kvStore = new Map();

    magazine.map((key) => {
        if (kvStore.has(key)) {
            kvStore.set(key, kvStore.get(key) + 1);
        } else {
           kvStore.set(key, 1); 
        }  
    })

    for (const word of note) {
        available = available & (kvStore.get(word) > 0);
        if (available) {
            kvStore.set(word, kvStore.get(word) - 1)
        }
    }

    console.log(available ? 'Yes' : 'No');
}




const magazine1Words = ['two', 'times', 'three', 'is', 'not', 'four']
const note1Words = ['two', 'times', 'two', 'is', 'four']

checkMagazine(magazine1Words, note1Words);


// const magazine2Words = ['give', 'me', 'one', 'grand', 'today', 'night']
// const note2Words = ['give', 'one', 'grand', 'today']

// console.log(checkMagazine(magazine2Words, note2Words));