function thirdMax(nums: number[]): number {
    const a = [...new Set(nums)].sort((a,b)=>b-a)
    console.log(a)
    if (a.length >= 3) return a[2]
    else return a[0]
};
