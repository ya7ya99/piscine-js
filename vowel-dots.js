const vowels = /[aioue]/ig

function vowelDots(str) {
    return str.replace(vowels, '$&.')
}

