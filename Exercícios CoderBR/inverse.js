// Se o parâmetro fornecido for boolean, deverá retornar o inverso.
//Se o prâmero for numérico, o retorno deverá ser inverso.
//Se o valor não for nenhum dos dos acima, o retorno deverá ser: "Boolean ou número esperados, mas o parâmetro é do tipo: ..."

function Inverse(value) {
  const type = typeof value
  if(type === 'boolean'){
    return !value
    } if (type === 'number'){
    return value * (-1)
      } else  if(type != Boolean && type != Number){
    return 'Boolean ou número esperados, mas o parâmetro é do tipo:' + type 
  }
}

console.log(Inverse(2)) 

//Seria interessante debugar este código! Para ver melhor o comportamento da varável.
