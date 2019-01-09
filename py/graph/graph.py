from queue_graphs import Queue

class Vertex:
    def __init__(self, value):
        self.name = value
        self.neighbors = []

    def add_neighbor(self, vertex):
        if vertex not in self.neighbors:
            self.neighbors.append(vertex)
            self.neighbors.sort()


class Graph:
    def __init__(self):
        self.vertices = {}

    def add_vertex(self, vertex):
        new_vertex = Vertex(vertex)
        if new_vertex.name not in self.vertices:
            self.vertices[new_vertex.name] = new_vertex
            return True
        else:
            return False
    
    def add_edge(self, src, dest):
        if src in self.vertices and dest in self.vertices:
            for key, value in self.vertices.items():
                if key == src:
                    value.add_neighbor(dest)
                if key == dest:
                    value.add_neighbor(src)
            return True
        else: 
            return False
    
    def print_graph(self):
        for vert in self.vertices.keys():
            print(vert + " " + str(self.vertices[vert].neighbors))


    # def breadth_first_search(self, vert):
    #     bfs_q, visited = Queue(), {}
    #     bfs_q.enqueue(vert)

    #     while not bfs_q.is_empty():
    #         crntQItem = bfs_q.dequeue()
    #         print("Vertex ", crntQItem.value)

    #         vrtxConns = self.vertices[crntQItem.value].neighbors
    #         print("Connections ", vrtxConns)

    #         for item in vrtxConns:
    #             if visited[item] != True:
    #                 bfs_q.enqueue(item)
    #                 visited[item] = True
