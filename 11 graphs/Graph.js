function Graph(value) {
  this.value = value;
  this.edges = [];
}
//  https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/#
// creates another node (a node is another graph with its own value and edges) on the graph and adds it to the current edge
Graph.prototype.addNode = function(value) {
  const newNode = new Graph(value);
  this.edges.push(newNode);
};

// returns true if the value is contained in the set
Graph.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }

  for (const edge of this.edges) {
    if (edge.contains(value)) {
      return true;
    }
  }

  return false;
};

// removes a given value from the graph
Graph.prototype.remove = function(value) {
  this.edges = this.edges.filter(edge => edge.value !== value);
  for (const edge of this.edges) {
    edge.remove(value);
  }
};

// https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/