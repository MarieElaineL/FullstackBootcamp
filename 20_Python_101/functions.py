# def somename():
#     print("Hello world")
# somename()


# name = "Marie"
# def userName():
#     print(f"Hello {name}")
# userName()


# def userName(name):
#     print(f"Hello {name}")
# userName("ben")


# def foodOrder(name, food):
#     print(f"{food} is ready for {name}")
# foodOrder("ben", "pizza")


# => You can predefine what a default would be of other parameters not entered 
# def foodOrder(name, food="pasta"):
#     print(f"{food} is ready for {name}")
# foodOrder("ben", "poutine")


# def foodOrder(name, food="Pasta"):
#     if name.lower() == "marie":
#         print("Hi Marie")
#     print(f"{food} is ready for {name}")

# foodOrder("Marie", food="Poutine")


# def foodOrder(name=None, food="Pasta"):
#     if name is None:
#         name = "Puwu"
#     person_type = "human"
#     if name == "Puwu":
#         person_type = "cat"

#     if person_type == "cat":
#         food = "Tuna"
#     print(f"{food} is ready for {name}")

# foodOrder()

# def someFunction():
#     return "a value"
# thing =  someFunction()
# print(thing)

def exp(num1, num2):
    total = num1 ** num2
    return total
big_number = exp(33, 6)
print(big_number)