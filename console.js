a = 0
b = 5
c = 5

isValid = true

console.log(!true)
console.log(!false)
console.log(!!"") // !!"" é a mesma coisa que boolean("")
console.log(Boolean(0))
console.log(!!0) // é a mesma coisa que boolean(0)
console.log(Boolean("olá")) // qualquer string convertida para booleano que não seja vazia é true
console.log(!!"ola") // é a mesma coisa que a de cima.

console.log(b >= c)
console.log("O campo é valido: " + isValid)
console.log("O campo não é valido: " + !isValid)