(() => {
    const fillRate = (rate, value) => {
        rate[value] = rate[value] ? rate[value] + 1 : 1
    };

    const findNumber = (arrIn, comparatorFn) => {
        let arr = [...arrIn];
        let i = 0;
        while (arr.length > 1) {
            for(let j = 0; j < arrIn[0].length; j++) {
                const calcObj = {};
                arr.forEach((binaryInputStr) => {
                    fillRate(calcObj, binaryInputStr[j]);
                });

                arr = arr.filter(binNum => {
                    return comparatorFn(calcObj) === parseInt(binNum[j]);
                });

                if (arr.length <= 1) {
                    break;
                }
            }

            i++;
        }

        return parseInt(arr[0], 2);
    };

    const oxy = findNumber(parsedData, (calcObj) => {
        if (calcObj['0'] === undefined) {
            return 1;
        }

        if (calcObj['1'] === undefined) {
            return 0;
        }

        if (calcObj['1'] >= calcObj['0']) {
            return 1;
        }

        return 0;
    });
    const co2 = findNumber(parsedData, (calcObj) => {
        if (calcObj['0'] === undefined) {
            return 1;
        }

        if (calcObj['1'] === undefined) {
            return 0;
        }

        if (calcObj['0'] > calcObj['1']) {
            return 1;
        }

        if (calcObj['0'] === calcObj['1']) {
            return 0;
        }

        return 0;
    });

    console.log('oxy', oxy);
    console.log('co2', co2);
    console.log('result', oxy * co2);
})();