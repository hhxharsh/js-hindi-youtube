//Date

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
// // console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.round(Date.now()/1000));
let myDate = new Date()
console.log(myDate)
console.log(myDate.getTime());
console.log(myDate.getMonth()+1);

let newDate=myDate;

console.log(`${newDate.getDay()} and the time is ${newDate.getHours()}`);

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:'Asia/Kolkata'

})