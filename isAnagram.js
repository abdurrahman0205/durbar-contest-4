function isAnagram(s1, s2) {

  if (s1.length > 1000 || s2.length > 1000) {
    return 'Invalid';
  }


  const cleanS1 = s1.toLowerCase().split('');
  const s = [...new Set(cleanS1)]
  const filteredS1 = s.filter((letter) => /[a-z]/.test(letter));

  const cleanS2 = s2.toLowerCase().split('');
  const b = [...new Set(cleanS2)]
  const filteredS2 = b.filter((letter) => /[a-z]/.test(letter));

  if (filteredS1.length !== filteredS2.length) {
    return false;
  }

  for (let ul of filteredS1) {
    if (!filteredS2.includes(ul)) {
      return false;
    }
  }


  return true;
}

console.log(isAnagram('listen', 'silnt'));
console.log(isAnagram('Hellorw', 'Worelh'));
//passed