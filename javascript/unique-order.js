var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array

    // if iterable is a string, convert it to an array
    if (typeof iterable === 'string') {
        iterable = iterable.split('');
    }

    // if iterable is an array, filter out duplicates
    // filter out duplicates by comparing the current item to the previous item
    if (Array.isArray(iterable)) {
        return iterable.filter((item, index) => {
            return item !== iterable[index - 1];
        });
    }
}