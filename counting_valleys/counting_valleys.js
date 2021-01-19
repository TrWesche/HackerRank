const counting_valleys = (steps, log) => {
    let elevation = 0;
    let qtyValleys = 0;
    const stepLog = log.split("");

    stepLog.forEach(step => {
        const delta = (step === 'D') ? -1 : 1;

        if (elevation === 0 && delta === -1) {
            qtyValleys += 1;
        }

        elevation = elevation + delta;
    });

    return qtyValleys;
}

counting_valleys(8, 'UDDDUDUU');