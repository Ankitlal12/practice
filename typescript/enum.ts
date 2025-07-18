// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string]
// }={
//     name:'John Cena',
//     age:30,
//     hobbies:['cooking','playing'],
//     role:[2,'author']
// };

// const ADMIN=0;
// const READ_ONLY=1;
// const AUTHOR=2;

enum Role {ADMIN=5,READ_ONLY=40,author=54};

const person ={
    name:'John Cena',
    age:30,
    hobbies:['cooking','playing'],
    role:Role.author
};

 
// person.hobbies.push('writing','sleeping')
// person.role.push('admin');
// //person.role[1]=10;
// person.role.push('book')

let favouriteActivities:string[];
favouriteActivities=['Sports'];
console.log(person.name,person.hobbies,person.age,person.role)

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}
if(person.role===Role.author){
    console.log('is author')
}