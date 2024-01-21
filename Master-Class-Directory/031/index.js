             //parameter
            //    !
// function Welcome(name) {
//     console.log(`Welcome ${name}`); 
// }
// Welcome("Hom Dahal");

// function addition(numOne, numTwo) {
//     let result = numOne + numTwo;
//     console.log(result);

// }
// addition(5, 10)

// function fullName(firstName, lastName) {
//     console.log(`WELCOME ${firstName} ${lastName}`);
// }
// fullName("Hom", "Dahal");

function addition(numOne = 0, numTwo = 0){
    let result = numOne + numTwo;
    console.log(result);
}
addition(5, 10);
addition(5);