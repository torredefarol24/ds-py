from graph import Graph

g = Graph()

g.add_vertex("Paris")
g.add_vertex("Lyon")
g.add_vertex("Cannes")
g.add_vertex("Nice")
g.add_vertex("Bourdoux")

g.print_graph()
print("------------")

g.add_edge("Lyon", "Nice")
g.add_edge("Cannes", "Bourdoux")
g.add_edge("Lyon", "Cannes")
g.add_edge("Paris", "Nice")
g.add_edge("Nice", "Bourdoux")

g.print_graph()

# print("------------")
# g.breadth_first_search("Bourdoux")