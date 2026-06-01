const marvel_heros = ["thor","Ironman","spide"]
const dc=["sup","flash","batman"]

// marvel_heros.push(dc);

// console.log(marvel_heros)
// console.log(marvel_heros[3][2]

// const allHeros = marvel_heros.concat(dc);
// console.log(allHeros);

// const all_new_Heros = [...marvel_heros,...dc];
// console.log(all_new_Heros)

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_Array = another_Array.flat(Infinity)
console.log(real_another_Array)




console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

//interseting case
console.log(Array.from({name :"Hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))