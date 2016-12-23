function strangeCountDown(multiple, floor, ceiling, exception){
  let i = floor;
  while(i < ceiling){
    if(i % multiple == 0 && i !== exception){
      console.log(i);
      i += multiple;
    }
    else{
      i++;
    }
  }
}
