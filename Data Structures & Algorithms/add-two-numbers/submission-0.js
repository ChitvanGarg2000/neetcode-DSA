/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0
        function helper(node1, node2){
            if(!node1 && !node2 && carry === 0){
                return null;
            }
            let value = (node1?.val || 0) + (node2?.val || 0) + carry;
            carry = Math.floor(value/10);
            value = value % 10;
            const currNode = new ListNode(value);
            currNode.next = helper(node1?.next, node2?.next);
            return currNode;
        }

        return helper(l1, l2);

    }
}
