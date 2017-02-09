function octalToDecimal(str){
  let num = 0;
  if(str[0] == '-'){
    let count = str.length - 4;
    for(let i = 3; i < str.length; i++){
      num -= str[i] * Math.pow(8, count);
      count--;
    }
    return num;
  }
  else{
    let count = str.length - 3;
    for(let i = 2; i < str.length; i++){
      num += str[i] * Math.pow(8, count);
      count--;
    }
    return num;
  }
}
