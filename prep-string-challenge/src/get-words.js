/* exported getWords */

function getWords(string){
  if (string.trim() === ''){
    return [];
  }
  else {
    return string.split(' ');
  }
};
