const shortestPath = (edges, nodeA, nodeB) => {
  let graph = constructGraph(edges);
  let visited = new Set([nodeA]);
  let count = 0;
  let queue = [[nodeA, count]];
  while (queue.length > 0) {
    let [node, count] = queue.shift();

    if (node === nodeB) {
      return count;
    }
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, count + 1]);
      }
    }
  }

  return -1;
};

const constructGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    let [a, b] = edge;
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  }
  return graph;
};
