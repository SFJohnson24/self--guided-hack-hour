/**
 * 19
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]

 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (n === 0 || !head) {
        return undefined;
    }
    let p1 = head;
    let p2 = head;
    let p3 = head;
    for (let i = 0; i < n - 1; i++) {
        p2 = p2.next;
        if (!p2) {
        return undefined;
        }
    }
    while (p2.next) {
        p3 = p1;
        p1 = p1.next;
        p2 = p2.next;
    }

     if (p1 === head) {
        // If the node to be removed is the head, update the head
        head = head.next;
    } else {
        // Otherwise, skip the node to remove it
        p3.next = p1.next;
    }
    return head;
}