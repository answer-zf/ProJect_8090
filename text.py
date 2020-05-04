"""
    
"""


class Car:
    # self 所创建的 调用当前方法的对象
    def __init__(self, name, model, price):
        self.name = name
        self.model = model
        self.price = price

    def travel(self):
        print("travel")


w01 = Car("bm", 12, 10000)
w01.travel()

print(w01)