/**
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
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (k === 0 || !head) {
    return undefined;
  }
  let p1 = head;
  let p2 = head;
  for (let i = 0; i < k - 1; i++) {
    p2 = p2.next;
    if (!p2) {
      return undefined;
    }
  }
  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1.value;
}

//Do not delete!
module.exports = { Node, kthToLastNode };
