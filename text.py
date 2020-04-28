"""
    
"""

input_string = input("")
d01 = {}
for item in input_string:
    if item not in d01:
        d01[item] = 1
    else:
        d01[item] += 1
print(d01)
