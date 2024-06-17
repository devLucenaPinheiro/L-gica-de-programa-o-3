let quantasVezesFoiJogado = 0
let quantasVezesFoiPar = 0

while(true){
    let dado1 = parseInt(Math.random() * 6  + 1)
    let dado2 = parseInt(Math.random() * 6  + 1)

    console.log(dado1, dado2, quantasVezesFoiJogado, quantasVezesFoiPar)
    quantasVezesFoiJogado++

    if((dado1 + dado2) % 2 === 0){
        quantasVezesFoiPar++
    }

    if(quantasVezesFoiPar >= 10){
        break
    }
    
    if(dado1 == dado2){
        quantasVezesFoiPar--
    }
}

console.log("Os dados foram jogados: " + quantasVezesFoiJogado + " vezes!")