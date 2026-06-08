//
//agar fn variable me store h to declaration se phle call ni ho skta
function one(){
    const username = "hitesh"

    function two(){
        const website = "Youtube"
        console.log(username);
        console.log(website);
    }
   
}
one(); 


if(true){
    const username = "HarshSingh"
    if(username === "HarshSingh"){
       const website = "youtube"
       console.log(username+website);

    }

}

//two types of fn decl
console.log(addone(3))
function addone(num){
    return 1+num;
}

const addtwo=function(num){
    return num+2;
}
console.log(addtwo(3))