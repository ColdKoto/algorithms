function optimalLocation(arr){
  let xMin = arr[0][0],
      xMax = arr[0][0],
      yMin = arr[0][1],
      yMax = arr[0][1],
      location = [],
      minDistance;
  for(let i = 1; i < arr.length; i++){
    if(arr[i][0] > xMax){
      xMax = arr[i][0];
    }
    else if(arr[i][0] < xMin){
      xMin = arr[i][0];
    }
    if(arr[i][1] > yMax){
      yMax = arr[i][1];
    }
    if(arr[i][1] < yMin){
      yMin = arr[i][1];
    }
  }
  for(let j = yMin; j <= yMax; j++){
    for(let k = xMin; k <= xMax; k++){
      distance = 0;
      for(let z = 0; z < arr.length; z++){
        //distance += Math.pow(Math.pow((k - arr[z][0]),2) + Math.pow((j - arr[z][1]),2), 1/2); this would be if truck could park anywhere.
        distance += Math.sqrt(Math.pow((arr[z][0] - k),2)) + Math.sqrt(Math.pow((arr[z][1] - j),2));
      }
      if(distance < minDistance){
        minDistance = distance;
        location = [];
        location.push([k,j]);
      }
      else if(distance == minDistance){
        location.push([k,j]);
      }
      else if(!minDistance){
        minDistance = distance;
        location.push([k,j]);
      }
    }
  }
  return location;
}
