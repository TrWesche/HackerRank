const leftRotateArray = (a, d) => {
    const leftSide = a.slice(0, d);
    const rightSide = a.slice(d);
    const rotatedArray = [...rightSide, ...leftSide];

    // let outputString = "";
    // rotatedArray.forEach((val) => {
    //     outputString = outputString.concat(val, " ");
    // });

    // return outputString;

    return rotatedArray;
}

leftRotateArray([1, 2, 3, 4, 5], 4);


// Instructions weren't clear, below code is for ingesting a string version of the input assuming the data is segmented with a newline character

// const testData = "5 4\n1 2 3 4 5";

// testData.split("\n")

// const leftRotateStringArray = (input) => {
//     const lineSplit = input.split("\n");
    
//     const line1 = lineSplit[0].split(" ");
//     const operationArr = lineSplit[1].split(" ");

//     console.log(line1);
//     console.log(operationArr);

//     const leftSide = operationArr.slice(0, line1[1]);
//     const rightSide = operationArr.slice(line1[1]);

//     const rotatedArray = [...rightSide, ...leftSide];

//     console.log(rotatedArray);

//     return rotatedArray;
// }

// leftRotateStringArray(testData);