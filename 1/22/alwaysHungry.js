function hungry(arr){
  let eaten = false;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 'food'){
      console.log('yummy');
      eaten = true;
    }
    if(i == arr.length - 1 && eaten == false){
      console.log('I\'m hungry');
    }
  }
}
