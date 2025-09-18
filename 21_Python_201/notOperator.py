myThing = False
#if myThing: #if myThing is true
if not myThing: #If myThing is NOT true
    print("Print a statement in here")

name = "Mri"
if name not in ['Marie','Felix','Puwu','Awiwi']:
    print(f"{name} is not part of the real names club")


#NOT alone is checking for TRUE or FALSE
#NOT IN is checking if it exists inside a list

name1 = "Marie"
name2 = "Felix"

if name1 != name2:
    print("Yup, these sure area different names alright.")

if not name1:
    print("Hmm something's missing")
else:
    print("Yup, a value sure has been stored in there")

if name2:
    print("Typ, 2nd name is definitely true")
else:
    print("Gurl, do something with your var")