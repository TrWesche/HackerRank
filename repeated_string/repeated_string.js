const getQuantityA = (n, substr) => {
    const substrArray = substr.split("");
    const remainderLetters = n % substr.length;
    const qtyFullStrings = Math.floor(n/substr.length);
    const lastSubSegment = substrArray.slice(0, remainderLetters);

    const stdCount = substrArray.reduce((acc, char) => {
        if (char === "a") {
            return acc + 1;
        }
        return acc;
    }, 0)

    const subSegmentCount = lastSubSegment.reduce((acc, char) => {
        if (char === "a") {
            return acc + 1;
        }
        return acc;
    }, 0)

    const total = (stdCount * qtyFullStrings) + subSegmentCount;

    return total;
}

getQuantityA(10, "aba");