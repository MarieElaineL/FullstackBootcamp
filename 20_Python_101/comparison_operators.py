# can_code = True
# if can_code == True:
#     print("You can code en titi")
# else:
#     print("You can't code yet 🤓☝️")

# teacher = "Kalob" #Because here, the name starts in uppercase, it doesn't exactly match the comparison
# #
# if teacher.lower() == "kalob":  #adding the .lower() converts the text into lowercase, insuring proper match
#     print("You are the teacher, go to teach your stuff!")
# else: 
#     print("You're the student! Quick, head to your classroom!")
    
name = input("What is your name?")
if name.capitalize() == "Marie":
    welcome_message = f"Welcome {name}! Glad to see you!"
    print(welcome_message)
    bring_tea = "You Oolong tea is ready and at the perfect temperature"

#elif is else if. I guess they got lazy?
elif name.capitalize() == "Felix": 
    welcome_message = f"Welcome {name}, how was cards with the boys?"
    print(welcome_message)
    bring_tea = "I made some Genmaicha for you :)"

else:
    intruder_message = f"WTF?! {name.upper()}!??! WHO ARE YOU??!?! GET OUTTA HERE, CRIMINAL SCUM!"
    print(intruder_message)
    bring_tea = "*SPLASHES HOT TEA IN YOUR FACE* BEGONE !!!"

print(bring_tea)

# The comparison operator is the same like JS and pretty much any lang