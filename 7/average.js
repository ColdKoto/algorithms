function average(arr){
  let sum = arr[0];
  for(let i = 1; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}
