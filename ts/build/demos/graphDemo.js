"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graph_1 = __importDefault(require("../graph/graph"));
var g = new graph_1.default();
g.addVertex("Paris");
g.addVertex("Lyon");
g.addVertex("Nice");
g.addVertex("Bourdoux");
g.addVertex("Cannes");
g.addVertex("Marseille");
g.addEdge("Paris", "Lyon");
g.addEdge("Nice", "Bourdoux");
g.addEdge("Lyon", "Nice");
g.addEdge("Bourdoux", "Paris");
g.addEdge("Marseille", "Nice");
console.log("\nPrinting Graph");
g.printGraph();
console.log("\nBreadth First Search");
g.breadthFirstSearch("Bourdoux");
console.log("\nDepth First Search");
g.depthFirstSearch("Bourdoux");
//# sourceMappingURL=graphDemo.js.map