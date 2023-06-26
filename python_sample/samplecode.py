class MyClass:
    z=10
    
    def __init__(self, x,y):
        self.x=x
        self.y=y


obj1 = MyClass(10,20)
print(MyClass.z, obj1.x, obj1.y)

print(obj1.z, obj1.x, obj1.y)