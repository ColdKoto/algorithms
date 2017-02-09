function threesFives(){
  let sum = 0,
      i   = 100;
  while(i <= 4000000){
    if((i % 3 === 0 || i % 5 === 0) && (i % 15 !== 0)){
      sum += i;
    }
    i++;
  }
  return sum;
}
