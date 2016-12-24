function makePosNeg(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      newArr[newArr.length] = -arr[i];
    }
    else{
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr
}
