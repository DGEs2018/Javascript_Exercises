//DNA Strand("ATTGC") should return "TAACG"
//DNA Strand ("GTAT") # return "CATA"

// A & T
// C & G

function dnaStrand(dna) {
	// container to store the compliment string
    let counterPart = '';
    
    let counterParts = {
        A : 'T',
        T : 'A',
        G : 'C',
        C : 'G'

        }

        return dna.split('').map(letter => counterParts)
	// iterate through input dan
	for (let i = 0; i < dna.length; i++) {
        const letterFound = dna[i];
        counterPart += counterParts[letterFound];
		// if the letter is an A, attach a T to it
		if (letterFound == 'A') {
			counterPart += 'T';
			// else if the letter is a T, attach an A to it
		} else if (letterFound == 'T') {
			counterPart += 'A';
			// else if the letter is a G, attach a C to it
		} else if (letterFound == 'G') {
			counterPart += 'C';
			// else the letter is a C attach a G to it
		} else if (letterFound == 'G') {
			counterPart += 'C';
		}
		return counterPart;
	}
}

console.log(dnaStrand('ATTGC')); // should return 'TAACG'


Second version




