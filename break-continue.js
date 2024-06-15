for(let i = 1; i < 10; i++){
    console.log(i)
    if(i === 5){
        break
    }
}
console.log("Fim do loop com break")

for(let i = 1; i < 10; i++){
    if(i === 5){
        continue
    }
    console.log(i)
}
console.log("Fim do loop com cotinue")

console.log("começando")

console.log("--------- loop while")

let x = 1
while(x < 10){
    console.log(x)
    if(x === 5){
        break
    }
    x++
}
console.log("Fim do loop while com break")


x = 1
x = 1
while(x < 10){
    console.log(x)
    if(x === 5){
        x++
        continue
    }
    x++
}
console.log("Fim do loop while com break")