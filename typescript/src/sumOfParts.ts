// const sumOfArray = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);



// export function partsSums(ls: number[]): number[] {
//     const sums = [];
//     for (let i = 0; i < ls.length + 1; i++) {
//         sums.push(sumOfArray(ls.slice(i)));
//     }
//     return sums;
// }


// better solution.

export function partsSums(ls: number[]): number[] {
    let sum = ls.reduce((a, b) => a + b, 0);
    const runningSums = [sum];
    for (let i = 0; i < ls.length; i++) {
        sum -= ls[i];
        runningSums.push(sum);
    }
    return runningSums;
}


console.log(partsSums([0, 1, 3, 6, 10]));
console.log(partsSums([1, 2, 3, 4, 5, 6]));
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));
