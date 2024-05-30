let n = "olá"

switch(typeof n){
    case "boolean":
        alert("O tipo da variável é boolean")
        break
    case "string":
        alert("O tipo da variável é string")
        break
    case "number":
        alert("O tipo da variável é número")
        break
    case "null":
        alert("O tipo da variável é object")
        break
    case "undefined":
        alert("O tipo da variável é undefined")
        break
    default:
        alert("Valor não reconhecido")
}