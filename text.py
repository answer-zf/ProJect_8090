"""

"""


class Student:
    """
        学生类
    """
    def __init__(self, name, gender, age, score):
        self.name = name
        self.gender = gender
        self.age = age
        self.score = score

    def print_self(self):
        print(self.name, self.age, self.score, self.gender)


list01 = [
    Student("zf", "male", 20, 30),
    Student("cf", "female", 21, 60),
    Student("gf", "male", 22, 70),
    Student("df", "female", 23, 80),
]


def get_student_for_name(list_student, name):
    for item in list_student:
        if item.name == name:
            return item


def get_students_for_gender(list_student, gender):
    list_gender = []
    for item in list_student:
        if item.gender == gender:
            list_gender.append(item)
    return list_gender


def get_students_for_scope(list_student, age, score):
    list_scope = []
    for item in list_student:
        if (item.age > age and item.score > score):
            list_scope.append(item)
    return list_scope


re = get_students_for_scope(list01, 20, 60)
for item in re:
    item.print_self()
