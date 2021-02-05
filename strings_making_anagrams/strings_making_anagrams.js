function makeAnagram(a, b) {
    const mapA = new Map;
    const mapB = new Map;
    const allKeys = new Map;

    let delta = 0;

    for (const letter of a) {
        if (mapA.has(letter)) {
            mapA.set(letter, mapA.get(letter) + 1);
        } else {
            mapA.set(letter, 1);
        }

        if (!allKeys.has(letter)) {
            allKeys.set(letter, 1)
        }
    }

    for (const letter of b) {
        if (mapB.has(letter)) {
            mapB.set(letter, mapB.get(letter) + 1);
        } else {
            mapB.set(letter, 1);
        }

        if (!allKeys.has(letter)) {
            allKeys.set(letter, 1)
        }
    }

    allKeys.forEach((val, key) => {
        if (mapA.has(key) && mapB.has(key)) {
            const diffAB = Math.abs(mapA.get(key) - mapB.get(key));
            delta = delta + diffAB;
        } else if (mapA.has(key)) {
            delta = delta + mapA.get(key);
        } else if (mapB.has(key)) {
            delta = delta + mapB.get(key);
        } else {
            console.log("Error")
        }
    })


    // mapA.forEach((val, key) => {
    //     if (mapB.has(key)) {
    //         const qtyB = mapB.get(key);
    //         const diffAB = Math.abs(qtyB - val);
    //         mapA.set(key, val - diffAB);
    //         delta = delta + diffAB;
    //     } else {
    //         mapA.set(key, 0);
    //         delta = delta + val;
    //     }
        
    // })

    // mapB.forEach((val, key) => {
    //     if (mapA.has(key)) {
    //         const qtyA = mapA.get(key);
    //         const diffAB = Math.abs(qtyA - val);
    //         mapB.set(key, val - diffAB);
    //         delta = delta + diffAB;
    //     } else {
    //         mapB.set(key, 0);
    //         delta = delta + val;
    //     }
    // })

    return delta;
}


// const stringA = "cde";
// const stringB = "abc";

const stringA = "fcrxzwscanmligyxyvym";
const stringB = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";


console.log(makeAnagram(stringA, stringB));