interface QueueList_Intf {
    append: Function;
    removeHead: Function;
    checkEmpty: Function;
    getHead: Function;
    printItems: Function;
    getLength: Function;
}

interface QueueListNode_Intf {
    value: any;
    next: any;
}

class QueueListNode {
    value: any
    next: any

    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

class QueueList {
    head: QueueListNode_Intf
    length: number

    constructor() {
        this.head = null
        this.length = 0
    }

    append(value: any): void {
        var listElem = new QueueListNode(value)

        if (this.head) {
            var current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = listElem
        } else {
            this.head = listElem
        }

        this.length += 1
        return
    }

    removeHead(): any {
        if (this.head) {
            var currHead = this.head
            this.head = this.head.next
            this.length -= 1
            return currHead
        } else return null
    }

    checkEmpty() {
        return this.head === null
    }

    getHead() {
        if (this.head) return this.head.value
        else return null
    }

    printItems(): any {
        if (this.head) {
            var result = "", current = this.head
            while (current) {
                result += current.value + ", "
                current = current.next
            }
            console.log("----------\n", result)
            return result
        } else {
            console.log("No Items")
            return null
        }
    }

    getLength() {
        return this.length
    }
}


class Queue {
    items: QueueList_Intf

    constructor() {
        this.items = new QueueList()
    }

    enqueue(value: any) {
        this.items.append(value)
    }

    dequeue() {
        var removedHead = this.items.removeHead()
        return removedHead ? removedHead.value : null
    }

    isEmpty() {
        return this.items.checkEmpty()
    }

    peek() {
        return this.items.getHead()
    }

    printElems() {
        return this.items.printItems()
    }

    getSize() {
        return this.items.getLength()
    }
}

export default Queue