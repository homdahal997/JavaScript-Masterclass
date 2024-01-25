let addition = function(a,b){
    return a + b;
}
let multiplication = function(a,b){
    return a * b;
}
function calculator(numOne, numTwo, add, mul) {
    let addResult = add(numOne, numTwo);
    let mulResult = mul(numOne, numTwo);
    let result = `Addition: ${addResult} and Multiplication: ${mulResult}`;
    console.log(result);
   

}

calculator(5,10,addition,multiplication) // in this case add is a callback function