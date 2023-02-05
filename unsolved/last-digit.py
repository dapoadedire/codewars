def last_digit(n1, n2):
    digit = str(n1**n2)[-1]
    return digit


print(last_digit(2**200, 2**300))
