let n = parseFloat(prompt("Digite um número"))
let contador = 0

if(isNaN(n)){
    alert("Digite apenas números")
}
else{
    while(contador <= 1000){
    document.write(n + " x " + contador + " :" +  n * contador + "<br>")
    contador++
}

document.write("Saiu do loop")
}