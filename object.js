// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value};

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const HY = {name: 'HY', age: 4};
print(HY);

// with JavaScript magic (dynamically typed language)
// can add properties later
HY.hasJob = true;
console.log(HY.hasJob);

// can delete properties later
delete HY.hasJob;
console.log(HY.hasJob);

// 2. Computed properties
// ket should be always string
console.log(HY.name);
console.log(HY['name']);
HY['hasJob'] = true;
console.log(HY.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(HY, 'name');
printValue(HY, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'david', age: 4};
const person4 = new Person('HY', 5);
console.log(person4)

// 4. Constructor function
function Person(name, age) {
    // this {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in HY);
console.log('age' in HY);
console.log('random' in HY);
console.log(HY.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for(key in HY) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,4,5];
for (value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'HY', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}

console.clear();
console.log(user3);