n1 = parseFloat(prompt("Acerte o número! Digite um número de 0 a 10 e veja se acertou"))

if(n1 > 10){
    alert("Digite um número menor que 10")
}else if(n1 < 0){
    alert("Digite um número maior que 0")
}
 else if(isNaN(n1)){
    alert("Digite apenas números")
 }
 else if(n1 == 9){
    alert("Você acertou o número!")
 }
 else{
    alert("Tente novamente")
 }
 