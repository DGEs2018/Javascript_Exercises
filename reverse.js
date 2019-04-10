function reverseInput(input) {

/*start by splitting the input character by character using the .split method */
    
    let splitInput = input.split('')

/*reverse the order of the above introduced array using the reverse method, i.e. chain it to .reverse() */

    let reverseInput = splitInput.reverse();

/*finally merge / join the splitted characters altogether using the join method */
    let remerge = reverseInput.join('');

    return remerge;

}

reverseInput('hi guys'); //


/* function reverse(input) {
     
    #iterate through each of the characters to individually 
    for (i=0; i < reverseArray.length ; i--) {
        console.log(reverseArray[i]);
    }

} */