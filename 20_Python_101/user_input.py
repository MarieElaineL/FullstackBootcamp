name = input("What is your name?")
print("Hello, ", name)

#Remember, any input received is a string!
age = input("How old are you? (number only pls)")
dog_years = age * 7
print("Dear ",name,". Your age in dog years is ", dog_years)
# returns "31313131313131" (7 x "31")

dog_years_math = int(age)*7 #turns received string into an integer 
print("Haha jk jk :P It comes up to ", dog_years_math, " in dog years.")
#dont forget to convert your input into real numbers, not strings
