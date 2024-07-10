// const target = {a: 1, b: 2};            // Object assign method
// const source = {c: 3, d: 5};
// const returnedTarget = Object.assign(target, source);
// console.log(target);
// console.log(returnedTarget);

// const person = {
//     isHuman: false,
//     printIntroduction: function(){
//         console.log(`My name is ${this.name}. Am i human? ${this.isHuman}`);
//     }
// }

// const me = Object.create(person);       // Object create method

// me.name = 'Mayank';
// me.isHuman = true;

// me.printIntroduction();

const object1 = {
    prop: 'exists',
  };
  
  console.log(Object.hasOwn(object1, 'prop'));

  console.log(Object.hasOwn(object1, 'toString'));
  
  console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));

  console.log(Object.is('1', 1));

  console.log(Object.is(NaN, NaN));

  console.log(Object.is(-0, 0));

  const obj = {};
  console.log(Object.is(obj, {}));
 