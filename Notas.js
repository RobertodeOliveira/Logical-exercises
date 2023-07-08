const Notas = (nota) => {
    if (nota >= 90 && nota <= 100) {
        console.log('Parabéns você tirou um A!')
    } else if ( nota >= 80 && nota < 90 ) {
        console.log('Parabéns você tirou um B!')
    } else if (nota >= 70 && nota < 80) {
        console.log('parabéns você tirou um C!')
    } else if ( nota >= 60 && nota < 70) {
        console.log('Você tirou um D. Mas convenhamos que você poderia ser muito melhor')
    } else if ( nota < 60) 
        console.log('Estude mais! Você pode ser melhor.')
        else if (nota > 100 || nota < 0){
            console.log('Valor inválido')
        }
    
}

Notas(101)