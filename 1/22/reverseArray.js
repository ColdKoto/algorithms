function reverseArray(arr){
  for(let i = 0; i < (arr.length - 1) / 2; i++){
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
