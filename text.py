"""
    
"""

# class Person:
#     def __init__(self, name):
#         self.name = name
#         self.__skills = []

#     def teach(self, person_other, str_skill):
#         person_other.__skills.append(str_skill)
#         print(self.name, person_other.name, str_skill)

#     @property
#     def name(self):
#         return self.__name

#     @name.setter
#     def name(self, value):
#         self.__name = value

#     @property
#     def skills(self):
#         # 返回可变对象地址，意味着在类外仍可以操作可变对象
#         # return self.__skills
#         # 返回新的可变对象，意味着在类外操作的是新可变对象，不影响原对象
#         return self.__skills[:]
#         # 备注：每次通过切片返回的新对象，都会另外开辟空间创建新对象，占用过多内存

# zs = Person("zs")
# ls = Person("ls")

# zs.teach(ls, "python")
# print(ls.__dict__)


class Skills:
    def __init__(self, name, cd_time, buff_time, atk_dist):
        self.name = name
        self.cd_time = cd_time
        self.buff_time = buff_time
        self.atk_dist = atk_dist

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, value):
        self.__name = value

    @property
    def cd_time(self):
        return self.__cd_time

    @cd_time.setter
    def cd_time(self, value):
        self.__cd_time = value

    @property
    def buff_time(self):
        return self.__buff_time

    @buff_time.setter
    def buff_time(self, value):
        self.__buff_time = value

    @property
    def atk_dist(self):
        return self.__atk_dist

    @atk_dist.setter
    def atk_dist(self, value):
        self.__atk_dist = value


list01 = [
    Skills("xlsbz", 100, 10, 200),
    Skills("jxbgz", 120, 6, 100),
    Skills("dgb", 80, 12, 160),
    Skills("jxzj", 140, 8, 220),
    Skills("jyzj", 110, 14, 180)
]

for item in list01:
    if item.name == "xlsbz":
        print(item)

list02 = []
for item in list01:
    if item.buff_time >= 10:
        list02.append(item)
for item in list02:
    print(item.__dict__)

for i in range(len(list01) - 1):
    for j in range(i + 1, len(list01)):
        if list01[i].atk_dist >= list01[j].atk_dist:
            list01[i], list01[j] = list01[j], list01[i]

print("--------------------")

for item in list01:
    print(item.__dict__)