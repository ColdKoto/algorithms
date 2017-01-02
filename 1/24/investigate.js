function whatReallyHappensToday(){
  const volcano    = 'bring an umbrella and RUN',
        tsunami    = 'bring a rain coat',
        earthquake = 'travel by plane',
        blizzard   = 'dress in layers',
        meteor     = 'you\'ll need to move or get squished';

  let outString = '';

  for(let i = 0; i < 5; i++){
    const randNum = Math.random();
    if(randNum <= .1 && i === 0){
      outString = stringAdderHelper(outString, volcano);
    }
    else if(randNum > .1 && randNum <= .25 && i === 1){
      outString = stringAdderHelper(outString, tsunami);
    }
    else if(randNum > .25 && randNum <= .45 && i === 2){
      outString = stringAdderHelper(outString, earthquake);
    }
    else if(randNum > .45 && randNum <= .70 && i === 3){
      outString = stringAdderHelper(outString, blizzard);
    }
    else if(randNum > .70 && i === 4){
      outString = stringAdderHelper(outString, meteor);
    }
  }
  if(outString.length){
    outString += '.';
    return outString;
  }
  else{
    outString = 'Safe!';
    return outString;
  }
}

function stringAdderHelper(output, used){
  if(output.length){
    output += ', also ' + used;
  }
  else{
    output += used[0].toUpperCase();
    for(let i = 1; i < used.length; i++){
      output += used[i];
    }
  }
  return output;
}
