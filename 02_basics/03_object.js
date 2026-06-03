//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Harsh",
    "full name":"Harsh Singh",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"singharsh5@gmail.com",
    isLoggedin: false,
    lastLoginDays:["Monday","Tuesday"]
}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//= overwrite value 
JsUser.email = "singh@gmail.com";

//how to freesze or lock values

// Object.freeze(JsUser)

JsUser.email = "singh@amazon.com"


console.log(JsUser)

JsUser.greeting = function(){
    console.log("HelloJsUser")
}
JsUser.greetingtwo= function(){
    console.log(`HelloJsUser,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo());