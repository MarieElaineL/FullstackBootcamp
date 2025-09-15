items = ['one', 'two', 'three', 'four', 'five']

# for item in items:
#     if item == 'two' or item == 'four':
#         continue

#     print(f"{item} is not the seeked number")
    #=> Print returns   One Three Five
    #=> Continue continues the count, skipping the Printing in console
    #is one == two? no?

# for item in items:
#     if item == "three":
#         break
#     print(item)
    #=> Stops counting once it reaches "three". So:  one two  (nothing else)

# num = 0
# while num <= 20:
#     num = num +1
#     if num % 2 == 0:
#         continue
#     print(num)

num = 0
while num <= 1_000_000:
    num = num + 1 
    if num == 13:
        break
    print(num)