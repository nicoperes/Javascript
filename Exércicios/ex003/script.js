function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] IDADE INVÁLIDA!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'kid-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'yg-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'ad-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'old-m.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'kid-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'yg-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'ad-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'old-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gen} com ${idade} anos!`
        res.appendChild(img)
    }

}