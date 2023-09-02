function fatorial(n) { // função para calcular fatorial
    let fat = 1
    for(let c = n; c > 1; c--) { // contador(c) começa em n(parâmetro), enquanto o contador for maior que 1, irá subtrair -1
        fat *= c // enquanto o contador for maior que 1(true), a var "fat" irá multiplicar até o contador ser menor que 1(false)
    }
    return fat // quando chegar em false, irá retornar o fat
}

console.log(fatorial(5)) // exibe o fatorial do parâmetro 5

/*
esse script irá reproduzir a operação aritmética abaixo:
5! = 5 x 4 x 3 x 2 x 1 = 120
*/