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

calculator(5,10,addition,multiplication); // in this case add is a callback function




// 1. Write a function `calculator` that takes two numbers and two callback functions
// for subtraction and division. The subtraction function should subtract the two numbers,
// and the division function should divide the first number by the second number. 
//The `calculator` function should print the results of both operations.
let subtraction = function(a,b){
    return a - b;
}
let division = function(a,b){
    return a / b;
}
function calculator1(numOne, numTwo, sub, div) {
    let subResult = sub(numOne, numTwo);
    let divResult = div(numOne, numTwo);
    let result = `Subtraction: ${subResult} and Division: ${divResult}`;
    console.log(result);
   

}
calculator1(5,10,subtraction,division); // in this case add is a callback function


// 2. Modify the `calculator` function to also take a callback function for finding the modulus
// of the two numbers. The modulus function should return the remainder of the division of
// the first number by the second number.
let modulus = function(a,b){
    return a % b;
}   

function calculator2(numOne, numTwo,mod) {
    let modResult = mod(numOne, numTwo);
    let result = ` Modulus: ${modResult}`;
    console.log(result);
   

}
calculator2(5,10,modulus); // in this case add is a callback function

// 3. Write a function `arrayCalculator` that takes an array of numbers and two callback 
//functions for finding the sum and product of the array. The sum function should return the sum of all
// numbers in the array, and the product function should return the product of all numbers in the array. 
//The `arrayCalculator` function should print the results of both operations.

let sum = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
let product = function(arr){
    let product = 1;
    for(let i = 0; i < arr.length; i++){
        product *= arr[i];
    }
    return product;
}

function arrayCalculator(arr, sum, product) {
    let sumResult = sum(arr);
    let productResult = product(arr);
    let result = `Sum: ${sumResult} and Product: ${productResult}`;
    console.log(result);
   

}   
arrayCalculator([1,2,3,4,5],sum,product); // in this case sum/product is a callback function


// 4. Modify the `arrayCalculator` function to also take a callback function for finding the 
//average of the numbers in the array. The average function should return the sum of all numbers
//divided by the number of elements in the array.
let average = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}


function arrayCalculator1(arr,  avg){
    let avgRestult = avg(arr);
    let result = `Average: ${avgRestult}`;
    console.log(result);

}
arrayCalculator1([1,2,3,4,5],average); // in this case average is a callback function

// 5. Write a function `stringCalculator` that takes a string and two callback functions for
// finding the length of the string and the number of vowels in the string. The length function 
//should return the length of the string, and the vowel function should return the number of vowels in the string.
// The `stringCalculator` function should print the results of both operations.

let length = function(str){
    return str.length;
}
let vowel = function(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}


function stringCalculator(str, length, vowel){
    let lengthResult = length(str);
    let vowelResult = vowel(str);
    let result = `Length: ${lengthResult} and Vowel: ${vowelResult}`;
   return result;

}

console.log(stringCalculator("HELLO",length,vowel)); // in this case length/vowel is a callback function