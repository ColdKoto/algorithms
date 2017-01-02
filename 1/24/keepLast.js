function keepAmount(arr, num){
  if(!num || num < 0 || num >= arr.length || typeof(num) != 'number'){
    return arr;
  }
  let replacementIdx = 0;
  for(let i = arr.length - num; i < arr.length; i++){
    arr[replacementIdx] = arr[i];
    replacementIdx++;
  }
  arr.length -= arr.length - num;
}
