import LinkedList from '../linkedlist/linkedList'
console.log("\nLinked List")

var ll1 = new LinkedList()

ll1.add(5)
ll1.add(8)
ll1.add(2)
ll1.prepend(3)
ll1.add(14)
ll1.printList()

console.log("4 is in list", ll1.exists(4))
console.log("delete 8 from list ", ll1.delete(8))
console.log("current List")
ll1.printList()

console.log("Reverse List")
ll1.reverseList()
ll1.printList()