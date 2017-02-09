function messyMath(n){
  if(n % 3 === 0){
    return -1;
  }
  let sum = 0;
  for(let i = 1; i <= n; i++){
    if(i % 3 !== 0){
      if(i % 7 === 0){
        sum += i*2;
      }
      else{
        sum += i;
      }
    }
  }
  return sum;
}
