let valores = [8, 1, 2, 7, 4, 2, 9]
valores.sort() // Ordenar em ordem crescente (1, 2, 2, 4, 7, 8, 9)

/* // Utilizando a repetição "for" tradicional:

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


// Utilizando a repetição "for" de maneira simplificada de acordo com uma das versões mais atuais do ECMA:

for (pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}