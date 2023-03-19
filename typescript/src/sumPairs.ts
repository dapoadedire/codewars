export function sumPairs(ints: number[], s: number): [number, number] | void {

    const sums: {
        [key: number]: [number, number]
    } = {};
    for (let i = 0; i < ints.length; i++) {
        for (let j = i + 1; j < ints.length; j++) {
            if (ints[i] + ints[j] === s) {
                const a = ints[i];
                const b = ints[j];
                const sum = a + b;
                const indexOfB = ints.indexOf(b);
                console.log(indexOfB);
                
                if (sums[indexOfB] === undefined) {
                    sums[indexOfB] = [a, b];
                }
            
            }
        }
    }


    const sumKeys = Object.keys(sums);
    if (sumKeys.length === 0) {
        return undefined;
    }
    const smallestSum = Math.min(...sumKeys.map(s => parseInt(s)));
    return sums[smallestSum];
}



const ex1 = sumPairs([1, 4, 8, 7, 3, 15], 8);
console.log(ex1);
const ex2 = sumPairs([1, -2, 3, 0, -6, 1], -6);
console.log(ex2);
const ex3 = sumPairs([20, -13, 40], -7);
console.log(ex3);
const ex4 = sumPairs([1, 2, 3, 4, 1, 0], 2);
console.log(ex4);

// failing test 5
const ex5 = sumPairs([10, 5, 2, 3, 7, 5], 10);
console.log(ex5);
const ex6 = sumPairs([4, -2, 3, 3, 4], 8);
console.log(ex6);
const ex7 = sumPairs([0, 2, 0], 0);
console.log(ex7);
const ex8 = sumPairs([5, 9, 13, -3], 10);
console.log(ex8);
