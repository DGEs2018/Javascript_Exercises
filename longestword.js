function longestWord(sentence) {

    // Breakdown the problem into small steps
    
    // First start by splitting the input, i.e 'phrase' one by one using the .split method
    
    let splitSentence = sentence.split(' ');

    // Convert the splitted array of strings into a string

    let arrayToString = splitSentence.join();

    //Iterate through the words and compare them to one another to find the longest out of them

    for(let i=0; i < arrayToString.length; i++) {
        if(arrayToString[i].length > arrayToString[i++].length) {
           return arrayToString[i];
        } 
        return arrayToString[i];
    }

}


/*reverse the order of the above introduced array using the reverse method, i.e. chain it to .reverse() */

    if (sentence.split('').length > )

/*finally merge / join the splitted characters altogether using the join method */
    let remerge = reverseInput.join('');

    return remerge;
}

// Write a method that will take a string as input, and return a new string with the same letters in reverse order.

// loop backwards and add each letter to new variable
function reverse1(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString = reversedString + string[i];
    }
    return reversedString;
  }
  
  // console.log(reverse1('Hello'));
  
  // Write a method that takes a string and returns true if it is a palindrome.
  function palindromeLong(word) {
    let lowerWord = word.toLowerCase();
    let reversedString = '';
    // loop backwards to get reversed string
    for (let i = lowerWord.length - 1; i >= 0; i--) {
      reversedString = reversedString + lowerWord[i];
    }
    if (lowerWord === reversedString) {
      return true;
    } else {
      return false;
    }
  }
  
  // console.log(palindromeLong('Anna'));
  
  function palindromeShort(word) {
    let lowerWord = word.toLowerCase();
    let reversedWord = lowerWord
      .split('')
      .reverse()
      .join('');
    return lowerWord === reversedWord;
  }
  
  // console.log(palindromeShort('Hollo'));
  