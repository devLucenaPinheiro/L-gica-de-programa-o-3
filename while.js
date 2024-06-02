n = parseFloat(prompt("Digite um número"))
contador = 0

if(isNaN(n)){
    alert("Digite apenas números")
}else
do{
    document.write(n + " x " + contador + " :" + n * contador + "<br>")
    contador++
    }
while(contador <= 10000)
document.write("Saiu do loop")