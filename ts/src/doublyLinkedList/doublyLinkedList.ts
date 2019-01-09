class DoubleLinkedListNode {
    public value: any
    public next: any
    public previous: any

    constructor(value: any, next: any = null, prev: any = null) {
        this.value = value
        this.next = next
        this.previous = prev
    }
}

class DoublyLinkedList {
    public head: DoubleLinkedListNode
    public length: number
    public tail: DoubleLinkedListNode

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    prepend(value: any): DoubleLinkedListNode {
        var listNode = new DoubleLinkedListNode(value)

        if (this.head) {
            this.head.previous = listNode
            listNode.next = this.head
        }

        this.head = listNode

        if (!this.tail) {
            this.tail = listNode
        }

        this.length += 1
        return listNode
    }

    append(value: any): DoubleLinkedListNode {
        var listNode = new DoubleLinkedListNode(value)

        if (!this.head) {
            this.head = listNode
            this.tail = listNode
            this.length += 1
        }

        if (this.tail) {
            this.tail.next = listNode
            listNode.previous = this.tail
            this.tail = listNode
            this.length += 1
        }
        return listNode
    }

    delete(value: any): boolean {
        if (!this.head) return null;
        var current = this.head

        if (this.head.value === value && this.tail.value === value) {
            this.head.next = null
            this.head.previous = null
            this.length -= 1
            return true
        } else if (this.head.value === value) {
            this.head = this.head.next
            this.head.previous = null
            this.length -= 1
            return true
        } else if (this.tail.value === value) {
            this.tail = this.tail.previous
            this.tail.next = null
            this.length -= 1
            return true
        } else {
            while (current.value != value && current != null) {
                current = current.next
            }

            if (current) {
                current.previous.next = current.next
                current.next.previous = current.previous
                this.length -= 1
                return true
            } else {
                return undefined
            }
        }
    }

    printList(): void {
        var current = this.head, result = ""
        if (!this.head) return undefined

        while (current != null) {
            result += current.value + "<=>"
            current = current.next
        }
        console.log(result)
        return null
    }

    reversePrintList(): void {
        if (!this.head) return undefined
        var current = this.head, nextNode, prevNode

        while (current) {
            prevNode = current.previous
            nextNode = current.next

            current.next = prevNode
            current.previous = nextNode

            prevNode = current
            current = nextNode
        }

        this.tail = this.head
        this.head = prevNode
        return null
    }
}

export default DoublyLinkedList