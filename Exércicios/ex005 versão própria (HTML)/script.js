function gerar() {
    let numb = document.getElementById('vnumb') // número
    let res = document.getElementById('res') // resultado

    if (numb.value.length == 0) { // se o campo do número estiver vazio
    alert('Insira um número válido!')
    } else {
        n = Number(numb.value) // sempre converter o valor do número para "type number"
        res.innerHTML = ('') // zerar o campo HTML

        for (m = 1; m <= 10; m++) { // m é a variável de multiplicador, enquanto m é menor que 10, irá adicionar + 1 na variável
            res.innerHTML += (`${n} x ${m} = ${n*m} <br>`) // não esquecer do sinal "+=" para escrever várias linhas, sinal de "=" irá atribuir a 1 linha única.
        }
    } 
}