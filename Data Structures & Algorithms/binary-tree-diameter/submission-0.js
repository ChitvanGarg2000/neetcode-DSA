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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0;
        const height = (node) => {
            if(!node){
                return 0;
            }

            const lh = height(node.left);
            const rh = height(node.right);

            diameter = Math.max(diameter, lh + rh);

            return 1 + Math.max(lh, rh);
        }

        height(root)
        return diameter
    }
}
