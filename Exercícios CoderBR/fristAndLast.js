function FirstAndLast(arr){
  const result = `${arr.shift()} ${arr.pop()}`
  return result.split(' ')
}

console.log(FirstAndLast([1,2,3,4]))