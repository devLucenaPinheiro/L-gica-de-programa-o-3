let dado1 = parseInt(Math.random() * 6 + 1)
let dado2 = parseInt(Math.random() * 6 + 1)

let contador = 0

while(dado1 + dado2 !== 10){
    contador++
    console.log("O valor dos dados foi: " + dado1 + dado2 )
}
console.log("Foram necessárias: " + contador + " Vezes para que a soma dos 2 dados dessem 10")