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
     * @return {boolean}
     */
    isBalanced(root) {
        function getHeight(node){
            if(!node) return 0;

            let lheight = getHeight(node.left);
            let rheight = getHeight(node.right);
            
            if(lheight === -1 || rheight === -1 || Math.abs(lheight - rheight) > 1) return -1

            return Math.max(lheight, rheight) + 1;
        
        }
         return getHeight(root) >= 0
    }
}
