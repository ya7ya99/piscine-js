function DNA(rna) {
    let res = ''
    for (let i =0; i < rna.length;i++){
        if (rna[i] == 'C') {
            res += 'G'
        } else if (rna[i] == 'G') {
            res += 'C'
        } else if (rna[i] == 'A') {
            res += 'T'
        } else if (rna[i] == 'U') {
            res += 'A'
        }
    }
    return res
}
function RNA(dna) {
    let res = ''
    for (let i =0; i < dna.length;i++){
        if (dna[i] == 'G') {
            res += 'C'
        } else if (dna[i] == 'C') {
            res += 'G'
        } else if (dna[i] == 'T') {
            res += 'A'
        } else if (dna[i] == 'A') {
            res += 'U'
        }
    }
    return res
}
