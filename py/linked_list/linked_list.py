class LinkedListNode:
    def __init__(self, data):
        self.value = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.length = 0
    

    def add(self, node):
        new_node = LinkedListNode(node)
        self.length += 1
        if self.head:
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = new_node
        else:
            self.head = new_node
    

    def prepend(self, node):
        new_node = LinkedListNode(node)
        self.length +=1
        if self.head:
            current = self.head
            new_node.next = current
            self.head = new_node
        else:
            self.head = new_node


    def insertAfterElem(self, elem, data):
        if self.head:
            current = self.head
            while current.value != elem and current:
                current = current.next
            if current:
                new_node = LinkedListNode(data)
                self.length += 1 
                temp_current_next = current.next
                current.next = new_node
                new_node.next = temp_current_next
                return True
            else: 
                return False
        else: 
            return False
    

    def print_list(self):
        if self.head:
            result = ""
            current = self.head
            while current:
                result += str(current.value) + "->"
                current = current.next

            print("------------")
            print(result)
            return True            
        else: 
            print("List Empty")
            return None


    def exists(self, elem):
        if self.head:
            current = self.head
            while current:
                if current.value == elem: return True
                current = current.next
            return False
        else: return None


    def delete(self, elem):
        if self.head:
            current = self.head
            previous = None
            if current.value == elem:
                self.head = current.next
                self.length -= 1
            else:
                while current:
                    if current.value == elem: break
                    previous = current
                    current = current.next
                if current:
                    previous.next = current.next
                    self.length -=1
                    return True
                else: return False
        else: return False
    

    def reverse_list(self):
        if self.head:
            current = self.head
            temp_current_next = None
            previous = None

            while current:
                temp_current_next = current.next
                current.next = previous
                previous = current
                current = temp_current_next
            self.head = previous
            return True
        else: return False


    def __swap_nodes_InHead_SetOther(self, node):
        other_node = self.head
        while other_node.value != node:
            other_node = other_node.next
        return other_node


    def __swap_nodes_InHead(self, node1, node2):
        root_node = self.head
        if node1 == self.head.value: 
            other_node = self.__swap_nodes_InHead_SetOther(node2)
        else: 
            other_node = self.__swap_nodes_InHead_SetOther(node1)

        if root_node.next == other_node:
            root_node.next = other_node.next
            other_node.next = root_node
            self.head = other_node
            return True
        else:
            other_previous = self.head
            while (other_previous.next.value != other_node.value): 
                other_previous = other_previous.next
            temp_other_next = other_node.next
            other_node.next = root_node.next
            other_previous.next = root_node
            root_node.next = temp_other_next
            self.head = other_node
            return True


    def __swap_nodes_NotInHead_FindNodePosition(self, node):
        current = self.head
        previous = None
        counter = 0
        result = {}

        while current.value != node:
            previous = current
            current = current.next
            counter +=1

        result["current"] = current
        result["previous"] = previous
        result["counter"] = counter
        return result

    def __swap_nodes_NotInHead_CheckCounters(self, node_data1, node_data2):
        updated_node_pos = {}
        
        if node_data1["counter"] > node_data2["counter"]:
            temp_main_node = node_data1["current"]
            temp_main_previous = node_data1["previous"]

            node_data1["current"] = node_data2["current"]
            node_data1["previous"] = node_data2["previous"]

            node_data2["current"] = temp_main_node
            node_data2["previous"] = temp_main_previous
        
        updated_node_pos["main_node"] = node_data1
        updated_node_pos["other_node"] = node_data2
        return updated_node_pos


    def __swap_nodes_NotInHead(self, node1, node2):
        main_node_data = self.__swap_nodes_NotInHead_FindNodePosition(node1)
        other_node_data = self.__swap_nodes_NotInHead_FindNodePosition(node2)
        node_data = self.__swap_nodes_NotInHead_CheckCounters(main_node_data, other_node_data)

        main_node = node_data["main_node"]["current"]
        main_previous = node_data["main_node"]["previous"]

        other_node = node_data["other_node"]["current"]
        other_previous = node_data["other_node"]["previous"]
       
        if main_node.next == other_node:
            main_previous.next = other_node
            main_node.next = other_node.next
            other_node.next = main_node
            return True

        elif main_node.next == other_previous:
            temp_other_next = other_node.next
            main_previous.next = other_node
            other_node.next = other_previous
            other_previous.next = main_node
            main_node.next = temp_other_next
            return True
        
        elif main_node.next != other_previous:
            temp_other_next = other_node.next
            main_previous.next = other_node
            other_node.next = main_node.next
            other_previous.next = main_node
            main_node.next = temp_other_next
            return True          

    
    def swap_nodes(self, node1, node2):
        if node1 == node2 : return False
        if node1 == self.head.value or node2 == self.head.value:
            self.__swap_nodes_InHead(node1, node2)
        else: 
            self.__swap_nodes_NotInHead(node1, node2)
                

