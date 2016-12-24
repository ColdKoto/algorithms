function countdown(num){
  let numArray = [];
  for(var i = num; i > -1; i--){
    numArray[numArray.length] = i;
  }
  return numArray;
}
