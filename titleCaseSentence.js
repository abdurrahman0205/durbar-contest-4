function titleCaseSentence(str) {
  if (typeof str !== 'string') {
    return 'Invalid';
  }
  // if (str === '') {
  //   return '';
  // }

  let arrWord = str.split(' ')
  let arWord = [...new Set(arrWord)]

  let final = arWord.filter ((word) => {
    return /[a-zA-Z]/g.test(word);
  })

  let finalWord = final.map(word => word.slice(0,1).toUpperCase()+word.slice(1,word.length).toLowerCase());
  
  // let lWord = [];
  // for (let i = 0; i < finalWord.length; i++) {
  //   if (i === 0) {
  //     lWord.push(finalWord[0])
  //   } 
    
  //   lWord.push(' ' + finalWord[i])

  // }
 
  return finalWord.join(' ')
}

// const str = "a   short  , sentence  ";
const str = "";

console.log(titleCaseSentence(str));
//passed