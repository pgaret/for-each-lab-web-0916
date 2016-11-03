function log(element, index, array){
  console.log(`${index}: ${element}`)
}

function iterativeLog(array){
  array.forEach(log)
}

function iterate(callback){
  arr = ['Epica', 'Delain', 'Hammerfall'];
  arr.forEach(callback)
  return arr;
}

function doToArray(array, callback){
  array.forEach(callback);
}
