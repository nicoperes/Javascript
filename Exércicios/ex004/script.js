function contar() {
    let inicio = document.getElementById('v_inicio')
    let fim = document.getElementById('v_fim')
    let passo = document.getElementById('v_passo')
    let res = document.getElementById('res')
    res.innerHTML = ('') // Resetar o campo da resolução

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) { // Se algum campo ficou vazio
        window.alert('Preencha todos os campos corretamente!')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) { // Se colocar na box do passo o valor 0
            p = 1
            alert('Valor do passo incorreto! convertendo o valor igual a 1...')
        }

        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem Decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }

    res.innerHTML += `\u{1F3C1}`

    }
}