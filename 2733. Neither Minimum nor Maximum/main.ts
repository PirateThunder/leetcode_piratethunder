function findNonMinOrMax(nums: number[]): number {
    const mn = Math.min(...nums)
    const mx = Math.max(...nums)
    let res = -1
    for (const x of nums) {
        if (x !== mn && x !== mx) {
            res = x
            break
        }
    }
    return res
};
