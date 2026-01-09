# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def subtreeWithAllDeepest(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def postOrder(node):
            if not node:
                return 0, None
            
            left_depth, left_node = postOrder(node.left)
            right_depth, right_node = postOrder(node.right)
            
            if left_depth == right_depth:
                return left_depth + 1, node
            
            elif left_depth > right_depth:
                return left_depth + 1, left_node
            
            else:
                return right_depth + 1, right_node
        
        return postOrder(root)[1]
