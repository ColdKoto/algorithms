function printGrade(score){
  let outString = 'Score: ' + score + ' Grade: ';
  if(score >= 90){
    outString += gradeHelper('A', score, 97, 93);
  }
  else if(score < 90 && score >= 80){
    outString += gradeHelper('B', score, 87, 83);
  }
  else if(score < 80 && score >= 70){
    outString += gradeHelper('C', score, 77, 73);
  }
  else if(score < 70 && score >= 60){
    outString += gradeHelper('D', score, 67, 63);
  }
  else if(score < 60){
    outString += 'F';
  }
  return outString;
}

function gradeHelper(letter, score, plusCut, minusCut){
  if(score >= plusCut){
    letter += '+';
  }
  else if(score < minusCut){
    letter += '-';
  }
  return letter;
}
