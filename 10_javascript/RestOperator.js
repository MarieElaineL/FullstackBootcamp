// Homework of Function: The Rest Operator
// The use of the ... serves to add any amount of parameters.
// This should display on the console "Since this morning, Puwu has meowed 69 times", followed by a 2nd entry "haha nice", because the sum of the numbers resulted into 69, If the sum is any other number, the 2nd entry is "Dang, that sure is allot of meows!"

let total = 0;
let comment = "";

function howManyMeows (when, cat, ...numbers){
  for (index in numbers){
    total = total + numbers[index]
  }
  // Template literal
  return `Since ${when}, ${cat} has meowed ${total} times`;
}


function numberComment(num){
  if(total == 69){
    comment = "haha nice"
  }
  if(total == 420){
    comment = "BLAZE IT!!!"
  }
  if(total == 24){
    comment = "You know what's funnier than 24? ... 25! Teehee!!"
  }
  if(total = 42){
    comment = "Ahh yes, the meaning of life..."
  }
  else{
    comment = "Dang, that sure is allot of meows!"
  }
  return comment;
};

const result = howManyMeows("this morning", "Puwu", 41, 1);
const aComment = numberComment(result);

console.log(result);
console.log(aComment);
