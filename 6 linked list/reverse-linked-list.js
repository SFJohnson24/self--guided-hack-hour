function Node(value) {
  this.value = value;
  this.next = null;
}
/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *      1 -> 2 -> 3 -> 4 -> 5
 * The result should like like:
 *      5 -> 4 -> 3 -> 2 -> 1
 * Extension:
 * Do it in place
 *
 */
const reverseLinkedList = (head) => {
  if (!head || !head.next) {
    return head;
  }
  //3 pointers
  let prev = null;
  let curr = head;
  let next = null;

  while (curr) {
    //keep track of the next node
    next = curr.next;
    //reverse the current
    curr.next = prev;
    //advance prev to current and current to next
    prev = curr;
    curr = next;
  }
  //when we reach the end, curr will be null and previous will be head
  return prev;
};

module.exports = { Node, reverseLinkedList };
