function sumToOnes(n){
  let power = 10,
      arr   = [];
  while(power < n){
    arr.push(n % power);
    power *= 10;
  }
  let sum = n % power;
  for(let i = arr.length - 1; i >= 0; i--){
    sum += arr[i];
  }
  if(sum < 10){
    return sum;
  }
  return sumToOnes(sum);
}
