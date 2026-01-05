function maxMatrixSum(matrix: number[][]): number {
    let totalSum = 0;
    let minAbs = Infinity;
    let negativeCount = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const val = matrix[row][col];
            const absVal = Math.abs(val);
            
            totalSum += absVal;
            if (val < 0) negativeCount++;
            if (absVal < minAbs) minAbs = absVal;
        }
    }
    
    if (negativeCount % 2 !== 0) {
        return totalSum - 2 * minAbs;
    }

    return totalSum;
};
