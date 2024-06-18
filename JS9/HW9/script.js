// 1

const logItems = function (array) {
    for (let i = 0; i < array.length; i++){
        console.log(`${i + 1} - ${array[i]}`);
    }
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// 2
const calculateEngravingPrice = function (message, pricePerWord) {
    const words = message.split(' ');
    const numberOfWords = words.length;
    const totalPrice = numberOfWords * pricePerWord;
    return totalPrice;
}
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10
  )
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20
  )
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)
);


// 3

const findLongestWord = function (string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (let i = 0; i < words.length; i++){
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));


// 4
const formatString = function (string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + '...';
    }
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));


console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);


// 5
const checkForSpam = function (message) {
    const lowerCase = message.toLowerCase();
    return lowerCase.includes('spam') || lowerCase.includes('sale');
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter')); 
console.log(checkForSpam('Get best sale offers now!')); 
console.log(checkForSpam('[SPAM] How to earn fast money?'));