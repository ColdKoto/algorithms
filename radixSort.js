const radixSort = (arr, limit) => {
  const maxPowerBaseTen = arr => {
    let count       = 0,
        maxNumber   = Math.max(...arr);
    while(max > 1){
      max /= 10;
      count++;
    }
    return count;
  },
  for(let i = 0; i < limit; i++){
    for(let j = 0; j < arr.length; j++){
      returnedArr[].push()
    }
  }
}

function countingSort(arr, min, max){
  let i, z = 0, count = [];
  for (i = min; i <= max; i++) {
      count[i] = 0;
  }
  for (i=0; i < arr.length; i++) {
      count[arr[i]]++;
  }
  for (i = min; i <= max; i++) {
      while (count[i]-- > 0) {
          arr[z++] = i;
      }
  }
  return arr;
}
