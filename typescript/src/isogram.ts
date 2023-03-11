export function isIsogram(str: string): boolean {
    const lowerCaseStr = str.split('').map(s => s.toLowerCase()).join('');
    for (let i = 0; i <= lowerCaseStr.length; i++){
        let count = lowerCaseStr.split(lowerCaseStr[i]).length - 1
        if (count > 1){
           return false;
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
console.log(isIsogram("isIsogram"))
console.log(isIsogram(""))






