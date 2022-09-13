const idadeString = prompt('Digite sua idade:')
const idade = Number(idadeString)

if (idade >= 10 && idade <= 14) {
    console.log('Você pertence a categoria Infantil.')
} else if (idade >= 15 && idade <= 17) {
    console.log('Você pertence a categoria Juvenil.')
} else if (idade >= 18 && idade <= 25) {
    console.log('Você pertence a categoria Adulto.')
}