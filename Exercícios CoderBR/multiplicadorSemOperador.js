function withoutOperator(num1, num2) {
  let result
  let i
  
  for(i = 0; i <= num2; i + num2){
    result = num1 + i
  }
  return console.log(result)
}

withoutOperator(0, 2)