"""
    
"""

# list_string = []

# while True:
#     string = input("pl. str: ")
#     if string == "q":
#         print("-".join(list_string))
#         break
#     list_string.append(string)

# string_back = input("str:")

# if string_back == string_back[::-1]:
#     print("yes")

# 1-33(6) 1-16(1)

list_doubleball = []
time = 1
while True:
    if len(list_doubleball) <= 5:
        str_num = input("pl. input 1-33.this is %d ball." % (time))
        if int(str_num) < 1 or int(str_num) > 33:
            continue
        if str_num not in list_doubleball:
            list_doubleball.append(str_num)
            time += 1
    elif len(list_doubleball) == 6:
        str_num = input("pl. input 1-16.this is %d ball." % (time))
        if int(str_num) < 1 or int(str_num) > 16:
            continue
        if str_num not in list_doubleball:
            list_doubleball.append(str_num)
            time += 1
    else:
        break
print(list_doubleball)
