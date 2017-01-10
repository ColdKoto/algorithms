function volume(arr){
  let water = 0,
      lIdx  = [0],
      rIdx  = [arr.length - 1],
      i;
  for(let i = 1; i < arr.length - 1; i++){
    if(arr[i] > arr[lIdx[lIdx.length - 1]]){
      lIdx.push(i);
    }
    if(arr[arr.length - 1 - i] > arr[rIdx[rIdx.length - 1]]){
      rIdx.push(arr.length - 1 - i);
    }
  }
  for(let i = 1; i < arr.length - 1; i++){
    let left  = firstSmaller(lIdx, i, true),
        right = firstSmaller(rIdx, i, true, true);

    if(arr[left] <= arr[right] && arr[left] > arr[i]){
      water += arr[left] - arr[i];
    }
    else if(arr[right] < arr[left] && arr[right] > arr[i]){
      water += arr[right] - arr[i];
    }
  }
  return water;
}

function firstSmaller(arr, num, reversedIteration, largerInstead){
  if(reversedIteration){
    for(let i = arr.length - 1; i > -1; i--){
      if(largerInstead){
        if(num < arr[i]){
          return arr[i];
        }
      }
      if(num > arr[i]){
        return arr[i];
      }
    }
  }
  for(let i = 0; i > arr.length; i++){
    if(largerInstead){
      if(num < arr[i]){
        return arr[i];
      }
    }
    if(num > arr[i]){
      return arr[i];
    }
  }
}
