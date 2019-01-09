import Queue from '../queue/queue'

class Graph {
    ajdacentList: any
    verticesList: any

    constructor() {
        this.ajdacentList = {}
        this.verticesList = []
    }

    addVertex(vertex: any) {
        if (this.verticesList.indexOf(vertex) < 0) {
            this.verticesList.push(vertex)
            this.ajdacentList[vertex] = []
        } else {
            return "Vertex exists Already"
        }
    }

    addEdge(src: any, dest: any) {
        this.ajdacentList[src].push(dest)
        this.ajdacentList[dest].push(src)
    }

    printGraph() {
        var vertices = this.verticesList
        for (var i in vertices) {
            var vrtx = vertices[i]
            var edges = this.ajdacentList[vrtx]
            console.log("Vertex ", vrtx, "Connections ", edges)
        }
    }

    breadthFirstSearch(vertex: any) {
        var visited: any = []
        var q = new Queue()

        q.enqueue(vertex)

        while (!q.isEmpty()) {
            var currentQueueItem = q.dequeue()
            console.log("Vertex ", currentQueueItem)

            var vertexConns = this.ajdacentList[currentQueueItem]
            console.log("Connections of", currentQueueItem, vertexConns)

            for (var i = 0; i < vertexConns.length; i++) {
                var item = vertexConns[i]

                if (!visited[item] == true) {
                    visited[item] = true
                    // console.log(item, " not visited, marking as visited now")
                    q.enqueue(item)
                } else {
                    // console.log(item, "visited already")
                }
            }
        }
    }

    depthFirstSearch(vertex: any) {
        var visited: any = []
        this.DSFChecker(vertex, visited)
    }

    private DSFChecker(vert: any, visited: any) {
        visited[vert] = true
        console.log("Vertex ", vert)

        var vertConns = this.ajdacentList[vert]
        console.log("Connections ", vertConns)

        for (var i = 0; i < vertConns.length; i++) {
            var item = vertConns[i]
            if (visited[item] != true) {
                this.DSFChecker(item, visited)
            }
        }
    }

}
export default Graph