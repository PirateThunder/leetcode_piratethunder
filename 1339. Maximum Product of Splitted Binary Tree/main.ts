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

function maxProduct(root: TreeNode | null): number {
    const rootSum = new TreeNode(root.val)
    const mod = 10**9 + 7
    let mx = 0

    const dfsCreateTreeSum = (node, nodeSum) => {
        if (node.left) {
            nodeSum.left = new TreeNode(node.left.val)
            nodeSum.val += dfsCreateTreeSum(node.left, nodeSum.left)
        }
        if (node.right) {
            nodeSum.right = new TreeNode(node.right.val)
            nodeSum.val += dfsCreateTreeSum(node.right, nodeSum.right)
        }
        return nodeSum.val
    }

    const dfsCountRes = (nodeSum) => {
        // mx = Math.max(mx, ((nodeSum.val%mod) * ((rootSum.val - nodeSum.val)%mod)) % mod)
        mx = Math.max(mx, nodeSum.val * (rootSum.val - nodeSum.val))
        if (nodeSum.left) {
            dfsCountRes(nodeSum.left)
        }
        if (nodeSum.right) {
            dfsCountRes(nodeSum.right)
        }
    }

    dfsCreateTreeSum(root, rootSum)
    dfsCountRes(rootSum)

    return mx % mod
};
