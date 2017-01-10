function flatten(arr){
  let idx = 0;
  while(notFlat(arr)){
    if(typeof(arr[idx]) == 'object'){
      let oldIdx = idx;
      for(let i = 0; i < arr[idx].length; i++){
        insertAt(arr, idx, arr[idx][i]);
        idx++;
      }
      removeAt(arr, idx);
      idx = oldIdx;
    }
    else{
      idx++;
    }
  }
}

function notFlat(arr){
  for(let i = 0; i < arr.length; i++){
    if(typeof(arr[i]) == 'object'){
      return true;
    }
    if(typeof(arr[i]) !== 'object' && i == arr.length - 1){
      return false;
    }
  }
}

function insertAt(arr, idx, item){
  for(let i = arr.length - 1; i >= idx; i--){
    arr[i + 1] = arr[i];
  }
  arr[idx] = item;
}

function removeAt(arr, idx){
  for(let i = idx; i < arr.length - 1; i++){
    arr[i] = arr[i + 1];
  }
  arr.length--;
}

function flattenNew(arr){
  let idx = 0,
      newArr = [];
  while(notFlat(arr)){
    if(typeof(arr[idx]) == 'object'){
      let oldIdx = idx;
      for(let i = 0; i < arr[idx].length; i++){
        insertAt(arr, idx, arr[idx][i]);
        idx++;
      }
      removeAt(arr, idx);
      idx = oldIdx;
    }
    else{
      newArr.push()
      idx++;
    }
  }
  return newArr
}
