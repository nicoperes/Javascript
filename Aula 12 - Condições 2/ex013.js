agora = new Date()
var diasemana = agora.getDay()
/*
0 - DOMINGO
1 - SEGUNDA
2 - TERÇA
3 - QUARTA
4 - QUINTA
5 - SEXTA
6 - SÁBADO
*/
switch (diasemana){
    case 0:
        console.log(`HOJE É DOMINGO!`)
        break
    case 1:
        console.log(`HOJE É SEGUNDA!`)
        break
    case 2:
        console.log(`HOJE É TERÇA!`)
        break
    case 3:
        console.log(`HOJE É QUARTA!`)
        break
    case 4:
        console.log('HOJE É QUINTA!')
        break
    case 5:
        console.log('HOJE É SEXTA!')
        break
    case 6:
        console.log('HOJE É SÁBADO!')
        break
    default:
        console.log('[ERROR] DIA INVÁLIDO [ERROR]')
        break
}
