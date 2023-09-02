let num = [5, 8, 2, 9, 3]
num.sort() // organiza todos os valores em ordem crescente
num.push(1) // neste comando será adicionado o valor "1" na última key da variável
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) // pesquisa se há o valor 5
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}