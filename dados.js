let dado1 = parseInt(Math.random() * 6 + 1)
let dado2 = parseInt(Math.random() * 6 + 1)

dado1 = 2
dado2 = 2

let contador = 1

while(dado1 !== dado2){
    console.log(dado1, dado2)
    contador++
    dado1 = parseInt(Math.random() * 6 + 1)
    dado2 = parseInt(Math.random() * 6 + 1)
}
console.log("Os dados foram jogados " + contador + " vezes. E o número repetido foi o " + dado1)

console.log("-------------")

    dado1 = parseInt(Math.random() * 6 + 1)
    dado2 = parseInt(Math.random() * 6 + 1)
    contador = 1

    dado1 = 2
    dado2 = 2

    do{
        console.log(dado1, dado2)
        contador++
        dado1 = parseInt(Math.random() * 6 + 1)
        dado2 = parseInt(Math.random() * 6 + 1)
    } while(dado1 !== dado2)

    console.log("Os dados foram jogados " + contador + " vezes. E o número repetido foi o " + dado1)

