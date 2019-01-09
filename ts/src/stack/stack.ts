interface StackListNode_Intf {
    value: any;
    next: any
}

interface StackList_Intf {
    append: Function;
    removeLast: Function;
    printElems: Function;
    checkHead: Function;
    getHead: Function;
    getSize: Function;
}

class StackListNode {
    public value: any
    public next: any

    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

class StackList {
    head: StackListNode_Intf
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }

    append(value: any): any {
        var listNode = new StackListNode(value)

        if (this.head) {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = listNode
        } else {
            this.head = listNode
        }
        this.size += 1
        return listNode
    }

    removeLast(): any {
        if (this.head) {
            var current = this.head, previous = null

            if (this.size === 1) {
                this.head = null
                return current
            } else {

                while (current.next) {
                    previous = current
                    current = current.next
                }

                previous.next = null
                return current.value
            }
        } else return null
    }

    printElems() {
        var result = "______________", current = this.head
        while (current) {
            result += "\n" + current.value
            current = current.next
        }
        console.log(result)
        return result
    }

    checkHead() {
        return this.head === null
    }

    getHead() {
        return this.head.value
    }

    getSize() {
        return this.size
    }
}

class Stack {
    items: StackList_Intf
    constructor() {
        this.items = new StackList()
    }

    push(value: any) {
        return this.items.append(value)
    }

    pop() {
        return this.items.removeLast()
    }

    size() {
        return this.items.getSize()
    }

    isEmpty() {
        return this.items.checkHead()
    }

    peek() {
        return this.items.getHead()
    }

    printStack() {
        return this.items.printElems()
    }
}

export default Stack