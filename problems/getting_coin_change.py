############------------ FUNCTIONS ------------############
def change(amount):
    '''
     for amounts larger than 8
     returns how to pay for it with exact change
     in a hypothetical place where coins
     are only at values 3 & 5
    '''
    assert(amount >= 8)
    if amount == 8:
        return [3, 5]
    if amount == 9:
        return [3, 3, 3]
    if amount == 10:
        return [5, 5]

    coins = change(amount - 3)
    coins.append(3)
    return coins


############------------ TESTS ------------############
def test_case_1():
    n =  11
    try:
        print(change(n))
    except:
        print("Something went wrong")


def test_case_2():
    n =  999
    try:
        print(change(n))
    except:
        print("Something went wrong")


############------------ DRIVER CODE ------------############
if __name__ == '__main__':
    test_case_1()
    # [3, 5, 3]

    test_case_2()
    '''
    [3, 3, 3, ...] where len(answer) == 333
    '''