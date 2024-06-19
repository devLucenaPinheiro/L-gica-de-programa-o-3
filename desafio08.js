for(let i = 0; i <= 100; i++){
    if(i % 10 === 0){
        continue
    }
console.log(i)
let sorteio = parseInt(Math.random() *100) + 1

    if(i % sorteio === 0){
        break
    }
    console.log("sorteio: ", sorteio)
}