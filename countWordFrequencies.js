function countWordFrequencies(sentence) {

  if (typeof sentence !== 'string') {
    return 'Invalid';
  }

  sentence = sentence.toLowerCase();

  let words = sentence.split(/[^a-z0-9]+/).filter(word => word !== '');

  let frequencies = {};

  for (let word of words) {
    
    if (!frequencies[word]) {
      frequencies[word] = 1
    } else {
      frequencies[word] = frequencies[word] + 1
    }
 
  }
  
  return frequencies;
}



// let sentence = "abdur rahman abdur  abdur rahman";
let sentence = "Hello World ,. shit shit shit $#hello!";
console.log(countWordFrequencies(sentence));