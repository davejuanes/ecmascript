let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat(2));

let array1 = [1,2,3,4,5]

console.log(array1.flatMap(value => [value, value*2]));

let hello = '          hello world'

console.log(hello);
console.log(hello.trimStart());

let hello1 = 'Hello World     '
console.log(hello1);
console.log(hello1.trimEnd());

let hello2 = '    Hello World     '
console.log(hello2);
console.log(hello2.trim());

try {

} catch { // ya no es necesario enviar la variable (error)
    error    
}

let entries = [["name", "oscar"], ['age', 31]]

console.log(Object.fromEntries(entries))

let mySymbol = `My symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)