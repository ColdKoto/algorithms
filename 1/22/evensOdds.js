function statArtifact(arr){
  let isEven = true;
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0 && isEven){
      count++;
    }
    if(arr[i] % 2 !== 0 && !isEven){
      count++;
    }
    if(arr[i] % 2 !== 0 && isEven){
      count = 1;
      isEven = false;
    }
    if(arr[i] % 2 === 0 && !isEven){
      count = 1;
      isEven = true;
    }
    if(count == 3 && isEven){
      count = 0;
      console.log('Even more so!');
    }
    if(count == 3 && !isEven){
      count = 0;
      console.log('That\'s odd!');
    }
  }
}
