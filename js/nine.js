var word = "Space";

var tempArr = word.split('');
tempArr[2] = 'i';

word = tempArr.join('');

console.log(word);