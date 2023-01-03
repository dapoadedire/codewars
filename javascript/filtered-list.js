function filter_list(list) {
  return list.filter(item => typeof item === 'number');
}


console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));




// CodeWars Link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript