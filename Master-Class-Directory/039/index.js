// Object Literal: MasterClassDirectory[037]
 let user = {
    fname: "Hom",
    lname: "Dahal",
    age: 25,
    course: "MCA",
    address: {
        city: "Kathmandu",
        state: "Bagmati",
        country: "Nepal"
    },
    hobbies: ["Coding", "Reading", "Writing", "Traveling"],
    isLogged: true,
    addHobby: function(newHobby) {
        this.hobbies.push(newHobby);
    },
    getHobbies: function(){
        let hobbies = "";
        for(let i = 0; i < this.hobbies.length; i++){
            hobbies += this.hobbies[i] + " \n";
        }
        return hobbies;
    },
    logIn: function() {
        this.isLogged = true;
    }

 };
 console.log(user.address.city, user.course, user.hobbies[2]);

 console.log(typeof user.getHobbies);




 

//  1. Add a method `getFullName` to the `user` object that returns
// the user's full name. Assume the `user` object now has a `lastName` 
//property.
console.log(user.fname + " " + user.lname);




 
//  2. Write a function `printUserDetails` that takes a `user` 
//object and prints all its properties and their values.

console.log(user.fname + " " + user.lname + " " + user.age + " " + user.course + " " + user.address.city + " " + user.address.state + " " + user.address.country + " " + user.hobbies[0] + " " + user.hobbies[1] + " " + user.hobbies[2] + " " + user.hobbies[3] + " " + user.isLogged);


 
//  3. Add a method `isLoggedIn` to the `user` object that returns
// a string saying whether the user is logged in or not.

if (user.isLogged == true){
    console.log("User is Logged in");
}else{
    console.log("User is not Logged in");   
}


 
//  4. Write a function `updateAddress` that takes a `user` object, 
//a new city, state, and country, and updates the user's address with
// these new values.
let updateAddress = function(user, city, state, country){
    user.address.city = city;
    user.address.state = state;
    user.address.country = country;
    return user;
}
console.log(typeof updateAddress);
console.log(updateAddress(user, "Fairfield", "Ohio", "NeUSAal"));


 
//  5. Add a method `addHobby` to the `user` object that takes a new
// hobby and adds it to the user's hobbies array.
user.addHobby("Playing");
console.log(user.hobbies); 

 
//  6. Write a function `getHobbies` that takes a `user` object and returns
// a string listing all the user's hobbies.
 console.log(user.getHobbies());
 console.log(typeof user.getHobbies());


//  7. Add a method `logIn` to the `user` object that sets the `isLogged`
// property to `true`.
console.log(user.isLogged);
 
//  8. Write a function `isAdult` that takes a `user` object and returns 
//a boolean indicating whether the user is an adult (i.e., age is 18 or over).
isAdult = function(user){
    if(user.age >= 18){
        return true;
    }else{
        return false;
    }
}   
console.log(isAdult(user));

 
//  9. Add a method `logOut` to the `user` object that sets the `isLogged`
//property to `false`.


 
//  10. Write a function `getAddress` that takes a `user` object 
// and returns a string with the user's full address.