//node constructor
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
/*
increment: this.side.add invoking traverses to next node
break condition: BinarySearchTree
recursion: calling add (traversing) 
*/
BinarySearchTree.prototype.add = function (value) {
  //conditional if value < this.value
  if (value < this.value) {
    //check if this.left=null
    if (this.left === null) {
      //reassign this.left to new Node with value value
      this.left = new BinarySearchTree(value);
    } else {
      //invoke .add on left branch
      //reassigning this.value to this.left
      this.left.add(value);
    }
  } else {
    //conditional if value > this.value
    if (value > this.value) {
      //check if this.left=null
      if (this.right === null) {
        //reassign this.right to new Node
        this.right = new BinarySearchTree(value);
      } else {
        //invoke .add on left branch
        this.right.add(value);
      }
    }
  }
};

/* break condition: when we find the value, return true
recursion: calling contains again passing in the value 
*/
BinarySearchTree.prototype.contains = function (value) {
  //check if value = this.value - our break
  if (value === this.value) return true;
  //check if less than this.value
  if (value < this.value) {
    //look at left pointer
    // if null -- break condition - not there and return false
    if (this.left === null) {
      return false;
    } else {
      //reassign this.value to this.left
      //recursion: invoke the contains method on the value
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

// let test = new BinarySearchTree(5);
// test.add(2);
// test.add(3);
// test.add(7);
// console.log(test);
// console.log(test.contains(4));
// console.log(test.contains(2));

//https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/

// applies the callback in the order of depth first (preorder)
//tree recursion - recurse with this.left first then this.right
BinarySearchTree.prototype.depthFirstPre = function (callback) {
  //emit as you go to each node starting at root
  callback(this.value);
  if (this.left) this.left.depthFirstPre(callback);
  if (this.right) this.right.depthFirstPre(callback);
};

// applies the callback in the order of depth first (inorder) returns ordered nodes back
BinarySearchTree.prototype.depthFirstIn = function (callback) {
  //callback on leftmost node of each sub-branch then right nodes, root in middle
  //display in sorted order via going down the left side first
  if (this.left) this.left.depthFirstIn(callback);
  callback(this.value);
  if (this.right) this.right.depthFirstIn(callback);
};

// applies the callback in the order of depth first (postorder)
//emit the last time you visit the node--does the furthest nodes and works inward, root is last
BinarySearchTree.prototype.depthFirstPost = function (callback) {
  if (this.left) this.left.depthFirstPost(callback);
  if (this.right) this.right.depthFirstPost(callback);
  callback(this.value);
};

// applies the callback in the order of breadth first (level order)
//uses a queue
BinarySearchTree.prototype.breadthFirst = function (callback) {
  //breadth first uses an array
  const queue = [];
  //pushes the root first
  queue.push(this);

  //we are using a while loop, adding nodes to our queue, then invoking callback on queue.shift (removed first element.value)
  while (queue.length > 0) {
    //pointer to current node, starting at root
    let currNode = queue[0];
    //if left pointer
    if (currNode.left) {
      //push current node onto queue
      queue.push(currNode.left);
    }
    //if right push current node onto queue
    if (currNode.right) {
      queue.push(currNode.right);
    }
    //remove the first element and perform callback on it
    callback(queue.shift().value);
  }
};

//done this way as well --this will cycle through all the nodes via BFS --no callback though
const bfs = (root, callback) => {
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
};

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function () {
  //implicit organization, so left side will be smallest, traverse as far left as possible via recursive min() calls
  if (this.left) {
    return this.left.min();
  }
  return this.value;
};

// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function () {
  //same as min, recursive calls of max
  if (this.right) {
    return this.right.max();
  }
  return this.value;
};

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function () {
  //if no nodes, height is 0
  if (this.left === null && this.right === null) {
    return 0;
  }
  // recursively invoke height if there is a left or a right, if not add 0 to total
  const leftHeight = this.left ? this.left.height() : 0;
  const rightHeight = this.right ? this.right.height() : 0;
  //increment 1 each time for each level down, taking the max value for all heights returned
  return 1 + Math.max(leftHeight, rightHeight);
};

// const tree = new BinarySearchTree(5);
// tree.add(3);
// tree.left.left = new BinarySearchTree(4);
// console.log(tree.height());

// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function (item) {
  //base case, if empty tree
  if (this.value === null) {
    return;
  }
  // If the current node is the one to be removed
  if (this.value === item) {
    //if it only has a right child, replace node with its right child
    //this will also catch cases where both left and right are null as we will return right which is null
    if (this.left === null) {
      return this.right;
      //if it only has left child, replace node with left child
    } else if (this.right === null) {
      return this.left; // Replace the node with its left child
    } else {
      // If the node has both left and right children, find the minimum value in the right subtree
      // and replace the current node with that minimum value
      const tempNode = this.smallestNode(this.right);
      this.value = tempNode;
      this.right = this.right.remove(tempNode);
      return this.value;
    }
    //recurse through the tree
  } else if (item < this.value) {
    if (this.left) {
      this.left = this.left.remove(item);
    }
  } else {
    if (this.right) {
      this.right = this.right.remove(item);
    }

    //helper function
    function smallestNode(node) {
      while (this.left) {
        this.value = this.left;
      }
      return this.value;
    }
  }
};

//validate a tree
function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const validBST = (tree) => {
  const helper = (node, min, max) => {
    if (!node) {
      return true;
    }
    if (node.value <= min || node.value >= max) {
      return false;
    }
    return (
      helper(node.left, min, node.value) && helper(node.right, node.value, max)
    );
  };

  return helper(tree, -Infinity, Infinity);
};

module.exports = { BinaryTree, validBST };

/*balance a tree
Steps:

    Use inorder traversal to create a sorted array
    Construct a balance tree using the sorted array

    https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/?ref=lbp
*/

var balanceBST = function(root) {
  //get values inOrder BST traversal
  const values = toArray(root);
  //return new BST 
  return toBST(values);

  //2 helpers
  //recursive calls to add all values to an array via spread syntax with root in middle
  //inorder traversal--calling left first, then the node, then the right--will give values in numeric order assuming it is a valid BST
  function toArray(node) {
    if (!node) return [];
    return [...toArray(node.left), node.val, ...toArray(node.right)];
}

//
  function toBST(arr) {
      if (arr.length===0) return null;
      if (arr.length===1) return new TreeNode(arr[0]);
      const mid = Math.floor(arr.length / 2);
      const left = toBST(arr.slice(0, mid));
      const right = toBST(arr.slice(mid+1));
      return new TreeNode(arr[mid], left, right);
  }
  
};
