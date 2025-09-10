# A restricted list
#an IMMUTABLE table. A table which cannot be modified, unlike a simple table (list)
#The only interactions you can have with a tuple is count() and index()
#A tuple is a low memory taking table as it will never change

# TABLE = []
# TUPLE = ()
foods = ('pizza', 'fish', 'tomatoes', 'bacon',) #add a coma at the end to avoid possible function mistake with older python
for food in foods:
    print("The food is", food)