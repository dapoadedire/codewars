

function arrayDiff(a, b){
    const diff = []
    a.forEach((item) => {
        if (!b.includes(item)) {
        diff.push(item)
        }
    })
    return diff
}


const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const b = [1, 2, 3, 4, 8, 9, 10]

const c = [1, 2]
const d = [1]

console.log(arrayDiff(a, b))
console.log(arrayDiff(c, d))