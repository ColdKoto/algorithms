function addSevenToMost(arr){
  let newArr = [];
  for(let i = 0; i < arr.length - 1; i++){
    newArr[i] = arr[i + 1] + 7;
  }
  return newArr;
}
