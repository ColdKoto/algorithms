function printReturn(arr){
  console.log(arr[arr.length -2]);
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      return arr[i];
    }
  }
}
