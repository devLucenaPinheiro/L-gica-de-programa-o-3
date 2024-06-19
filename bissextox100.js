
for(let ano = 1004;ano <= 2024; ano += 4){

    let anoBissexto = ano % 100 != 0 || ano % 400 === 0

    if(anoBissexto){
        console.log(ano, " é bissexto ")
    } else{
        console.log(ano, "não é bissexto")
    }
}