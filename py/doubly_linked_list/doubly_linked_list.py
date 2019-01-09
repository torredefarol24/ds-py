class DoublyLinkedNode:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.previous = None
    
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    
    def prepend(self, value):
        list_node = DoublyLinkedNode(value)
        if not self.head:
            self.head = list_node
            self.tail = list_node
        else:
            self.head.previous = list_node
            list_node.next = self.head
        self.head = list_node
        self.length += 1
        return True
    
    def append(self, value):
        list_node = DoublyLinkedNode(value)
        if not self.head:
            self.head = list_node
            self.tail = list_node
            self.length += 1
        if self.tail:
            self.tail.next = list_node
            list_node.previous = self.tail
            self.tail = list_node
            self.length +=1
        return True
    
    def delete(self, value):
        if not self.head: return None
        current = self.head

        if self.head.value ==value and self.tail.value == value: 
            self.head.next = null
            self.tail.previous = null
        
        elif self.head.value == value:
            self.head = self.head.next
            self.head.previous = None
        
        elif self.tail.value == value:
            self.tail = self.tail.previous
            self.tail.next = None
        
        else:
            while current.value != value and current:
                current = current.next
            
            if current: 
                current.previous.next = current.next
                current.next.previous = current.previous
            else: return None
        self.length -=1
        return True

    def printList(self):
        if not self.head: return False
        current = self.head
        result = ""

        while current is not None:
            result += str(current.value) + "<=>"
            current = current.next
        
        print(result)
        return None

    def insert_at_position(self, position, data):
        counter =0
        current = self.head

        if not self.head:
            self.prepend(data)

        if position == 0:
            self.prepend(data)
        elif position == self.length -1:
            self.append(data)
        elif position > 0 and position < self.length -1:
            
            while counter != position:
                counter += 1
                current = current.next

            list_node = DoublyLinkedNode(data)
            current.previous.next = list_node
            list_node.previous = current
            list_node.next = current
            current.previous = list_node
            self.length +=1
                
        else: return None
    
    # def reversePrintList(self):
    #     if not self.head: return None
    #     current, next_node, prev_node = self.head, 0, 0
        
    #     while current is not None:
    #         prev_node = current.previous
    #         next_node = current.next
            
    #         current.next = prev_node
    #         current.previous = next_node
            
    #         prev_node = current
    #         current = next_node
            
    #     self.tail = self.head
    #     self.head = prev_node

    #     self.printList()
    #     return True
        
