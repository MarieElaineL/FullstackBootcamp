#TODO: Create a Rock Paper Scissor generator
#TODO: Use Random, While, Input, Print Formatting, Comparison operators, Break & Continue

import random

def play_round():
    options = ["Rock", "Paper", "Scissor"]

    #While loop to make sure I type correctly 😅
    while True: 
        myPick = input(f"What is your pick? Rock, Paper, Scissor").capitalize()

        if myPick in options: 
            break #If my answer responds to one of the three option, leave this While loop and continue the RPS
        else:
            print(f"Invalid input. Please write correctly one of the three options ({options}).")     
            #If my answer does not correspond to one of the three options, repeat this Input prompt until I type it right


    opponentPick = random.choice(options) #Make the PC pick one of the three options

    print(f"Opponent picked {opponentPick} and you picked {myPick}")   #Declare the hands in the round

    if opponentPick == myPick:
        print(f"It's a tie.")        

    elif (opponentPick == "Rock" and myPick == "Paper") or \
        (opponentPick == "Paper" and myPick == "Scissor") or \
        (opponentPick == "Scissor" and myPick == "rock"):
        print(f"You win this round.")   
        return "player"  #Defining this round's winner as player
    
    else:
        print(f"You lose this round.")
        return "opponent"  #Defining this round's winner player

def compete():
    myScore = 0
    opScore = 0
    totalRounds = 0

    # while myScore < 3 and opScore < 3:
    while myScore < 3:
        result = play_round()
        totalRounds += 1

        if result == "player":
            myScore += 1
        elif result == "opponent":
            opScore += 1
        print(f"Current score: You {myScore}, Opponent {opScore}")
    if myScore == 3:
        print(f"At last!! Congrats, you finally won! It only took {totalRounds} rounds to win 3!")        
    # if opScore == 3:
    #     print("Sorry, try again!")

compete()






