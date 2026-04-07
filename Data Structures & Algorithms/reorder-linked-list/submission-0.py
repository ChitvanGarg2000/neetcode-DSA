# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:

    def reorderList(self, head: Optional[ListNode]) -> None:
        if not head or not head.next:
            return;
        def reverse(node):
            prev = None
            curr = node;
            while curr:
                temp = curr.next
                curr.next = prev
                prev = curr
                curr = temp
            return prev
        
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next;
            fast = fast.next.next;

        second = slow.next
        slow.next = None

        node = reverse(second)
        temp = head;

        while node and temp:
            t1 = temp.next
            t2 = node.next
            temp.next = node
            node.next = t1
            temp = t1
            node = t2

