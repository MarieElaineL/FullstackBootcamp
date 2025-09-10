# is basically like a JS object, or a JSON file
# household = {
#     "key" : "",
#     "human_1" : "marie",
#     "human_2" : "felix",
#     "cat_1" : "puwu",
#     "cat_2" : "awiwi"
# }
# print(person['human_1'])

person = {
    "name" : "marie",
    "age" : "31",
    "dob" : "feb 28 1994",
    "occupation" : "employed",
    "pets" : "2 cats",
    "deleteMe" : "lorem"
}
print("1-", person["name"])
print("2-", person)
person['hobby'] = "Arts and fiber arts" #Automaticall adds this to end of list
print("3-", person)
del person["deleteMe"]
print("4-", person)