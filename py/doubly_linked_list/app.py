from doubly_linked_list import DoublyLinkedList

dll = DoublyLinkedList()
dll.prepend(14)
dll.prepend(25)
dll.append(9)
dll.append(2)
dll.insert_at_position(2, 31)
dll.prepend(6)

dll.printList()

# dll.reversePrintList()
