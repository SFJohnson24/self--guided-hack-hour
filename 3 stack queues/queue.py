class MyQueue:
    def __init__(self):
        self.s1=[];
        self.s2=[];

    def push(self, x: int) -> None:
        self.s1.append(x)

    def pop(self) -> int:
        if not self.s1 and not self.s2:
            return;
        if not self.s2:
            while len(self.s1) != 0:
                self.s2.append(self.s1.pop())
        return self.s2.pop()

    def peek(self) -> int:
        #empty lists evaluate to false // lists with a value or more evaluate to true in python
        if self.s2:
            return self.s2[len(self.s2)-1]
        elif self.s1:
            return self.s1[0]
        else:
            return

    def empty(self) -> bool:
        if not self.s1 and not self.s2:
            return True
        else:
            return False
        
