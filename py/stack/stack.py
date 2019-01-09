class StackListNode:
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def __str__(self):
        return 'Item {}'.format(self.value)

class StackList:
    def __init__(self):
        self.head = None
        self.size = 0

    def __str__(self):
        current , result = self.head, ""
        while current:
            result += str(current.value) + "\n"
            current = current.next
        return result
    
    def append(self, value):
        list_node = StackListNode(value)
        if self.head:
            current = self.head
            while current.next is not None: 
                current = current.next
            current.next = list_node
        else:
            self.head = list_node
        self.size += 1
        return True
    
    def remove_last_item(self):
        if self.head:
            current, previous = self.head, None
            while current.next is not None: 
                previous = current
                current = current.next
            previous.next = None
            self.size -= 1
            return current.value
        else:
            return False
    
    def is_empty(self):
        return self.size == 0
    
    def get_head(self):
        if self.head:
            return self.head.value
        else: return None

    def get_size(self):
        return self.size

    def print_elems(self):
        return self

class Stack:
    def __init__(self):
        self.items = StackList()

    def push(self, value):
        return self.items.append(value)

    def pop(self):
        return self.items.remove_last_item()
    
    def isEmpty(self):
        return self.items.is_empty()
    
    def peek(self):
        return self.items.get_head()

    def size(self):
        return self.items.get_size()
    
    def printStack(self):
        return self.items.print_elems()