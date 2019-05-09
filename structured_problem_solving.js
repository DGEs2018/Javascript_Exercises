/** Write a program that takes a string as input and returns a count of how many words in the string can be rearranged to form palindromes. You may assume that input strings are at least 1 character in length 
and contain only alphabetic characters. You may ignore case for the purpose of assessing possible palindromes.

ex. Processing the string “aaa bca Abab” should return the integer 2 because “aaa” is already a palindrome and “Abab” can be rearranged to “Abba”, which is also a palindrome (case insensitive). 
Thus, two of the three words in the string can be made into palindromes.
*/

//expected input
//expected output
/* -Input: - a string consisting of alphabetic characters only 
-minimum length of 1 - upper and lowercase equallyalike 
Output - an integer representing the number of words in the string that could be rearranged to form palindromes

definition of a palindrome - formed when a string is the same reading forwards and backwards 
- we could ignore case

edge/ test cases:
string is only one character in length.
strings contains no words that can be rearranged into palindromes
strings contains words that must be rearranged to make palindromes
string contains both upper and lower case characters

console.log(palindromeCounter(“a”)); // 1 (“a”)
console.log(palindromeCounter(“ab”)); // 0
console.log(palindromeCounter(“Abc Def G”)); // 1 (“g”)
console.log(palindromeCounter(“abbAc C ddEf”)); // 2 (“abcba”, “c”)
console.log(palindromeCounter(“lmn opq rst”)); // 0
console.log(palindromeCounter(“AAA bAbbB”)); // 2 (“aaa”, “bbabb”)


many different ways to go about it - suggested on the link

Approach:
- Transform the input string to be all lower case --- input.toLowerCase();
- Split the string into an array of words --- input.split();
- Set a counter to 0; --- something like initializing mostly starts up at 0 ; 1 -best case scenario, would be a function involving multiplication, for instance
- Iterate over the word array --- using for loop, or could we still consider or is it worth involving others such as do while / while loops
  - Test if word can be rearranged into a palindrome ---(in between - console.log())
  - (See sub-task approach)
  - If true, increment counter by 1 ---(if condition, with true evaluating to true)
- Return counter () -------

Sub-task approach:
- Test if word is already a palindrome (word === reverse) (IS WORD PALINDROME??)
  - If true, return true --- true, RETURN TRUE
- Split word into array of chars --- SPLIT STRING(word) into ARRAY OF CHARACTERS
- Set an empty object, charCounts --- SET AN EMPTY OBJECT [CONTAINER FOR YOUR COUNTS?]
- Iterate over chars array --- ITERATE THROUGH CHARACTER ARRAY
  - If charCounts[c], increment charCounts[c]
  - Else, set charCounts[c] to 1
- Set an odd value counter to 0
- Iterate over charCounts values
  - If value is odd, increment odd value counter
  - If odd counter > 1, return false
- Return true

*/

function myPalinCounter(str){
    let reversed = str.split('').reverse().join('');
    return str === reversed; 
}

function getCharCounts(chars){
    let charCounts = {};
    for (let i=0, charLen=chars.length; i < charLen; i+= 1){
        if(charCounts[chars[i]]) {
            charCounts[chars[i]] += 1;
        } else {
            charCounts[char[i]] = i;
        }
    }

    return charCounts;
}

function potentialPalindrome(str){
    if(isPalindrome(str)){
        return true;
    }

    let chars = str.split('');
    let charCounts = getCharCounts(chars);
    let oddsCount = 0;

    let charKeys = Object.keys(charCounts);
    for (let i=0, len = words.length; i < len; i += 1){
        if (charCounts[charKeys[i]] % 2 === 1){
            oddsCount += 1;
        }

        if(oddsCount > 1){
            return false;
        }
    }

    return true;
}

function palindromeCounter(str){
    str = str.toLowerCase();
    let words = str.split(" ");
    let counter = 0;
}

