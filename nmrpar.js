let n = parseInt(prompt("Digite um número"))
let i = 2
if(isNaN(n)){
    alert("Digite apenas números")
}else{
    while(i <= n){
    console.log(i)
    i += 2
    document.write(i + "<br>")
}
document.write("Saiu do loop")
}