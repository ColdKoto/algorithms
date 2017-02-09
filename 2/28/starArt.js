function leftAlignStarArt(n){
  let starString = '';
  for(let i = 0; i < n; i++){
    starString += '*';
  }
  return starString;
}

function rightAlignStarArt(n){
  let starString = '',
      i          = 0;
  while(i < 75 - n){
    starString += ' ';
    i++;
  }
  while(i < 75){
    starString += '*';
    i++;
  }
  return starString;
}

function centerAlignStarArt(n){
  let starString = '',
      i          = 0;
  while(i < (75 - n) / 2){
    starString += ' ';
    i++;
  }
  while(i < ((75 - n)/2) + n){
    starString += '*';
    i++;
  }
  while(i < 75){
    starString += ' ';
    i++;
  }
  return starString;
}
