const obj = {
    name: 'oscar',
    age: 31,
    country: 'BO'
}

let {country, ...all} = obj
console.log(all);

const obj = {
    name: 'Dave',
    age: 32,
}

const obj1 = {
    ...obj,
    country: 'BO'
}

console.log(obj1);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello WOrld'), 3000)
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo')) // permite ejecutar un bloque de codigo segun sea el caso


const regexData = /([0-9]{4})-([0-9]{2}-([0-9]{2}))/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);