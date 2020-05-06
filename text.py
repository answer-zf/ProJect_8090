"""
    
"""


class Car:
    # self 调用当前方法的对象
    def __init__(self, name, model, price):
        self.name = name
        self.model = model
        self.price = price

    def travel(self):
        print(self.name, "travel")


w01 = Car("bm", 12, 10000)
w01.travel()
