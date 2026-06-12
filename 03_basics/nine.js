//reduce

const myNums =[1,2,3];

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`accumulator is ${acc} and currval is:${currval}`);
//     return acc+currval
// },3)

// const myTotal = myNums.reduce( (acc,curr) => curr+acc,0)
// console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 5999
    },
     {
        itemName: "js course",
        price: 5999
    },
     {
        itemName: "py course",
        price: 999
    },
     {
        itemName: "mobdev course",
        price: 5999
    },
     {
        itemName: "ds course",
        price: 15999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc +item.price,0)

console.log(priceToPay);