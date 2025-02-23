const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedWord = word
        .toLoweredCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');
    
    const reversedWord = cleanedWord.split('').reverse().join('');

    return cleanedWord === reversedWord;


};

// Do not edit below this line
module.exports = palindromes;
