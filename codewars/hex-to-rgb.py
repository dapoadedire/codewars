def hex_string_to_RGB(hex_string):
    rgb_dict = {}
    mytuple = tuple(int(hex_string[1:][i:i+2], 16) for i in (0, 2, 4))
    rgb_dict["r"] = mytuple[0]
    rgb_dict["g"] = mytuple[1]
    rgb_dict["b"] = mytuple[2]
    return rgb_dict


print(hex_string_to_RGB("#FF9933"))
print(hex_string_to_RGB("#beaded"))
print(hex_string_to_RGB("#000000"))
print(hex_string_to_RGB("#111111"))
# print(hex_string_to_RGB("#Fa3456"))