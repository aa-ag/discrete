############------------ FUNCTIONS ------------############ 
def change(amount):
    if amount == 24:
        return [5, 5, 7, 7]
    if amount == 25:
        return [5, 5, 5, 5, 5]
    if amount == 26:
        return [5, 7, 7, 7]

    coins = change(amount - 5)
    coins.append(5)
    return coins

############------------ TESTS ------------############
def test_case_1():
    amount =  26
    try:
        print(change(amount))
    except:
        print("Something went wrong")


def test_case_2():
    amount =  220
    try:
        print(change(amount))
    except:
        print("Something went wrong")


############------------ DRIVER CODE ------------############
if __name__ == '__main__':
    test_case_1()

    test_case_2()