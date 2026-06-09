//Immediately Invoked Function Expression(IIFE)

(function chai(){
    //NAMED IIFE
console.log(`DB CONNECTED`);
}) ();
//global scope ke variable ya declarn ke polln ko hatane k lie iife ka use kiya hai

(  (NAME) => {
    console.log(`DB CONNECTED TWO ${NAME}`)
}) (`HARSH`)

