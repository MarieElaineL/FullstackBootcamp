const person = {
    'name' : 'Marie',
    'age' : '31',
    'height' : "5'7\"",
    'speak' : function(want="default item"){
        console.log(`Hello, I want ${want}`);
        // This results into "Hello, I want default item"
    },
    // This is a more compact way of creating a function
    // An Object Literal
    talk(to="Karen") {
        console.log(`I am talking to ${to}`)
    }
}

// Here, since we've defined that the variable of the function in Speak equals to Default Item, calling the function while adding the item, changes the result

person.speak("Pizza")
// Since we've added to it's parameter "pizza", the console log will result to "Hello, I want Pizza"
person.talk("Puwu")


const prunelle = {
    'name' : 'Prunelle',
    'nickname' : "Puwu",
    'age' : 3,
    meowType(meow = "Meow"){
        console.log(`${prunelle.nickname}'s meows sounds like ${meow}`)
    }
}

console.log(prunelle.name);
console.log(prunelle.nickname);
console.log(prunelle.age);
prunelle.meowType("Mi");