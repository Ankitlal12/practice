const test2 = [1, 2, 3, 4, 4, 5,5,5];
const counts = {};
const duplicates = [];

test2.forEach(num => {
 
  counts[num] = (counts[num]||0 ) + 1;
  

  if (counts[num] === 3) {
    duplicates.push(num);
  }
});

console.log(duplicates); 

const r= aiad[1,2,4,5,6]
const  wi= aiad.map((element)=>{
    return element.toString(2);
})
console.log(wi)

const test=[1,2,3,4]
const w=test.map(num=>num+3);
console.log(w);


const test3=[1,1,1,2,3,4,4,4,4,5,5,5,2]
const vr={};
const ab=[];
test3.forEach((num,idx)=>{
    vr[num]=(vr[num]|| 0)+1;
    if(vr[num]===2){
        ab.push(num);
    }
});
console.log(ab);
console.log(ab.sort((a,b)=>a-b))


const test4 = [1,1,1,2,3,4,4,6,6,7,8,4,4,4,5,5,5,2];
const a = {};

const b = test3.filter(num => {
  a[num] = (a[num] || 0) + 1;
 
});
console.log(a);
console.log(test4.sort((a,b)=>a-b))

const noFour=test4.filter(num=>num!==4 && num!==6);
console.log(noFour)