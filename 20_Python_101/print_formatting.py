#There are two techniques for formatting
#First, and older way, is the     .format() way.
name = "Marie"
welcome_message = "Hi {}, welcome to python 101.".format(name)
print(welcome_message)
#returns " Hi Marie, welcome to python 101. "

#Second, and modern way is f"" (f string) (better way)

adjective = "great"
extra_message = f"I hope you have a {adjective} day of learning!"
#The f in front of the string indicates that it will be formatted according to available info from before it
print(extra_message)
#returns " I hope you have a great day of learning! "