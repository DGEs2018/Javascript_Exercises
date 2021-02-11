function getCount(str) {
	// declare a variable called 'vowelsCount' and assign it the value of 0 to begin with
	let vowelsCount = 0;
	let inputtoString = str.toString();

	//iterate through each of the characters one by one, and see if they are the same as the vowels
	for (let i = 0; i < inputtoString; i++) {
		if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'y') {
			return (vowelsCount = vowelsCount + 1);
		}
	}

	return vowelsCount;
}
console.log(getCount('something')); // should return 3

function count_vowels(word) {
	/* Use the .replace method, to substitute every letter in the word with empty string except for the given list of vowels, 
    irrespective of whether they are in uppercase or lowercase. */

	return word.replace(/[^aeiouy]/gi, '').length;
}
count_vowels('hello'); // should return 2

/*
function count_vowels(string) {
    let splitString = string.split('');

    let vowelsInString = new Array ('a, 'e', 'i', 'o', 'u', 'y');

    if (splitString contains vowelsInString){
        return

    }

    let vowels = new Array ('a, 'e', 'i', 'o', 'u', 'y');
    

    if (string contains a, e, i, o, u, )


}*/

function getCount(input) {
	let vowelCounter = 0;
	//iterate over the string
	// if the character is  either, a, e, i, o or u
	for (let i = 0; i < input.length - 1; i++) {
		const vowelFound = input[i];
		if (
			vowelFound[i] == 'a' ||
			vowelFound[i] == 'e' ||
			vowelFound[i] == 'i' ||
			vowelFound[i] == 'o' ||
			vowelFound[i] == 'u'
		) {
			// then increment on these

			vowelFound++;
		}
		return vowelCounter++;
	}

	return vowelCounter;
}
