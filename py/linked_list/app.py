from linked_list import LinkedList

l = LinkedList()
l.add(3)
l.add(5)
l.add(16)
l.add(12)
l.prepend(7)
l.insertAfterElem(3, 6)
l.print_list()

print("14 exists in list", l.exists(14))
print("delete 14", l.delete(14))
print("delete 5", l.delete(5))
l.print_list()
print("reverse list")
l.reverse_list()
l.print_list()

print("Swap Nodes")
l.swap_nodes(16, 3)
l.print_list()