/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxLevelSum(root: TreeNode | null): number {
    const q = [{lvl: 1, node: root}]
    let curLvl = 1
    let curVal = 0
    // let maxLvl = 1
    let maxVal = root.val

    const m = new Map()

    while (q.length) {
        // console.log(`q =`, q)
        const {lvl, node} = q.shift()

        // if (lvl === curLvl) {
        //     curVal += node.val
        // } else {
        //     if (curVal > maxVal) {
        //         maxVal = curVal
        //         maxLvl = curLvl
        //     }
        //     curLvl = lvl
        //     curVal = node.val
        // }
        if (!m.has(lvl)) {
            m.set(lvl, 0)
        }
        m.set(lvl, m.get(lvl) + node.val)

        if (node.left) {
            q.push({lvl: lvl + 1, node: node.left})
        }
        if (node.right) {
            q.push({lvl: lvl + 1, node: node.right})
        }
    }

    // console.log(m)
    let maxSum = m.get(1)
    let maxLvl = 1
    for (let [lvl, sum] of m) {
        if (sum > maxSum) {
            maxSum = sum
            maxLvl = lvl
        }
    }

    return maxLvl

    // if (curVal > maxVal) {
    //     maxVal = curVal
    //     maxLvl = curLvl
    // }
    
    // return maxLvl
};
