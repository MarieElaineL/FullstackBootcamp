fav_food = ['Pizza', 'Tacos', 'Salmon']
fav_food =set(fav_food)

for food in fav_food:
    print(f"One of the foods that I like is {food}")
    if food == "Pizza":
        size = input("What size pizza do you like?")
        print(f"You ordered a {size} {food}! Delivery in a few minutes!")
 
###########

topping = "PIZZA"

for letter in topping:
    print(letter)

print("Gimme pizza")

############
person = {
    "name" : "Marie",
    "age" : 31,
    "dob" : "Feb 28"
}

for key, value in person.items():
    print (f"This {key} key has this value: {value}")