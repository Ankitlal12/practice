function sum(n1:number,n2:number,showResult:boolean,phrase:string){
//   if(typeof n1 !=='number' || typeof n2 !=='number'){
//     throw new Error('incorrect input!');
//   }
const result=n1+n2;
    if(showResult){
        console.log(phrase+result)
    }else{
    return result;
}}


let number1:number;
number1 =5;
const number2=2.2;
const printResult=true;
let resultPhrase='result is:';

sum(number1,number2,printResult,resultPhrase);



