function filterShortStateName(arr) {
    return arr.filter(a => a.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter(a => ['a', 'e', 'i', 'o', 'u'].includes(a[0].toLowerCase()));
}

function filter5Vowels(arr) {
    return arr.filter(state => {
        const vowelCount = (state.match(/[aeiou]/gi) || []).length;
        return vowelCount >= 5
    })
}

function filter1DistinctVowel(strings) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    
    return strings.filter(str => {
        const foundVowels = new Set()
        for (const char of str.toLowerCase()) {
            if (vowels.includes(char)) {
                foundVowels.add(char)
            }
        }
        return foundVowels.size === 1
    })
}


function multiFilter(arr) {
    arr = filterC(arr);
    arr = filterN(arr);
    arr = filterT(arr);
    arr = filterR(arr);
    return arr;
}

function filterC(arr) {
    return arr.filter(a => a.capital.length >= 8)
}

function filterN(arr) {
    return arr.filter(a => !['a', 'e', 'i', 'o', 'u'].includes(a.name[0].toLowerCase()))
}

function filterT(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return arr.filter(a => vowels.some(vowel => a.tag.toLowerCase().includes(vowel)))
}

function filterR(arr) {
    return arr.filter(a => a.region !== "South")
}
