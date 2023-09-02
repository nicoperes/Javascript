function gerar() {
    let numb = document.getElementById('vnumb') // número
    let tab = document.getElementById('stab') // resultado

    if (numb.value.length == 0) { // se o campo do número estiver vazio
    alert('Insira um número válido!')
    } else {
        n = Number(numb.value) // sempre converter o valor do número para tipo number
        tab.innerText = '' // zerar o campo
        for (m = 1; m <= 10; m++) { // m é a variável de multiplicador, enquanto m é menor que 10, irá adicionar + 1 na variável
            let item = document.createElement('option') // cria uma nova "option"
            item.text = `${n} x ${m} = ${n*m}` // não esquecer do sinal "+=" para escrever várias linhas, sinal de "=" irá atribuir a 1 linha única.
            //item.value = `tab${m}` // setar valor para cada resultado, não é útil em JS mas em outras linguagens sim 
            tab.appendChild(item) // irá adicionar o texto setado no código acima para exibir no HTML
        }
    } 
}