def is_armstrong_number(number):
    total = 0
    for x in str(number):
        total += int(x) ** len(str(number))
    if total == number:
        return True
    else:
        return False