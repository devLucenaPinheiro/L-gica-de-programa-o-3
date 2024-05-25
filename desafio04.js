let n1 = parseFloat(prompt("Digite um número de 0 a 10"))
let n2 = parseFloat(prompt("Digite outro número de 0 a 10"))
let media = (n1 + n2) / 2

if(n1 > 10 || n2 > 10){
    alert("Digite números menores que 10")
}
else{
    if(media >= 4){
        alert("Aprovado")

    }
    else{
        alert("Reprovado")
    }
}