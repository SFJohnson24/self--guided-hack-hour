# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if n == 0 or not head:
            return None

        p1 = head
        p2 = head
        p3 = head

        for i in range(n - 1):
            if not p2:
                return None
            p2 = p2.next

        while p2.next:
            p3 = p1
            p1 = p1.next
            p2 = p2.next

        if p1 == head:
            # If the node to be removed is the head, update the head
            head = head.next
        else:
            # Otherwise, skip the node to remove it
            p3.next = p1.next

        return head