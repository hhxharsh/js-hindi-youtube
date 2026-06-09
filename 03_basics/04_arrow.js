// //
// const user = {
//     username: "hitesh",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this)
//     }
    
// }
// user.welcomeMessage()
// user.username = "Harsh";
// user.welcomeMessage()


// console.log(this)
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username="HArsh";
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(2,5))

//explicit
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
//nocurly no return needed
//implict
// const addTwo = (num1,num2) => (num1+num2)

// console.log(addTwo(2,5))
const addTwo = (num1,num2) => ({username:"Harsh"})

// console.log(addTwo(3,4))

// MimeTypeArray.forEach(()=> ())