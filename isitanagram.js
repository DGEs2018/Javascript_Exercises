// Write a JavaScript function to check if a word is an anagram or not.

function isAnagram(word){
  // Input: string
  // Output; boolean(true if input is anagram, false otherwise)
  // Step 1. iterate through an input word
  // Step 2. check if each of the characters could be reordered to give another word
  // Step 3. return true if Step 2 is the case
  
  let wordSplitted = word.split();
  let wordBackward = wor
  for (let i = 0; i < word.length; i++){

  }
  )
}

isAnagram('foefet', 'toffee'); // true
isAnagram('Buckethead', 'DeathCubeK'); // true
isAnagram('Twoo', 'WooT'); // true
isAnagram('dumble', 'bumble'); // false
isAnagram('ound', 'round'); // false
isAnagram('apple', 'pale'); // false