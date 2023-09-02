function carregar() {
var msg = document.getElementById('msg')
var msg2 = document.getElementById('msg2')
var img = document.getElementById('img')
var hora = new Date().getHours()
msg.innerHTML = `Agora são ${hora} horas!`
if (hora >= 0 && hora < 12){
    // BOM DIA
    img.src = 'manha.png'
    document.body.style.background = '#DDB27A'
    msg2.innerHTML = "<strong>BOM DIA!</strong>"
} else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#E7DED7'
    msg2.innerHTML = "<strong>BOA TARDE!</strong>"
} else {
    // BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#18354E'
    msg2.innerHTML = "<strong>BOA NOITE!</strong>"
    }
}