function factorial(n){
  let product = 1;
  for(let i = 2; i <= n; i++){
    product *= i;
  }
  return product;
}
