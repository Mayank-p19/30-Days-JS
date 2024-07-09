const target = {a: 1, b: 2};            // Object assign method
const source = {c: 3, d: 5};
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);

const person = {
    isHuman: false,
    printIntroduction: function(){
        console.log(`My name is ${this.name}. Am i human? ${this.isHuman}`);
    }
}

const me = Object.create(person);

me.name = 'Mayank';
me.isHuman = true;

me.printIntroduction();