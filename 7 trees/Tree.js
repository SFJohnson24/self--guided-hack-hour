/*

The data structure we've been working on is called a tree. A tree is a hierarchical data structure that consists of nodes connected by edges. It's a widely used structure in computer science and has applications in various domains including computer algorithms, file systems, database indexing, and more.

Here's an explanation of the key concepts and terms related to trees:

    Node: Each element in the tree is called a node. A node represents a value or an object and can have zero or more child nodes. In the code you provided, the Tree constructor creates nodes with a value property and an array of children.

    Root: The topmost node in the tree is called the root node. It serves as the starting point for traversing the tree. In your code, the Tree instance created with 1 is the root node.

    Child: A node directly connected to another node when moving away from the root is called its child. In your code, nodes like 2, 3, and 4 are children of the root node.

    Parent: The converse notion of a child is a parent. A node directly connected to another node when moving towards the root is called its parent. The root node doesn't have a parent, but nodes like 2 and 3 are parents of their respective child nodes.

    Edge: The connection between one node and another is called an edge. Edges define the relationships between nodes. In your code, each element of the children array represents an edge from the parent node to its child node.

    Leaf: A node with no children is called a leaf node. In your code, nodes like 4, 5, and 6 are leaf nodes.

    Subtree: A subtree is a portion of a tree consisting of a node (called the subtree's root) and all the nodes beneath it, including itself.

    Height: The length of the longest path from the root node to any leaf node is called the height of the tree. It represents the depth of the tree. In your code, the height method calculates this value.

    Depth: The distance between a node and the root node is called its depth. The root node has a depth of 0.

    Traversal: Tree traversal refers to the process of visiting all the nodes of a tree in a specific order. Common traversal methods include depth-first traversal (e.g., in-order, pre-order, post-order) and breadth-first traversal.

    */

function Tree(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.add = function (value) {
  const newNode = new Tree(value);
  this.children.push(newNode);
};

Tree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }

  for (const child of this.children) {
    if (child.contains(value)) {
      return true;
    }
  }

  return false;
};

// Extra Bonus
//Find the height of a tree. The height is the length of the path from the root to its farthest leaf
Tree.prototype.height = function () {
  if (this.children.length === 0) {
    return 1; // Changed this to 1 to account for the current node itself
  }

  let maxHeight = 0;
  for (const child of this.children) {
    const childHeight = child.height();
    if (childHeight > maxHeight) {
      maxHeight = childHeight;
    }
  }

  return maxHeight + 1;
};

// Example usage
const tree = new Tree(1);
tree.add(2);
tree.add(3);
tree.children[0].add(4);
tree.children[0].add(5);
tree.children[1].add(6);

console.log(tree.contains(4));
console.log(tree.contains(7));
console.log(tree.height());
