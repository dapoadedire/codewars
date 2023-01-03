const complementaryDNA = (dna) => {
    let dnaArray = dna.split('');
    let dnaComplementary = dnaArray.map((nucleotide) => {
        switch (nucleotide) {
        case 'A':
            return 'T';
        case 'T':
            return 'A';
        case 'C':
            return 'G';
        case 'G':
            return 'C';
        }
    });
    return dnaComplementary.join('');
}

console.log(complementaryDNA('AAAA'));
console.log(complementaryDNA('ATTGC'));
console.log(complementaryDNA('GTAT'));



// CodeWars Link: https://www.codewars.com/kata/554e4a2f232cdd87d9000038/javascript