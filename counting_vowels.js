
function count_vowels(word) {
    /* Use the .replace method, to substitute every letter in the word with empty string except for the given list of vowels, 
    irrespective of whether they are in uppercase or lowercase. */
    
    return word.replace(/[^aeiouy]/ig, '').length;

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