function findNumberOfOccurrences(arr: number[], value: number) {
    let count = 0;
    arr.forEach((item) => {
        if (item === value) {
            count++;
        }
    })
    return count;
}



export function findUniq(arr: number[]): number {
    const uniqueValues: number[] = [];
    arr.forEach((item) => {
        if (findNumberOfOccurrences(arr, item) === 1) {
            uniqueValues.push(item);
        }
    })
    return uniqueValues[0];
}

console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55