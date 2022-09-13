const prompt = require('prompt-sync')()

const valor1String = prompt('Digite o primeiro valor:')
const valor1 = Number(valor1String)

const valor2String = prompt('Digite o segundo valor:')
const valor2 = Number(valor2String)

const valor3String = prompt('Digite o terceiro valor:')
const valor3 = Number(valor3String)

if (valor1 > valor2 && valor1 > valor3){
    console.log(`O maior número digitado foi ${valor1}`)
} else if (valor2 > valor1 && valor2 > valor3){
    console.log(`O maior valor digitado foi ${valor2}`)
} else if (valor3 > valor1 && valor3 > valor2){
    console.log(`O maior valor digitado foi ${valor3}`)
}