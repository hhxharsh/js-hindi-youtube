//sec part
//ths is a singleton
// const tinderUSer = new Object()
//this is a non singleton object
const tinderUSer = {}

tinderUSer.id ="123absd"
tinderUSer.name = "sam"
tinderUSer.LoggedIn = false

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"HArsh",
            lastname:"Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


// console.log(tinderUSer)
const obj1 = {
    1:"A",2:"b"}
const obj2 = {
    3:"a", 4:"b"
}
// }
const obj4 = { 5:"e" ,6:"f"}

// const obj3 = {
//     obj1,obj2
// }

// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
console.log(obj3)

const users = 
  [  {
    id:1,
    email:"harsh@amazon.com"
    },
    {
    id:1,
    email:"harsh@amazon.com"
    },
    {
    id:1,
    email:"harsh@amazon.com"
    },
    {
    id:1,
    email:"harsh@amazon.com"
    },
    {
    id:1,
    email:"harsh@amazon.com"
    },
]

users[1].email

console.log(tinderUSer);

console.log(Object.keys(tinderUSer))

console.log(tinderUSer.hasOwnProperty('IsLoggedIn'))