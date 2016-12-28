function swapEveryOther(arr){
  for(let i = 0; i < arr.length / 2; i++){
    if(i % 2 == 0){
      const temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }
  return arr;
}
