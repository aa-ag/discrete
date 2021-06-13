############------------ IMPORTS ------------############
from itertools import combinations


############------------ FUNCTIONS ------------############
def subset_without_x_and_2x():
    '''
     Choose the maximal number of integers 
     among 1..50 
     that can be selected if we are not allowed 
     to select n and 2n at at same time.
    '''
    integers = [i for i in range(1, 51)]
    return len(list(j for j in combinations(integers, 2) if j[1] < (j[0] * 2)))


############------------ DRIVER CODE ------------############
if __name__ == "__main__":
    print(subset_without_x_and_2x())