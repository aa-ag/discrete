# source of this implementation: https://www.youtube.com/watch?v=0u7g9C0wSIA
############------------ FUNCTIONS ------------############ 
def print_move(from_tower, to_tower):
    print(f"move {str(from_tower)} to {str(to_tower)}")

def towers(n, from_tower, to_tower, spare_tower):
    try:
        # assert that there is more than zero rings 
        assert(n > 0)

        # base case
        if n == 1:
            print_move(from_tower, to_tower)
        else:
            towers(n - 1, from_tower, to_tower, spare_tower)
            towers(1, from_tower, to_tower, spare_tower)
            towers(n - 1, spare_tower, to_tower, from_tower)
    
    except AssertionError:
        print('"N" must be greater than zero.')


############------------ DRIVER CODE ------------############
def test_case_1():
    return towers(1, 'a', 'b', 'c')

def test_case_2():
    return towers(-3, 'a', 'b', 'c')

def test_case_3():
    return towers(3, 'a', 'b', 'c')

############------------ DRIVER CODE ------------############
if __name__ == '__main__':
    test_case_1()
    # move a to b

    test_case_2()
    # "N" must be greater than zero.

    test_case_3()
    '''
     move a to b
     move a to b
     move c to b
     move a to b
     move c to b
     move c to b
     move a to b
    '''