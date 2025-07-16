//mapping
const arr=[45,65,66,5,51,-1,-90]
const a=arr.map((value,index,array)=>{
    console.log(value+index+array);
    return value*index;
})
console.log(a);


//filter

const b=arr.filter((element)=>{
    if(element>50 ){
        return element *= 2;
    }else{
        return 0;
    }
})
console.log(b);

//sort
const two=arr.sort((a,b)=>a-b);
console.log(two);

//reduce method

const prices = [5, 10, 25, 45, 100];
const reversedPrices = prices.slice().reverse(); // slice() to avoid mutating original

const total = reversedPrices.reduce((accumulator, element,) => {
  return accumulator +element;
}, 0);

console.log(total.toFixed(3));


const maximum=prices.reduce((acc,el)=>{
    return Math.min(acc,el);
})


const minimum=prices.reduce((acc,el)=>{
    return Math.max(acc,el);
})


console.log(minimum/100);

console.log(maximum/100);



const arr0=["hari","sita","ram","gopal"];
const greeting=arr0.map((name)=>{
    return `Hello ${name}!`
})
console.log(greeting);

//reduce
const dash=arr0.reduce((acc,name)=>{
    return acc + " " + name;
})
console.log(dash);


const totalChars = arr0.reduce((acc, name) => acc + name.length, 0);
console.log(totalChars);



//using both map and reduce 
const numbers=[1,2,3,4,5,6,7,8,9,9];

const doubled=numbers.map((num)=>{
    return num*2;
})

const sum=doubled.reduce((acc,n)=>{
    return acc;
})



console.log(doubled,sum);

const name=["hari","kumari","pandey"];
const result=name.map((element)=>{
    element.toUpperCase();
});
const anotherResult=result.reduce((acc,name)=>{
    return  acc + "-" + name; 
})
console.log(anotherResult)


