(() => {
    const matrix = new Array(maxX + 1).fill(0).map(() => new Array(maxY + 1).fill(0));
    let overlaped = 0;
    data.forEach(({from, to}) => {
        const {x: xFrom, y: yFrom} = from;
        const {x: xTo, y: yTo} = to;

        // if (xFrom !== xTo && yFrom !== yTo) {
        //     return;
        // }

        const diffX = xTo - xFrom;
        const xIndex = diffX > 0 ? 1 : -1;
        const diffY = yTo - yFrom;
        const yIndex = diffY > 0 ? 1 : -1;
        const diffMax = Math.max(Math.abs(diffX), Math.abs(diffY));

        for (let i = 0; i <= diffMax; i++) {
            const x = xFrom === xTo ? xFrom : xFrom + i * xIndex;
            const y = yFrom === yTo ? yFrom : yFrom + i * yIndex;

            matrix[x][y]++;

            if (matrix[x][y] === 2) {
                overlaped++;
            }
        }
    });

    console.log('overlaped', overlaped);
    console.log('matrix', matrix);
})();