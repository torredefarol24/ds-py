class QueueListNode:
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def __str__(self):
        return "Item : " + str(self.value)

class QueueList:
    def __init__(self):
        self.head = None
        self.length = 0
    
    def __str__(self):  
        current, result = self.head, "{} Items ".format(self.length)
        while current:
            result += str(current.value) + ", "
            current = current.next
        return result
    
    def append(self, value):
        list_node = QueueListNode(value)
        if self.head:
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = list_node
        else:
            self.head = list_node
        self.length += 1
        return True

    def remove_head(self):        
        if self.head:
            current = self.head
            self.head = self.head.next
            self.length -= 1
            return current
        else:
            return None
        
    def get_head(self):
        if self.head: return self.head 
        else: return None
        
    def check_head(self):
        return self.head == None

    def print_items(self):
        current, result = self.head, ""
        while current is not None:
            result += str(current.value) + " , "
            current = current.next
        print(result)
        return result

class Queue:
    def __init__(self):
        self.items = QueueList()
    
    def enqueue(self, value):
        return self.items.append(value)
    
    def dequeue(self):
        return self.items.remove_head()
    
    def is_empty(self):
        return self.items.check_head()
    
    def peek(self):
        return self.items.get_head()

    def print_queue(self):
        return self.items.print_items()


