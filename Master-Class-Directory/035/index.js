let add = function(a,b){
    return a + b;
}
function calculator(numOne, numTwo, add) {
    console.log(add(numOne, numTwo));
   

}

calculator(5,10,add) // in this case add is a callback function