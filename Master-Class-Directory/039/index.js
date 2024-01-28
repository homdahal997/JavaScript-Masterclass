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
 