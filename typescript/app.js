var person = {
    name: 'John Cena',
    age: 30,
    hobbies: ['cooking', 'playing'],
    role: [2, 'author']
};
person.hobbies.push('writing', 'sleeping');
person.role.push('admin');
person.role[1] = 10;
person.role.push('book');
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.name, person.hobbies, person.age, person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
