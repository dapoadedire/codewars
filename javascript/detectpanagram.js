
// const alpha = Array.from(Array(26)).map((e, i) => i + 97);
// const alphabet = alpha.map((x) => String.fromCharCode(x));

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

function isPangram(str) {
    str = str.toLowerCase()
    for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i]
        if (!str.includes(letter)) {
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))
console.log(isPangram("This is not a pangram."))