# #reg comparison
# if my_answer != "rock" and my_answer != "paper" and my_answer != "scisor":
#     #Exit program
#     pass

# #if my_answer in ['rock', 'paper', 'scissor']
# my_answer = input("Rock, Paper, Scissor. Pick one!").capitalize()
# options = ['Rock','Paper','Scissor']

# if my_answer in options:
#     print(f"{my_answer} is one of the options")
# else:
#     print(f"Hmm... {my_answer} is not part of the list! Try again.")

key = "profession"
person = {
    "name" : "marie",
    "profession" : "dev"
}

if key in person:
    print(f"{key} is a valid dictionary key in the person object")
else:
    print(f"{key} is not in the person object")