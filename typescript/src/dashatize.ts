export const dashatize = (num: number): string => {

    if (num < 0) {
        const numString = num.toString().replace('-', '');
        return dashatize(Number(numString));
    }



    if (Number.isNaN(num)) {
        return 'NaN';
    }

    const numString = num.toString();
    const numArray: any = numString.split('');
    const dashArray = [];

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 !== 0) {
            dashArray.push(`-${numArray[i]}-`);
        } else {
            dashArray.push(numArray[i]);
        }
    }

    const dashString = dashArray.join('');
    return dashString.replace(/--/g, '-').replace(/^-/, '').replace(/-$/, '');
};