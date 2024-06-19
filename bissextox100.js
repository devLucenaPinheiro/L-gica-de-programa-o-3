
for(let ano = 1004;ano <= 2024; ano += 4){
    console.log(ano)
    
    if(ano % 400 === 0){
        continue
    }
    
    if(ano % 100 === 0){
        break
    }

}