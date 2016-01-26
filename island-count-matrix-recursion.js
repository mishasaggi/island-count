//recursive solution
function countIslands (mapStr) {
  mapMatrix = mapStr.split('\n');
  for(var i=0; i<mapMatrix.length; i++){
    mapMatrix[i] = mapMatrix[i].split('');
  }
  var islandCount = 0;
  //starting points for recursion
  for(var r=0; r<mapMatrix.length; r++ ){
    for(var c=0; c<mapMatrix[0].length; c++){
      if(isLand(r,c)) {
        findIslands(r,c);  
        //only increments once a recursion stack is completed and returned
        islandCount++;
      }
    }
  }
  //recursive inner function
  function findIslands(row,col) {
    if(isLand(row,col)){
      setLand(row,col,islandCount);
    }
    if(isLand(row, col+1)) {
      setLand(row, col+1,islandCount);
      findIslands(row, col+1);
    }
    if(isLand(row, col-1)) {
      setLand(row, col-1,islandCount);
      findIslands(row, col-1);
    }
    if(isLand(row+1, col)) {
      setLand(row+1, col,islandCount);
      findIslands(row+1, col);
    }
    if(isLand(row-1, col)) {
      setLand(row-1, col,islandCount);
      findIslands(row-1, col);
    }
  }
  //helper functions
  function isLand(row, col) {
    if(!isValid(row,col)){
      return false;
    }
    return (mapMatrix[row][col] === "0")
  }
  
  function setLand(row, col, currentIsland) { 
  //islandCount doesn't do up until end of a recursive stack
    mapMatrix[row][col] = currentIsland + 1; 
  }

  function isValid(row, col) { 
    return ( (row >= 0 && row < mapMatrix.length) && (col >= 0 && col < mapMatrix[0].length) )
  }
  // console.log(mapStr);
  // console.log(mapMatrix);
  return islandCount;
} 
