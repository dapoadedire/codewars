def square_sum(numbers):
    # your code here
    squared_sum = sum(map(lambda num: num**2, numbers))
    return squared_sum


print(square_sum([1, 2, 2]))
