from queue import Queue

q = Queue()

q.enqueue("Brush Teeth")
q.enqueue("Drink Water")
q.enqueue("Have BreakFast")
q.enqueue("Work")
q.print_queue()

q.dequeue()
print(q.peek())
# print(q.items)

