function compressCharacters(str) {
  if (str.length > 1000) {
    return 'Invalid';
  }
  // if (/[a-z]/g) {
  //   return 'Invalid'
  // }

  let count = 1;
  let result = '';

  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i + 1]) {
      count++;
    }
  
    if (str[i] !== str[i + 1]) {
      
      result = result + str[i];

      if (count > 1) {
        if (str[i] !== str[i + 1]) {
          result = result + count
          count = 1;
        }
      }
    }
 
  }
  
  return result;
}

// str = "aaAbBc"
str = "aaabbc"
//a3b2c

console.log(compressCharacters(str));