function stringSearch(string, char){
  let i = Math.floor(string.length / 2),
      j = 0;
  while(j < string.length / 2){
    if(string[i] == char){
      return true;
    }
    else if(string[i].charCodeAt() > char.charCodeAt()){
      i = Math.floor(i / 2);
    }
    else{
      i = Math.floor((i + string.length) / 2);
    }
    j++;
  }
  return false;
}
