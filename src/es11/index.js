const button = document.getElementById('btn')

button.addEventListener('click', async function () {
    const module = await import('./file.js')
    module.hello()
})

// Big number
const aBigNumber = 9007199254740991n

const anotherBigNumber = BigInt(9007199254740991)

console.log(aBigNumber);
console.log(anotherBigNumber);

// promise

const promise1 = new Promise((resolve, reject) => reject('reject'))
const promise2 = new Promise((resolve, reject) => resolve('resolve'))
const promise3 = new Promise((resolve, reject) => resolve('resolve1'))

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))

console.log(windows)
console.log(globalThis)

// Operador NULO o UNDEFINED

const fooo = null ?? 'default string'
console.log(fooo);

// Optional chaining operator (?.)
const user = {} 
console.log(user?.profile?.email); // le dice a la aplicacion que no se rompa el codigo si algo falla

if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
}
