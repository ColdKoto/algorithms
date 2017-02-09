function octalConversion(num, string){
  if(!string && num >= 0){
    string = '0o';
  }
  else if(!string && num < 0){
    string = '-0o';
  }
  let base = 1;
  while(base * 8 < Math.sqrt(Math.pow(num, 2))){
    base *= 8;
  }
  const coefficient = Math.floor(Math.sqrt(Math.pow(num, 2)) / base);
  string += coefficient;
  if(num > 0){
    num -= base * coefficient;
  }
  else{
    num += base * coefficient;
  }
  if(num === 0){
    return string;
  }
  string = octalConversion(num, string);
  return string;
}
