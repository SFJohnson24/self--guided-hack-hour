/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  let newNode = new ListNode(val);

  if (!this.head){
    this.head=newNode
    this.tail=newNode
  }else{
    newNode.prev=this.tail
  this.tail.next = newNode;
  this.tail = newNode;
  }
};

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  if (val===this.head.val){
    this.head=this.head.next
    this.head.prev=null
  }else{
  let curr=this.head
  while (curr && curr.val !== val){
    curr=curr.next
    }
  if (curr===null){
    return
  }else if(curr === this.tail) {
    this.tail = curr.prev;
    this.tail.next = null;
  }else{
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
  }
  return
}
};

module.exports = { DoublyLinkedList };
