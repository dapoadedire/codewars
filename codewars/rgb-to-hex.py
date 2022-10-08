def rgb(r, g, b):
    if r < 0:
        r = 0
    elif r > 255:
        r = 255
    if g < 0:
        g = 0
    elif g > 255:
        g = 255
    if b < 0:
        b = 0
    elif b > 255:
        b = 255
    hex_code = []
    for i in [r, g, b]:
        hex_code.append(hex(i)[2:].zfill(2).upper())
        

    return "".join(hex_code)

print(rgb(255, 255, 255))
print(rgb(255, 255, 300))
print(rgb(0, 0, 0))
print(rgb(148, 0, 211))
print(rgb(-20, 275, 125))