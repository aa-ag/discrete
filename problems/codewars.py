############------------ IMPORTS ------------############
from itertools import cycle

############------------ FUNCTION(S) ------------############
def cycle_through_an_iterable(iterable):
    saved = list()
    for element in iterable:
        yield element
        saved.append(element)
    while saved:
        for element in saved:
              yield element


############------------ DRIVER CODE ------------############
if __name__ == "__main__":
    cycle_through_an_iterable('ABCD')
