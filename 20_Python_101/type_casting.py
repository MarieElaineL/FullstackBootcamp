# age = input("How old are you? (number only)")

# data_type = type(age)
# print(data_type)
#=> reveals that age is a str

# age = int(age) #converts into integer
# data_type = type(age)
# print(data_type)
#=> reveals that age is now an int

# print("Your age in dog years is", age * 7)
#age (31) is 217

grocery_list=['Apples', 'Oranges', 'Bananas', 'Apples']
print(grocery_list)
grocery_list = set(grocery_list) # converts list into set  
#=> BE WARNED, if covnerted, cannot revert back to a list
print(grocery_list)
print(type(grocery_list))
grocery_list = tuple(grocery_list)
print(type(grocery_list))