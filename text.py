"""
    
"""


def string_reversal(statement):
    list_statement = statement.split(" ")
    list_statement.reverse()
    return " ".join(list_statement)


string = "hoe an fh ad"
print(string_reversal(string))

print()
