#=> Scope is bascially if stuff are available or not outside of a function
#=> In this example, Both Marie and Elaine will appear with both print
#=> But if you remove the   name = "Elaine" from within the myfunc(), both print will bring "Marie"
#=> Thats because, since no "name" has been defined in the func, it picks from outside the func
name = "Marie"
def myfunc():
    name = "Elaine" #=> Variables only exists inside the function
    return name

print(myfunc())
print(name)