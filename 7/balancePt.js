function balancePt(arr){
  let left  = arr[0],
      right = 0,
      i;
  for(let i = 1; i < arr.length; i++){
    right += arr[i];
  }
  for(let i = 1; i < arr.length; i++){
    if(left == right){
      return true;
    }
    left += arr[i];
    right -= arr[i];
  }
  return false;
}
