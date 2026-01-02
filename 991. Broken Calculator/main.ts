function brokenCalc(startValue: number, target: number): number {
    let res = 0
    let val = target

    if (startValue >= target) {
        return startValue - target
    }

    while (val !== startValue) {
        // console.log(val, res)
        if (val % 2 === 0 && val > startValue) {
            val /= 2
        } else {
            ++val
        }
        ++res
    }

    return res
};
