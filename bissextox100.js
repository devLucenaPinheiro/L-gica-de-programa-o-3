
for(let ano = 1004;ano <= 2024; ano += 4){

    let anoBissexto = ano % 100 != 0 || ano % 400 === 0

    console.log(anoBissexto, ano)
}