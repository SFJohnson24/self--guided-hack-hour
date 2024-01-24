class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or head.next == None:
            return head
        current = head
        next = head.next
        prev = None
        while current != None:
            next = current.next
            current.next=prev
            prev = current
            current = next
        return prev