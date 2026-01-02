func brokenCalc(startValue int, target int) int {
    res := 0
    val := target

    if startValue >= target {
        return startValue - target
    }

    for val != startValue {
        if val % 2 == 0 && val > startValue {
            val = val / 2
        } else {
            val = val + 1
        }
        res = res + 1
    }

    return res
}
