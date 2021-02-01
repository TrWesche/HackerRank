function countSwaps(a) {
    let qtySwaps = 0;

    for (let i = 0; i < a.length - 1; i++) {

        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                const tempVal = a[j];
                a[j] = a[j + 1]
                a[j + 1] = tempVal

                qtySwaps++;
            }
        }
        
    }

    console.log(`Array is sorted in ${qtySwaps} swaps.`)
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}


countSwaps([6, 4, 1]);