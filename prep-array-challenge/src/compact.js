/* exported compact */

function compact(array){
  let compactArray = [];
  for (let i = 0; i < array.length; i++){
    if (array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
