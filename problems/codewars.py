############------------ IMPORTS ------------############
from itertools import cycle


############------------ FUNCTION(S) ------------############
def cycle_through_an_iterable(iterable):
    for i in iterable:
        print(i)


############------------ DRIVER CODE ------------############
if __name__ == "__main__":
    iterable = cycle([1,2,3])
    cycle_through_an_iterable(iterable)
