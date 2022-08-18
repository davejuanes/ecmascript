const data = {
    frontend: 'Dave',
    backend: 'Chipi',
    design: 'María',
}

const entries = Object.entries(data)
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Dave',
    backend: 'Chipi',
    design: 'María',
}

const values = Object.values(data)
console.log(values);
console.log(values.length);

const string = 'Hello'
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' World'));
console.log('foot'.padEnd(12, ' ---'));

const obj = {
    name: 'Dave', // traeling coma
}

// Async - await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello);
}

helloAsync()

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction()