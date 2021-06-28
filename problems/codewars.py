############------------ IMPORTS ------------############
from itertools import cycle


############------------ FUNCTION(S) ------------############
def cycle_through_an_iterable(iterable):
    cycle_count = 0
    
    for i in iterable:
        print(i, end='-')
        cycle_count += 1

        if cycle_count >= 10:
            break


############------------ DRIVER CODE ------------############
if __name__ == "__main__":
    iterable = cycle('abc')
    cycle_through_an_iterable(iterable)
    '''
    a-b-c-a-b-c-a-b-c-a-
    '''