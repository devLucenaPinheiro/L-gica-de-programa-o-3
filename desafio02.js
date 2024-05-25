n1 = parseFloat(prompt("Nota 1: "))
n2 = parseFloat(prompt("Nota 2: "))

media = n1 + n2 / 2

alert("O valor das médias é maior do que 4? " + ((media <= 4) || n1 == 0 || n2 == 0 ))