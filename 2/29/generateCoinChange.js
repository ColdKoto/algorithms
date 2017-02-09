function change(cents){
  let changeCutoff    = [100, 50, 25, 10, 5, 1],
      recieved        = [0, 0, 0, 0, 0, 0],
      recievedNames   = ['dollars: ', 'half-dollars: ', 'quarters: ', 'dimes: ', 'nickles: ', 'pennies: '],
      idx             = 0,
      returnedString  = cents + ' cents can be represented by:\n';
  while(cents){
    if(cents < 5){
      recieved[5] = cents;
      cents = 0;
    }
    else if(cents >= changeCutoff[idx]){
      recieved[idx] = Math.floor(cents / changeCutoff[idx]);
      cents %= changeCutoff[idx];
    }
    else{
      idx++;
    }
  }
  for(let i = 0; i < 6; i++){
    if(recieved[i]){
      returnedString += '    ' + recievedNames[i] + recieved[i] + '\n';
    }
  }
  return returnedString;
}
