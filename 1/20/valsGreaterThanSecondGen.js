function greaterThanSecondGen(arr){
  let count    = 0,
      newArray = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[1]){
      newArray[newArray.length] = arr[i];
    }
  }
  console.log(count);
  return newArray;
}
