
// //making square
// const number=[1,2,3,4];
// const square=number.map(x=>x**2);
// console.log(square)


// const numbers=[1,3,4,5,6];
// const squares=numbers.map(sq);
// function sq(element){
//    return  Math.pow(element,2)
// }
// console.log(squares);

// //uppercase
// const student=["john","randy","ram","hari"];
// const uppercaseStudent=student.map(uppercase);

// function uppercase(element){
//    return element.toUpperCase();
// }
// console.log(uppercaseStudent);


// //lowercase
// const hello=["JOHN","RANDY","RAM","HARI"];
// const lowercases=hello.map(lowercase);
// function lowercase(element){
//    return element.toLowerCase();
// }
// console.log(lowercases);


// const hi=hello.map(element=> element.toLowerCase());
// console.log(hi);

// //split method
// const dates=["ankit-lal-shrestha","anish-lal-shrestha","anil-lal-shrestha"];
// const splited=dates.map(spliting);
// function spliting(element){
//     const parts=element.split("-");
//     return `${parts[0]}/${parts[1]}/${parts[2]}`;
// }
// console.log(splited);

// const sp=dates.map((element)=>{
//     const part=element.split("-");
//     return `${part[2]}/${part[0]}/${part[1]}`
// });
// console.log(sp)


// const p=dates.map((element)=>{
//     const partss=element.split("-");
//     if(partss[0]=="anish"){
//         return `${partss[2]}.${partss[0]}.${partss[1]}`
//     }
//     else if(partss[0]=="anil") {
//         return `${partss[0]}!${partss[1]}!${partss[2]}`;
//     }
//     else{
//         return `${partss[0]}/${partss[1]}/${partss[2]}`;
//     }
// })
// console.log(p);


// const h=[1,2,3,4,5]
// const pi=
//     h.map(i=>i+3)

// console.log(pi)


// const arr=[5,1,3,2,6]
// const pie=arr.map(num=>num*2)
// console.log(pie)

// const ie=arr.map(num=>num**2)
// console.log(ie)

// const e=ie.filter((element)=>{
// //     // if(element>=3){
// //     //     return  element*3
// //     // }else{
// //     //     element
// //     // }

// //    return element > 3 ? element *3 : ele 

// return element > 3
// }).map((item)=> item* 3)


// const y = ie.map((i)=> i>3 ? i*3 : i)
// console.log(e)

// console.log(y)
// y.forEach(x => console.log(x - 1));


// // console.log("aftermodified",o)


const numbers = [1, 2, 3, 4];
const evens = [];

numbers.forEach(num => {
  if (num % 2 === 0) {
    evens.push(num);
  }
});

console.log(evens); // [2, 4]

const i = numbers.map((n)=> 
    (n+2))
console.log(i)