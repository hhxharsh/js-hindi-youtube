//functions in java script
function sayMyName(){
 console.log("h")
console.log("i")
console.log("t")
console.log("e")
console.log("s")
console.log("h")   
};

// sayMyName()

function addTeoNumbers(number1,number2){
    let result = (number1+number2);
    return result;
}
const result = addTeoNumbers(3,4)

console.log(result);


function loginUserName(username){
    if(username == undefined){
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserName())