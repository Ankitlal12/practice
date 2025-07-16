const arr=[5,1,3,5];
const x=arr.map(element=>element*2);
console.log(x)

const y=x.map(element=>element**2);
console.log(y)

const binary=arr.map(element=>element.toString(2))
console.log(binary)

const a=arr.filter((element)=>{
    if(element){
        return element +=2;
    }
})
console.log(a)


const arr1=[5,2,3,5,6,7]
const output=[...new Set(arr1)].filter((x)=>{
    return x>4
}).reverse().join("-");
console.log(output);


const v= arr1.reduce((acc,curr)=>{
    acc=acc + curr;
    return acc
})
console.log(v)

const c=arr1.reduce((acc,curr)=>{
   return curr>acc?curr:acc
},0)
console.log(c)



const users=[
    {firstName:"ankit",lastname:"lal",age:20},
    {firstName:"hari",lastname:"yadav",age :27},
    {firstName:"raghav",lastname:"rai",age:23}
]
const input=users.map((x)=>x.firstName + " " + x.lastname);
console.log(input)

const d=users.reduce((acc,curr)=>{
    if( acc[curr.age]){
        acc[curr.age]+=1
    }
    else{
        acc[curr.age]=1;
    }
  return  acc;
},{})
console.log(d)


const z=users.filter((x)=>{
     return x.age<=25
}).map((x)=>x.firstName + " " + x.lastname).reverse()
console.log(z)

const i=Math.min(...arr1)
console.log(i)

const w=arr1.map((element)=>{
    return Math.pow(3,4)
})
console.log(w)

const q=users.map((element)=>{
    return element.firstName.toUpperCase() + " " +element.lastname.toLowerCase() + "  ";
}).join(" ")
console.log(q)



const processData=((data)=>let)

const message = "Hey Ankit";