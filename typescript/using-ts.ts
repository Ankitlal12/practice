const button = document.querySelector("button") ! as HTMLInputElement;
const input1=document.getElementById("num1") ! as HTMLInputElement;
const input2=document.getElementById("num2") ! as HTMLInputElement;

function sum(num1,num2){
    return num1+num2;
}
button.addEventListener("click",function(){
    console.log(sum(input1.value,input2.value));
})

// const sum = (num1, num2) =>  {
//     if(typeof num1=="number" && typeof num2=="number"){
//     return  num1 +num2}
//     else{
//         return +num1 + +num2;
//     }
// };

// button.addEventListener("click", () => {
//     console.log(sum(input1.value, input2.value));
// });

