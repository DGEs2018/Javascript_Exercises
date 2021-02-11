// Write a method that takes a string and returns true if it is a palindrome.
function palindromeLong(word) {
	// convert the input 'word' to lower case using the method toLowerCase and store it in a variable called 'lowerWord'
	let lowerWord = word.toLowerCase();

	// initialize a variable called reversedString  to an empty string (to contain the  individual characters after the iteration )
	let reversedString = '';
	// loop backwards to get reversed string
	for (let i = lowerWord.length - 1; i >= 0; i--) {
		reversedString = reversedString + lowerWord[i]; // concatenate the consecutive characters following the iteration to the preexisting ones, using the '+' operator
	}
	if (lowerWord === reversedString) {
		// if the iterated charac
		return true;
	} else {
		return false;
	}
}

// console.log(palindromeLong('Anna'));

function palindromeShort(word) {
	// convert the input 'word' to lower case using the method toLowerCase and store it in a variable called 'lowerWord'
	let lowerWord = word.toLowerCase();
	// declare a variable called reversedWord and equalize it to the 'lowerWord' variable splitted, reversed and at last joined.
	let reversedWord = lowerWord.split('').reverse().join('');
	// return reversedWord
	return lowerWord === reversedWord;
}

console.log(palindromeShort('Hollo'));
