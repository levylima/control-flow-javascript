const prompt = require('prompt-sync')()

const value1String = prompt('Digite o primeiro valor:')
const value1 = Number(value1String)

const value2String = prompt('Digite o segundo valor:')
const value2 = Number(value2String)

const value3String = prompt('Digite o terceiro valor:')
const value3 = Number(value3String)

if (value1 < value2 && value1 < value3 && value2 < value3){
    console.log(`A ordem crescente dos valores é ${value1}, ${value2}, ${value3}`)
} else if (value1 < value2 && value1 < value3 && value3 < value2){
    console.log(`A ordem crescente dos valores é ${value1}, ${value3}, ${value2}`)
} else if (value2 < value1 && value2 < value3 && value1 < value3){
    console.log(`A ordem crescente dos valores é ${value2}, ${value1}, ${value3}`)
} else if (value2 < value3 && value2 < value1 && value3 < value1){
    console.log(`A ordem crescente dos valores é ${value2}, ${value3}, ${value1}`)
} else if (value3 < value1 && value3 < value2 && value1 < value2){
    console.log(`A ordem crescente dos valores é ${value3}, ${value1}, ${value2}`)
} else if (value3 < value2 && value3 < value1 && value2 < value1){
    console.log(`A ordem crescente dos valores é ${value3}, ${value2}, ${value1}`)
} 