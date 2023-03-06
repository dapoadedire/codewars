
export function reverseWords(str: string): string {
    let reversed: string = "";
    const str_list: string[] = str.split(" ");
    for (let i = 0; i < str_list.length; i++) {
        const word: string = str_list[i];
        const reversed_word: string = word.split("").reverse().join("");
        reversed += reversed_word + " ";
    }
    return reversed.trim();
};


console.log(reverseWords('The quick brown fox jumps over the lazy dog.') == 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple') == 'elppa');

