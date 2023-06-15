var countComponents = function (n, edges) {
  let graph = createAdjacency(edges);
  let count = Math.abs(Object.keys(graph).length - n);
  let visited = new Set();
  for (let nodes in graph) {
    if (runThroughNodes(nodes, visited, graph)) count++;
  }
  return count;
};

const runThroughNodes = (current, visited, graph) => {
  if (visited.has(current.toString())) return false;
  visited.add(current.toString());
  for (let neighbor of graph[current]) {
    runThroughNodes(neighbor, visited, graph);
  }
  return true;
};

const createAdjacency = (edges) => {
  let graph = {};
  for (let edge of edges) {
    graph[edge[0]]
      ? graph[edge[0]].push(edge[1])
      : (graph[edge[0]] = [edge[1]]);
    graph[edge[1]]
      ? graph[edge[1]].push(edge[0])
      : (graph[edge[1]] = [edge[0]]);
  }
  return graph;
};
