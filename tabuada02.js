let n = parseFloat(prompt("Digite um número"))

if(isNaN(n)){
    alert("Digite apenas números")
} 
else{
    for(let i = 0; i <= 1000; i++){
    document.write(n + " x " + i + " :" +  n * i + "<br>")
    }
    document.write("Saiu do loop")
}