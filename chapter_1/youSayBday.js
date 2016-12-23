function guessBday(month, day){
  const myBday      = '518',
        myOtherBday = '185';

  let guess = '';
  guess += month;
  guess += day;

  if(guess == myBday || guess == myOtherBday){
    console.log('How did you know?');
  }
  else{
    console.log('Just another day....');
  }
}
