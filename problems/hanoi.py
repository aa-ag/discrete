# source of this implementation: https://www.youtube.com/watch?v=0u7g9C0wSIA
############------------ FUNCTIONS ------------############ 
def print_move(from_tower, to_tower):
    print(f"move {str(from_tower)} to {str(to_tower)}")

def towers(n, from_tower, to_tower, spare_tower):
    # assert that there is more than zero rings 
    assert(n > 0)

    # base case
    if n == 1:
        print_move(from_tower, to_tower)
    else:
        towers(n - 1, from_tower, to_tower, spare_tower)
        towers(1, from_tower, to_tower, spare_tower)
        towers(n - 1, spare_tower, to_tower, from_tower)


############------------ DRIVER CODE ------------############
if __name__ == '__main__':
    towers(1, 'a', 'b', 'c')
    # move a to b