class ArrayWrapper {
    arr = []

    constructor(nums: number[]) {
        this.arr = nums
    }
    
    valueOf(): number {
        let s = 0
        for (const x of this.arr) {
            s += x
        }
        return s
    }
    
    toString(): string {
        return "[" + this.arr.join(",") + "]"
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
