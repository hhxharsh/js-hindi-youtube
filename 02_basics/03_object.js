//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Harsh",
    "full name":"Harsh Singh",
    mySym="mykey1",
    age:18,
    location:"jaipur",
    email:"singharsh5@gmail.com",
    isLoggedin: false,
    lastLoginDays:["Monday","Tuesday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])



