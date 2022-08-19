// replace all
const string = 'Javascript es maravilloso, con Javascript puedo crear el futuro de la web'

const replacedString = string.replace('Javascript', 'Python')

console.log(replacedString);

const replacedString2 = string.replaceAll('Javascript', 'Python')

console.log(replacedString2);

class Message {
    #show(val) { // # este metodo ahora es privado
        console.log(val)
    };
    get #add(val) {
        ...
    }
}

const message = new Message();
message.show('Hola!')

// Promise any, devuelve el primer valor que se resuelve entre las promesas
const promise1 = new Promise((resolve, reject) => reject('1'))
const promise2 = new Promise((resolve, reject) => resolve('2'))
const promise3 = new Promise((resolve, reject) => resolve('3'))

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))

// WeakRef
class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element) //te permite crear una referencia débil a un objeto para no prevenir que se destruya por el Garbage Collector de JavaScript
    }
    // {...}
}

// Nuevos Operadores Logicos, estos operadores siempre van de izquierda a derecha

let isTrue = true
let isFalse = false
console.log(isTrue &&= isFalse); // Es verdadero solo si la condicion de la izquierda es verdadera

let isTrue = true
let isFalse = false
console.log(isTrue ||= isFalse); // Es falso solo si la condicion de la izquierda es falsa

let isTrue = undefined
let isFalse = false
console.log(isTrue ??= isFalse);