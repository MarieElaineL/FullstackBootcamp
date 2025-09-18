with open('FileToWrite.txt', 'w') as file: #W as Write, as in create
    file.write("Hello, created from Python course 201 ONCE AGAIN") 
    #Adding "ONCE AGAIN" after generating it the first time adds to the file created, not creating a new one.

with open('FileToWrite.txt', 'a') as file: #A as in Append, as in to add to
    file.write("The more the merrier!") #Added this line at the end of what was already written on that one line
#BUT IF YOU WANT TO ADD A NEW LINE

with open('FileToWrite.txt', 'a') as file:
    file.write('\nA WHOLE NEW LINE!!! A NEW FANTASTIC LINE OF CODE!') # the \n creates a New line, space and everything
    file.write('\n\tAND SO MUCH MORE') # the \t adds in tabulation