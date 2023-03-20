// const onesArray = Array.from({ length: n }, () => 1);


export function pyramid(n: number) {
    const pyramidArray = [];
    for (let i = 0; i < n; i++) {
        pyramidArray.push(Array.from({ length: i + 1 }, () => 1));
    }

    return pyramidArray;

}

console.log(pyramid(5));
console.log(pyramid(1));

console.log(pyramid(3));
console.log(pyramid(4));


console.log(pyramid(2));
console.log(pyramid(8));
