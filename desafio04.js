let n1 = parseFloat(prompt("Digite um número de 0 a 10"))
let n2 = parseFloat(prompt("Digite outro número de 0 a 10"))
let media = (n1 + n2) / 2

if(n1 > 10 || n2 > 10){
    alert("Digite números menores que 10")
}
else{
    if(n1 < 0 || n2 < 0){
        alert("Digite números maiores que 0")
    }
    else{
        if(isNaN(n1) || isNaN(n2)){
            alert("Digite apenas número")
        }
        else{
            if(media >= 4){
                alert("Aprovado")
        
            }
            else{
                alert("Reprovado")
            }
        }
    }
}