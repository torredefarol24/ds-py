import Graph from '../graph/graph'

var g = new Graph()

g.addVertex("Paris")
g.addVertex("Lyon")
g.addVertex("Nice")
g.addVertex("Bourdoux")
g.addVertex("Cannes")
g.addVertex("Marseille")

g.addEdge("Paris", "Lyon")
g.addEdge("Nice", "Bourdoux")
g.addEdge("Lyon", "Nice")
g.addEdge("Bourdoux", "Paris")
g.addEdge("Marseille", "Nice")

console.log("\nPrinting Graph")
g.printGraph()

console.log("\nBreadth First Search")
g.breadthFirstSearch("Bourdoux")

console.log("\nDepth First Search")
g.depthFirstSearch("Bourdoux")