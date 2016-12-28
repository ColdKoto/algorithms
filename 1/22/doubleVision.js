function double(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr[newArr.length] = arr[i] * 2;
  }
  return newArr;
}
