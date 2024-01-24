class Node:
    def __init__(self, val=None):
        self.val = val
        self.nextval = None
 
class LinkedList:
    def __init__(self):
        self.headval = None
 

    #add node at head
    def insert(self, data):
        #create a new node to hold the data
        new_node = Node(data)
        new_node.set_next(self.head)
        self.head = new_node
    
    #search for node value    
    def find(self, val):
        item = self.head
        while item != None:
           if item.val == val:
               return item
           else:
                item = item.nextval()
        return None    
    
    #remove from LL
    def remove(self, item):
        current = self.head
        #create a previous node to hold the one before the node we want to remove
        previous = None

        while current is not None:
            if current.val == item:
                break
            previous = current
            current = current.nextval

        if current is None:
            raise ValueError(f"{item} is not in the list")
        if previous is None:
            self.head = current.nextval
        else:
             previous.next = current.nextval
               
example = LinkedList()
example.headval = Node(23)
e2 = Node(90)
# Link first Node to second node
example.headval.nextval = e2
e3 = Node(90)
# Link second Node to third node
e2.nextval = e3