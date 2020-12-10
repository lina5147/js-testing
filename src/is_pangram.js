const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = function(text) {
  
  const textLowerCase = text.toLowerCase()
  
  const letterCount = {};

  // const letters = text.split('');
  // letters.forEach( (letter) => {
  //   if (letterCount[letter]) {
  //     letterCount[letter] += 1;
  //   } else {
  //     letterCount[letter] = 1
  //   }
  // });

  for (const letter of textLowerCase) {
    letterCount[letter] = true;
  }

  for (const letter of ALPHABET) {
    if (!letterCount[letter]) {
      return false;
    }
  }

  return true;
};

module.exports = isPangram;
