function whatHappensToday(){
  const randNum = Math.random(),
        volc    = 'Gonna be a hot one.',
        tsu     = 'Bring a boat to work day.',
        eq      = 'Shakey with a chance of death.',
        blizz   = 'Gonna be a cold one.',
        meteor  = 'Move or get squished.';

  if(randNum <= .1){
    return volc;
  }
  else if(randNum > .1 && randNum <= .25){
    return tsu;
  }
  else if(randNum > .25 && randNum <= .45){
    return eq;
  }
  else if(randNum > .45 && randNum <= .70){
    return blizz;
  }
  else{
    return meteor;
  }
}
