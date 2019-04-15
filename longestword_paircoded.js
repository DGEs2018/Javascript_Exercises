// Write a method that takes in a string. Return the longest word in the string.

// input: string (sentence with multiple words separated by space)
// output: string (one word)

function longestWord(sentence) {
  // 1. split sentence into individual words
  const splitedSentence = sentence.split(' ');
  // 2. iterate through each of the words
  let tempLongestWord = splitedSentence[0];
  for (let i = 0; i < splitedSentence.length; i++) {
    // 3. compare each word to previous word
    if (tempLongestWord.length <= splitedSentence[i].length) {
      // 4. store the longest word
      tempLongestWord = splitedSentence[i];
    }
  }
  // 5. return the longest word
  return tempLongestWord;
}

console.log(longestWord('The quick brown fox jumps over the lazy Sophia'));