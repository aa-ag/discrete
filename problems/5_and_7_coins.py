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
