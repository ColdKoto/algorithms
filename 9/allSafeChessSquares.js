function safeLands(queenLocation){
  if(queenLocation.charCodeAt(0) < 97 || queenLocation.charCodeAt(0) > 104 ||
     queenLocation.charCodeAt(1) < 49 || queenLocation.charCodeAt(1) > 56){
    return 'Please input queen locations in the format \'a4\', make sure the letter is lowercase! ';
  }
  let returnedArray = [];
  for(let i = 97; i < 105; i++){
    for(let j = 1; j < 9; j++){
      if(!(i == queenLocation.charCodeAt(0)) && !(j == queenLocation[1]) &&
         !(Math.sqrt(Math.pow(i - queenLocation.charCodeAt(0), 2)) == Math.sqrt(Math.pow(j - queenLocation[1], 2)))){
           returnedArray.push(String.fromCharCode(i) + j);
         }
    }
  }
  return returnedArray;
}
