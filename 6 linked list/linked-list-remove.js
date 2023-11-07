/*
Write a function to delete the first instance of a node in a singly linked list.
The function should return the deleted node, or undefined if the value was not found.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
And given a value, 'b', the linked list after calling your function should look like:

('a' -> 'c' -> 'b' -> 'd')

And the evaluated result would be the removed node with the value of 'b'.

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

const linkedListRemove = (ll, val) => {
  let previous=null
  let current=ll.head

  while (current.val !==val && current.val !== null){
    previous=current
    current=current.next
  }
  if (!current.val){
    return undefined;
  }else if (previous===null){
    ll.head=current.next
  }else{
    previous.next=current.next;
  }
  return current

};


/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = (ll, val) => {
  let previous=null
  let current=ll.head

  while (current !== null){
    if (current.val===val){
      if (!previous){
        ll.head=current.next
      }else{
      previous.next=current.next;
      }
    }else{
      previous=current
      current=current.next
    }
  }
};


module.exports = { LinkedList, Node, linkedListRemove, linkedListRemoveMultiple };
