/*
RECURSIVIDADE!
- A função possui uma chamada pra dentro dela mesma.
- Dentro dela da própria função, há uma chamada para a mesma função dentro do bloco.
- Este método é chamado de RECURSIVIDADE, alternativa ao método do exercício anterior.
*/

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/* 
5! = 5 * 4 * 3 * 2 * 1 = fatorial de 5
5! = 5 * 4! = fatorial de 5 simplificada

n! = n * (n-1)!
1! = 1
*/