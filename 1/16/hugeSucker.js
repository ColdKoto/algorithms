let sum = 0; // doing what is asked vs being clever
for(let i = -300000; i < 300000; i++){
  if(i % 2 !== 0){
    sum += i;
  }
}
console.log(sum);
