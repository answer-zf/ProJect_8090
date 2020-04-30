"""
    
"""

list01 = ["zfd", "cd", "ws"]
list02 = [101, 102, 103]
# dic01 = {item: len(item) for item in list01}
# print(dic01)

dic02 = {list01[i]: list02[i] for i in range(3)}
print(dic02)