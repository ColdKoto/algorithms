function prevLengthReplacer(arr){
  let lastLength = arr[arr.length - 1].length;
  for(let i = arr.length - 1; i > -1; i--){
    if(i == 0){
      arr[i] = lastLength;
    }
    else{
      arr[i] = arr[i - 1].length;
    }
  }
  return arr;
}
