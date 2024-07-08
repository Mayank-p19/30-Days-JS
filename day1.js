// Functions and Implementations
// Array Methods - Filter,Find, include, map, forEach, slice, splice
// How to iterate in array - for, forEach, map
// Map and methods, Object and its methods

// Function definition
// function HelloWorld(){
//     console.log("hello World");
// }

// const HW = () => {
//     console.log("hello World");
// }

// const hw = function(){
//     console.log("hello World");
// }

// // Function calling
// HelloWorld();
// hw();
// HW();


// Array Methods
// const arr = [1,3,5,7,8,2,4,6];

// const result = arr.filter((item) => {
//     return (item%2 == 0);
// });

// console.log(result.sort());

// const find = arr.find((item) => {
//     return (item == 3);
// });

// console.log(find);

// console.log("12" == 12);
// console.log("12" === 12);

// console.log(arr.includes(10));

// const map = arr.map((item) => {
//     return item*2;
// });

// console.log(map);

// arr.forEach((number) => {
//     console.log(number);
// });

// const numbers = [1, 2, 3, 4, 5];

// // Double the numbers, then filter out the ones greater than 5
// const result1 = numbers
//   .map(number => number * 2)
//   .filter(number => number > 5);

// console.log(result1);

// const res = numbers.map(number => number * 2);
// const fres = res.filter(number => number > 5);
// console.log(fres);

// const mArr = [...numbers];

// console.log(mArr);

// console.log(numbers.slice(2, 4), numbers);

// console.log(numbers.splice(2), numbers);

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet: function () {
//         console.log('Hello!');
//     }
// };

// person.greet = function () {
//     console.log('Hello!');
// }

// person.greet();

// Function Declaration
// function greet(name){
//     return `Hello ${name}`;
// }
// console.log(greet("Mayank"));

// // Function Expression
// const add = function(a, b){
//     return a + b;
// }
// console.log(add(2,4));

// // Arrow Function
// const greet3 = (name) => {
//     return `Hello ${name}`;
// }
// console.log(greet3("Mayank"));

// // Immediately Invoked Function Expression
// (function(name){
//     console.log(`Hello ${name}`)
// })("Mayank");

// ARRAYS
// const nums = [2,6,9,0,74,2,46,18];

// for(let i=0; i<nums.length; i++){
//     console.log(`Element at index ${i} = ${nums[i]}`);
// }

// const push = nums.push(26); // Push method
// console.log(push); 
// for(let i=0; i<nums.length; i++){
//     console.log(`Element at index ${i} = ${nums[i]}`);
// }

// const unshift = nums.unshift(1); // Unshift method
// console.log(unshift); 
// for(let i=0; i<nums.length; i++){
//     console.log(`Element at index ${i} = ${nums[i]}`);
// }

// const pop = nums.pop(); // Pop method
// console.log(pop); 
// for(let i=0; i<nums.length; i++){
//     console.log(`Element at index ${i} = ${nums[i]}`);
// }

// const shift = nums.shift() // Shift method
// console.log(shift); 
// for(let i=0; i<nums.length; i++){
//     console.log(`Element at index ${i} = ${nums[i]}`);
// }

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

  const filterAge  = people.filter(person => person.age > 30);
  console.log(filterAge);

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
  const findId = users.find(person => person.id == 2);
  console.log(findId);