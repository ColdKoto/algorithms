function numberToHexadecimal(number){
  const base   = 16,
        hexObj = {'A': 10, 'B': 11, 'C': 12, 'D': 13,
                'E': 14, 'F': 15, '10': 16};
  let prefix     = '',
      absNumber  = Math.sqrt(Math.pow(number, 2)),
      powerValue = 1,
      power      = 0;
  if(number >= 0){
    prefix = '0x';
  }
  else{
    prefix = '-0x';
  }
  while(powerValue * base < absNumber){
    powerValue *= base;
    power++;
  }
  for(power; power >= 0; power--){
    let constant = Math.floor(absNumber / powerValue);
    if(constant > 9){
      for(var key in hexObj){
        if(hexObj[key] == constant){
          constant = key;
          prefix += constant;
          constant = hexObj[key];
        }
      }
    }
    else{
      prefix += constant;
    }
    absNumber -= constant * powerValue;
    powerValue /= base;
  }
  return prefix;
}

console.log(numberToHexadecimal(-33));
