function leftAlignCharArt(n, char){
  let charString = '';
  for(let i = 0; i < n; i++){
    charString += char;
  }
  return charString;
}

function rightAlignCharArt(n, char){
  let charString = '',
      i          = 0;
  while(i < 75 - n){
    charString += ' ';
    i++;
  }
  while(i < 75){
    charString += char;
    i++;
  }
  return charString;
}

function centerAlignCharArt(n, char){
  let charString = '',
      i          = 0;
  while(i < (75 - n) / 2){
    charString += ' ';
    i++;
  }
  while(i < ((75 - n)/2) + n){
    charString += char;
    i++;
  }
  while(i < 75){
    charString += ' ';
    i++;
  }
  return charString;
}
