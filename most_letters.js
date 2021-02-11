// Write a method that takes a string in and returns true if the letter “z” appears within three letters after an “a”. You may assume that the string contains only lowercase letters.
function zInThreeLetters(sentence){
    // Input a string
    // Output is a boolean (true)
    // z should appear within three letters after an 'a'

    // change the sentence to lower case 
    let lowercasedSent = sentence.toLowerCase();
    // iterate through the sentence character by character
    for(let i=0;  i < lowercasedSent.length; i =+1){
        // find the letter 'a'
        if (sentence[i] == 'a' && sentence[i+3]== 'z'){

        // find the letter 'z' : if it appears within three letters after the 'a', return true
            return true;
        }
    }
    
}
console.log(zInThreeLetters('hi abez')); // should return true