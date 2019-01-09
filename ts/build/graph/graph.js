"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = __importDefault(require("../queue/queue"));
class Graph {
    constructor() {
        this.ajdacentList = {};
        this.verticesList = [];
    }
    addVertex(vertex) {
        if (this.verticesList.indexOf(vertex) < 0) {
            this.verticesList.push(vertex);
            this.ajdacentList[vertex] = [];
        }
        else {
            return "Vertex exists Already";
        }
    }
    addEdge(src, dest) {
        this.ajdacentList[src].push(dest);
        this.ajdacentList[dest].push(src);
    }
    printGraph() {
        var vertices = this.verticesList;
        for (var i in vertices) {
            var vrtx = vertices[i];
            var edges = this.ajdacentList[vrtx];
            console.log("Vertex ", vrtx, "Connections ", edges);
        }
    }
    breadthFirstSearch(vertex) {
        var visited = [];
        var q = new queue_1.default();
        q.enqueue(vertex);
        while (!q.isEmpty()) {
            var currentQueueItem = q.dequeue();
            console.log("Vertex ", currentQueueItem);
            var vertexConns = this.ajdacentList[currentQueueItem];
            console.log("Connections of", currentQueueItem, vertexConns);
            for (var i = 0; i < vertexConns.length; i++) {
                var item = vertexConns[i];
                if (!visited[item] == true) {
                    visited[item] = true;
                    // console.log(item, " not visited, marking as visited now")
                    q.enqueue(item);
                }
                else {
                    // console.log(item, "visited already")
                }
            }
        }
    }
    depthFirstSearch(vertex) {
        var visited = [];
        this.DSFChecker(vertex, visited);
    }
    DSFChecker(vert, visited) {
        visited[vert] = true;
        console.log("Vertex ", vert);
        var vertConns = this.ajdacentList[vert];
        console.log("Connections ", vertConns);
        for (var i = 0; i < vertConns.length; i++) {
            var item = vertConns[i];
            if (visited[item] != true) {
                this.DSFChecker(item, visited);
            }
        }
    }
}
exports.default = Graph;
//# sourceMappingURL=graph.js.map