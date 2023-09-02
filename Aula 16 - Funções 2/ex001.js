function parimp(n) { // a variável "n" vai ser o parâmetro modelo utilizado.
    if (n%2==0) { // para verificar se o número é par, é utilizado o calculo do restante da divisão de 2, se for 0 é par, se não for, é impar.
        return 'par' // irá retornar o valor string 'par'.
    } else {
        return 'impar' // irá retornar o valor string 'impar'.
    }
}

console.log(parimp(11))  // a chamada para testar o valor de parâmetro "11" para verificar se é número impar ou par (no caso, vai retornar o valor "impar").