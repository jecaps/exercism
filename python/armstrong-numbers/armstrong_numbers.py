def is_armstrong_number(number):
    total = sum([int(x) ** len(str(number)) for x in str(number)])
    return total == number

