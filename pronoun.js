const pronouns = ["i", "you", "he", "she", "it", "we", "they"];
function pronoun(str) {
    let res = {};
    let words = str.split(/\s+/).map(word => word.replace(/[.,!?]/g, '').toLowerCase());
    for (let i = 0; i < words.length; i++) {
        if (pronouns.includes(words[i])) {
            if (!res[words[i]]) {
                res[words[i]] = { count: 0, word: [] };
            }
            res[words[i]].count++;
            const nextWord = NextWord(words.slice(i + 1));
            if (nextWord) {
                res[words[i]].word.push(nextWord);
            }
        }
    }
    return res;
}
function NextWord(words) {
    for (let i = 0; i < words.length; i++) {
        if (pronouns.includes(words[i])) {
            return;
        } else {
            return words[i];
        }
    }
}

console.log(pronoun("I think you think he knows she knows it too"));
