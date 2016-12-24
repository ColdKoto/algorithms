function thisLenThatVal(num1, num2){
  const sameNumString = 'jynx!';
  if(num1 == num2){
    return sameNumString;
  }
  let newArr = [];
  for(let i = 0; i < num1; i++){
    newArr[i] = num2;
  }
  return newArr;
}
