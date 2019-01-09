import DoublyLinkedList from "../doublyLinkedList/doublyLinkedList"

console.log("\nDouble Linked List")

var dll = new DoublyLinkedList()

dll.append(5)
dll.append(8)
dll.append(2)
dll.prepend(3)
dll.prepend(14)
dll.printList()


console.log("delete 8 from list ", dll.delete(8))
console.log("current List")
dll.printList()

console.log("Reverse List")
dll.reversePrintList()
dll.printList()