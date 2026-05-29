const score = 100;

const scoreval = 100.3;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail;

//def of symbol

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 2346n;

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = { name: "hitesh", age: 22 };

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof heros);

let myYoutubename = "hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(anothername);
console.log(myYoutubename);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

console.log(userOne.email);
userTwo.email = "hitesh@google.com";
console.log(userTwo.email);

console.log(userOne.email);
