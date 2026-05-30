
const name = "Harsh"
const repoCount = 50

console.log(name.includes('r'));
console.log(`Hello My Name is ${name.charCodeAt(2)} and my repo count is${repoCount}`);


const gameName = new String('harsh-sv')

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.big());

console.log(gameName.charAt(6));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,6);

console.log(newString);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);

const newStringOne= "  harsh    "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://harsh.com/harsh%20singh"

console.log(url.replace('%20' , '-'))

console.log(url.includes('harsh'))

console.log(gameName.split('-'));

let newStringTwo = "atwalamethod";

