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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */

    removeNthFromEnd(head, n) {
        const temp = new ListNode(0, head);

        function traverse(node){
            if(!node) return 0;

            const count = traverse(node.next) + 1;

            if(count === n+1){
                node.next = node.next.next;
            }

            return count;
        }

        traverse(temp);
        return temp.next;
    }
}
