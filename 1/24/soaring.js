function iqRise(currentIQ, numDays){
  for(let i = 1; i <= numDays; i++){
    currentIQ += i * 0.01;
  }
  return currentIQ;
}
