def solution(number):
    multiples = []
    for i in range (number):
        if i % 3 == 0 or i % 5 == 0:
            multiples.append(i)

    return sum(multiples)
    # One-liner: does the same thing as the above code.
    # return sum([x for x in range(number) if x % 3 == 0 or x % 5 == 0])
  