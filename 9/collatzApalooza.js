function collatz(num, arr){
  if(!arr){
    arr = [];
  }
  if(num == 1){
    arr.push(num);
    return arr;
  }
  else if(num % 2 == 0){
    arr.push(num);
    return collatz(num / 2, arr);
  }
  else{
    arr.push(num);
    return collatz(num * 3 + 1, arr);
  }
}
