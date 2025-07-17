const person={
    name:'John Cena',
    age:30,
    hobbies:['cooking','playing'],
    role:[2,'author']
};
person.hobbies.push('writing','sleeping')
person.role.push('admin');
person.role[1]=10;
person.role.push('book')

let favouriteActivities:string[];
favouriteActivities=['Sports'];
console.log(person.name,person.hobbies,person.age,person.role)

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}