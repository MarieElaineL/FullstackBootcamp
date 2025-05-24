// DRY METHOD =  D.R.Y = Dont repeat yourself
// DRY =  use function instead of repeating the ifs
function addNumbers(num1, num2){
    const total = num1 + num2;
    return total;
}

const addedTotal = addNumbers(1, 9);

function multiplyNumbers(num1, num2, num3){
    const total = num1 * num2 * num3;
    return total;
}

const multipliedTotal = multiplyNumbers(5, 24, 4654);

console.log(`The result of the three numbers added equals ${multipliedTotal}`)