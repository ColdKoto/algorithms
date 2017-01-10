function removeDups(arr){
  let found = {};
  let i = 0;
  while(i < arr.length){
    if(!found[arr[i]]){
      found[arr[i]] = true;
      i++;
    }
    else{
      removeAt(arr, i);
    }
  }
}

function removeAt(arr, idx){
  for(let i = idx; i < arr.length - 1; i++){
    arr[i] = arr[i + 1];
  }
  arr.length--;
}
