const patternReduce = (mtxIn) => {
    const qtyRows = mtxIn.length;
    const qtyCols = mtxIn[0].length;
    
    //                    [x, y]
    let pointerTopLeft =  [0, 0];
    let pointerBtmRight = [2, 2];

    const reducePattern = [
        [true,  true,  true],
        [false, true, false],
        [true,  true,  true]
    ];
    
    let maxVal = null;
    let newRow =  [];
    const newMtx = []

    while (pointerBtmRight[0] < qtyCols && pointerBtmRight[1] < qtyRows) {
        let sum = 0;
        reducePattern.forEach((row, colIdx) => {
            row.forEach((useValue, rowIdx) => {
                if (useValue) {
                    sum = sum + mtxIn[pointerTopLeft[0]+colIdx][pointerTopLeft[1]+rowIdx]
                }
            })
        })
        // Add summed value to the row
        newRow.push(sum);

        if (maxVal === null) {
            maxVal = sum;
        }

        if (maxVal < sum) {
            maxVal = sum;
        }

        if(pointerBtmRight[0] === qtyCols - 1) {
            // Push completed row to output
            newMtx.push(newRow)
            // Move to the next row
            pointerTopLeft[0] = 0;
            pointerTopLeft[1] = pointerTopLeft[1] + 1;
            pointerBtmRight[0] = 2;
            pointerBtmRight[1] = pointerTopLeft[1] + 2;
            // Reset row creation to an empty array
            newRow = [];
        } else {
            // Move to the next column
            pointerTopLeft[0] = pointerTopLeft[0] + 1;
            pointerBtmRight[0] = pointerBtmRight[0] + 1;
        }
    }
    return maxVal;
}

const testArray = [
    [-9, -9, -9,  1, 1, 1],
    [ 0, -9,  0,  4, 3, 2],
    [-9, -9, -9,  1, 2, 3],
    [ 0,  0,  8,  6, 6, 0],
    [ 0,  0,  0, -2, 0, 0],
    [ 0,  0,  1,  2, 4, 0]
];

patternReduce(testArray);