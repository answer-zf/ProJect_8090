"""
    student-manager
"""


class StudentModel:
    """
        学生数据模型类
    """

    def __init__(self, name="", age=0, score=0, id=0):
        """
            创建学生对象
        :param id: 编号
        :param name: 姓名
        :param age: 年龄
        :param score: 成绩
        """
        self.id = id
        self.name = name
        self.age = age
        self.score = score

    @property
    def id(self):
        return self.__id

    @id.setter
    def id(self, value):
        self.__id = value

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, value):
        self.__name = value

    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, value):
        self.__age = value

    @property
    def score(self):
        return self.__score

    @score.setter
    def score(self, value):
        self.__score = value


class StudentManagerController:
    """
        学生逻辑控制器
    """

    def __init__(self):
        self.__list_stu = []

    @property
    def list_stu(self):
        return self.__list_stu

    def add_student(self, student):
        """
            添加新学生
        :param student: 需要添加的学生对象
        :return:
        """
        student.id = self.__generate_id()
        self.__list_stu.append(student)

    def __generate_id(self):
        """
            生成编号
        :return: 编号
        """
        # if len(self.__list_stu) > 0:
        #     id = self.__list_stu[-1].id + 1
        # else:
        #     id = 1
        return self.__list_stu[-1].id + 1 if len(self.__list_stu) > 0 else 1


class StudentManagerView:
    """
        界面视图类
    """

    def __init__(self):
        self.__controller = StudentManagerController()

    def __input_students(self):
        """

        :return:
        """
        list_students = []
        while True:
            name = input("student name : ")
            age = input("student age : ")
            score = input("student score : ")
            list_students.append({"name": name, "age": age, "score": score})
            is_continue = input("is continue print y")
            if is_continue != "y":
                break
        return list_students

    def __display_menu(self):
        """
            显示菜单
        :return:
        """
        print("1) 添加学生")
        print("2) 显示学生")
        print("3) 删除学生")
        print("4) 修改学生")
        print("5) 按照成绩降序排列")

    def __select_menu(self):
        """
            选择菜单
        :return:
        """
        str_number = input("pl. input option")
        if str_number == "1":
            list_students = self.__input_students()
            for item in list_students:
                student = StudentModel(item["name"], int(item["age"]), int(item["score"]))
                self.__controller.add_student(student)
            for item in self.__controller.list_stu:
                print(item.__dict__)

        elif str_number == "2":
            pass
        elif str_number == "3":
            pass
        elif str_number == "4":
            pass
        elif str_number == "5":
            pass

    def main(self):
        """
            界面入口方法
        :return:
        """
        while True:
            self.__display_menu()
            self.__select_menu()


view = StudentManagerView()
view.main()
