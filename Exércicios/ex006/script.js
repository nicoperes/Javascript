let num = document.getElementById('vnum') // número do valor
let campo = document.getElementById('snum') // campo select
let res = document.getElementById('res') // div onde ficará o resultado
let v = [] // setar o array na qual os valores vão ser inseridos
let soma_v = 0 // a soma de todos os valores do array que serão somados conforme abaixo

function adicionar(){
    n = Number(num.value) // converter o "num" em uma variável numérica na qual será "n"
    if (n >= 1 && n <= 100){ // número entre 1-100 (&& = true/true)
        if(soma_v != 0){
            limpar()
            soma_v = 0
        }
        v.push(n) // adicionar o valor para o último índice, entre parenteses é o valor em si
        let item = document.createElement('option') // criar um "option" para o "select"(var campo)
        item.text += `Valor ${n} adicionado!` // texto armazenado na option
        campo.appendChild(item) // irá exibir o texto armazenado
    } else {
        alert('Número incorreto! Digite um número entre 1 e 100.')
    }
    num.value = ''
    num.focus()
}

function limpar(){ // botão para limpar os valores e o texto
    v = []
    campo.innerText = ''
    res.innerHTML = ''
}

function finalizar(){
    if (v.length == 0){ // caso não armazene nenhum valor
        alert('Não há valores suficientes armazenados! Adicione números entre 1 e 100.')
    } else{
        v.sort((a,b)=>a-b) // organizar os valores dos indices em ordem crescente (parametros para definir como ordem numérica, não por casas decimais (ex: 1,2,22,3,4,47,5))
        res.innerHTML = ''
        res.innerHTML += `<p>Números cadastrados: ${v.length}</p>` // "v.length" é para saber quantos indices o array possui
        res.innerHTML += `<p>Maior Número: ${v[v.length - 1]}</p>` // "v[ ]" é para saber qual o valor que esta dentro do indice ("[]"), como está em ordem crescente, o maior valor vai estar no último indice menos 1, pois o indice "0" é considerado o primeiro.
        res.innerHTML += `<p>Menor Número: ${v[0]}</p>` // selecionar o primeiro indice ("0")
        if (soma_v == 0){
            for (let i = 0; i < v.length; i++) { // repetição para calcular a soma de todos os valores dentro do array
                soma_v += v[i] // enquanto o i for menor que o número de indices do array, ele irá adicionar um por um o indice selecionado pelo numero de i's
            }
        }
        res.innerHTML += `<p>Soma de todos os números: ${soma_v}</p>` // irá exibir a soma
        if (v.length == 1){
            res.innerHTML += `<p>Média da soma: ${soma_v}</p>`
        } else {
            let media_v = soma_v / v.length
            res.innerHTML += `<p>Média da soma: ${media_v.toFixed(2)}</p>` // irá dividir o valor da soma com o número de indices do array para calcular a media
        }
    }
}