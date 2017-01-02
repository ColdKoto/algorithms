function printGrade(score){
  let outString = 'Score: ' + score + ' Grade: ';
  if(score >= 90){
    outString += 'A';
  }
  else if(score < 90 && score >= 80){
    outString += 'B';
  }
  else if(score < 80 && score >= 70){
    outString += 'C';
  }
  else if(score < 70 && score >= 60){
    outString += 'D';
  }
  else if(score < 60){
    outString += 'F';
  }
  return outString;
}
