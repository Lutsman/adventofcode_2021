(() => {
    let lastMatrixResult = 0;
    let lastNum = 0;
    let matricesMap = getMatricesMap();

    for(const num of numbers) {
        if (matricesMap.length === 0) {
            break;
        }

        [...matricesMap].forEach((matrixMap, i) => {
            for(const [key, val] of Object.entries(matrixMap)) {
                matrixMap[key].result = val.result.filter(bingoNum => bingoNum !== num);

                if (matrixMap[key].result.length === 0) {
                    lastMatrixResult =  Object.entries(matrixMap).reduce((res, [currKey, { result }]) => {
                        const [directionName] = currKey.split('_');
                        if (currKey === key || !key.includes(directionName)) {
                            return res;
                        }

                        return result.reduce((acc, next) => acc + next, res);
                    }, 0);

                    lastNum = num;

                    // if (matricesMap.length < 5) {
                    //     debugger;
                    // }

                    delete matricesMap[i];

                    return;
                }
            }
        })

        matricesMap = matricesMap.filter(Boolean);
    }

    console.log('lastMatrixResult', lastMatrixResult);
    console.log('lastNum', lastNum);
    console.log('lastResult', lastMatrixResult * lastNum);
})();