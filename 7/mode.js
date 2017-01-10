function mode(arr){
  let numberCount = {},
      max;

  for(let i = 0; i < arr.length; i++){
    if(!numberCount[arr[i]]){
      numberCount[arr[i]] = 1;
    }
    else{
      numberCount[arr[i]]++;
    }
  }
  for(let key in numberCount){
    if(!max){
      max = key;
    }
    else if(numberCount[max] < numberCount[key]){
      max = key;
    }
    else if(numberCount[max] == numberCount[key]){
      max += ' & ' + key;
    }
  }
  return max;
}
