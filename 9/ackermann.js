function ackermann(num1, num2){
  if(!num1){
    return num2 + 1;
  }
  else if(!num2){
    return ackermann(num1 - 1, 1);
  }
  else{
    return ackermann(num1 - 1, ackermann(num1, num2 - 1));
  }
}
