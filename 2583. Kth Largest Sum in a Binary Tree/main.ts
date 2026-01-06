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

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    const q = [{lvl: 1, node: root}]
    const m = new Map()

    while (q.length) {
        const {lvl, node} = q.shift()
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

    const a = [...m].sort((a,b)=>b[1]-a[1])
    if (k > a.length) return -1
    return a[k-1][1]
};
