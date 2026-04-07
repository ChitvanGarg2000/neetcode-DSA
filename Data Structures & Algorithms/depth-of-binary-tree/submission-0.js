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
    maxHeight = 0;

    helper(node, currHeight){
        if(!node){
            return;
        }

        this.maxHeight = Math.max(currHeight, this.maxHeight);
        this.helper(node?.left, currHeight + 1);
        this.helper(node?.right, currHeight + 1);

    }

    maxDepth(root) {
        this.helper(root, 1);
        return this.maxHeight;
    }
}
