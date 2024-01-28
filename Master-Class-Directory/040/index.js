// this keyword
 let user = {
    name: "Hom",
    age: 25,
    email: "homdahal345@gmail.com",
    isLogged: false,
    login: function(){
        this.isLogged = true;
    },
    logout: function(){
        this.isLogged = false;
    },

 };
    console.log(this);
 