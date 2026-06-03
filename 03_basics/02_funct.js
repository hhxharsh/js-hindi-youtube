//add to cart me kitne 

//abhi k liye  rest operator or spread operator
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(100,2000,300,400));

const user = {
    username:"hitesh",
    price:999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    user:"sayMyName",
    price:9999
})

const myNewArray = [100,200,30,990,500]
function returnSecondValue(getArray){
      return getArray[1]
} 

console.log(returnSecondValue([200,300,4000]))