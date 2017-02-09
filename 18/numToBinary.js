function numToBinary(number){
  const base = 2;
  let prefix     = '',
      absNumber  = Math.sqrt(Math.pow(number, 2)),
      powerValue = 1,
      power      = 0;
  if(number >= 0){
    prefix = '0b';
  }
  else{
    prefix = '-0b';
  }
  while(powerValue * base < absNumber){
    powerValue *= base;
    power++;
  }
  for(power; power >= 0; power--){
    let constant = Math.floor(absNumber / powerValue);
    prefix += constant;
    absNumber -= constant * powerValue;
    powerValue /= base;
  }
  return prefix;
}
