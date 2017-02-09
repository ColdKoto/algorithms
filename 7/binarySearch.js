function binarySearch(arr, val){
  let i = Math.floor(arr.length / 2),
      j = 0;
  while(j < arr.length / 2){
    if(arr[i] == val){
      return true;
    }
    else if(arr[i] > val){
      i = Math.floor(i / 2);
    }
    else{
      i = Math.floor((i + arr.length) / 2);
    }
    j++;
  }
  return false;
}
