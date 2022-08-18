function newFunction(name, age, country) {
  var name = name || "Dave";
  var age = age || 31;
  var country = country || "BO";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "Dave", age = 31, country = "BO") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Gonzalo", 30, "AR");

let hello = "Hello";
let world = "World";
let greeter = hello + " " + world;

let epicPhrase = `${hello}  ${world}`;
console.log(epicPhrase);

let lorem = "lorem djskla jdskla jdskla jdskla jdksla jdksla jdkslaj dksla";

// es6
let lorem2 = `lorem djskla jdskla jdskla jdskla jdksla jdksla jdkslaj dksla`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "dave",
  age: "31",
  country: "BO",
};

console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name);

let team1 = ["Dave", "Chipi", "Ricardo"];
let team2 = ["Maria", "Yesica", "Camila"];

// spred syntax
let education = ["David", ...team1, ...team2];

console.log(education);

{
  var globalVar = "global var";
}

{
  let globalLet = "global let";
  console.log(globalLet);
}
console.log(globalVar);

var a = 'b' // const no permite cambiar el valor de la variable o constante
a = 'a'
console.log(a);

let nameA = 'Dave'
let ageA = 31

// es5
obj = { name: nameA, age: ageA}

// es6
obj2 = { nameA, ageA }

console.log(obj2);

// arrow function
const names = [
    {name: 'Dave', age: 31},
    {name: 'Ivon', age: 50}
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num

// promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!')
        } else {
            reject('Ups!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error))

// Clases, módulos y generadores
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator()
console.log(calc.sum(2, 2));

// modulos

import hello from './module';

hello();

console.log(hello);

// generators
function* helloWorld() {
    if (true) {
        yield 'Hello, '; // yield permite retornar algo guarda el estado de forma interna
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);