const numberString = prompt('Digite um valor:')
const number = Number(numberString)

numberRoot = Math.sqrt(number)
numberCube = Math.pow(number, 2)
numberPair = number % 2

if (numberPair == 0){
    console.log(`O número digitado é Par, e sua raiz quadrada é ${numberRoot}`)
} else {
    console.log(`O número digitado é ímpar e elevado ao quadrado é ${numberCube}`)
}