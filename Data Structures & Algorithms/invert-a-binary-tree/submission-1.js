/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */

    helper(root){
        if(!root?.left && !root?.right){
            return;
        }

        let tempNode = root.left || null;
        root.left = root.right || null;
        root.right = tempNode;

        this.helper(root.left);
        this.helper(root.right);
    }

    invertTree(root) {
        this.helper(root)

        return root
    }
}
