"""
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 *
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
"""
class Node:
    def __init__(self, val):
        self.value = val
        self.next = None

def kth_to_last_node(k, head):
    if k == 0 or not head:
        return None

#2 pointers, one will stay at head, one will progress K away from first pointer
    p1 = head
    p2 = head
    for i in range(k - 1):
        if not p2:
            return None
        p2 = p2.next

#move p2 to end, p1 will then be k from the end
    while p2.next:
        p1 = p1.next
        p2 = p2.next
    return p1.value

# Example Usage:
a = Node('A')
b = Node('B')
c = Node('C')
d = Node('D')
e = Node('E')

a.next = b
b.next = c
c.next = d
d.next = e

result = kth_to_last_node(2, a)
print(result)  # Output should be 'D'
