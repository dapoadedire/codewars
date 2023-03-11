export function createPhoneNumber(numbers: number[]): string {
    const firstPart = numbers.slice(0, 3);
    const secondPart = numbers.slice(3,6);
    const lastPart = numbers.slice(6, 10);
    const finalString = `(${firstPart.join('')}) ${secondPart.join('')}-${lastPart.join('')}`;
  return finalString;
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"