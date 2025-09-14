items = ['one', 'two', 'three', 'four', 'five']

for item in items:
    if item == 'two' or item == 'four':
        continue

    print(f"{item} is not the seeked number")
    #Print returns   One Three Five
    #Continue continues the count, skipping the Printing in console
    #is one == two? no?