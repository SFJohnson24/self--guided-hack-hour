// Create a prefix tree (words with common prefixes are under the same sequence of edges)
function TrieNode() {
  this.children = {};
  this.isEndOfWord = false;
}
function Trie() {
  this.root = new TrieNode();
}
Trie.prototype.insert = function (string) {
  let node = this.root;

  for (const char of string) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }

  node.isEndOfWord = true;
};

Trie.prototype.find = function (string) {
  let node = this.root;

  for (const char of string) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }

  return node.isEndOfWord;
};

// Example usage
const trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert('banana');

console.log(trie.find('app'));
console.log(trie.find('apple'));
console.log(trie.find('orange'));
