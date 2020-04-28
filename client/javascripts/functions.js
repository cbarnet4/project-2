// jshint esversion: 6
let revWord = (str) => {
    let arr = str.split('');
    let result = '';
    for (char of arr){
        result = char + result;
    }
    return result;
  };

let revWords1 = (input) => {
    separateWords = input.split(' ');
    process = '';
    for (let i = 0; i < separateWords.length; i++) {
        process = '';
        for (let j = separateWords[i].length  - 1; j >= 0; j--) {
            process += separateWords[i][j];
        }
        separateWords[i] = process;
        finalWords = separateWords.join(' ');
    }
    return finalWords;
};

let revWords2 = (input) => {
  [input].forEach(x => {
    let separateWords = input.split(' ');
    process = '';
    for (let i = 0; i < separateWords.length; i++) {
        process = '';
        for (let j = separateWords[i].length - 1; j >= 0; j--) {
            process += separateWords[i][j];
        }
        separateWords[i] = process;
        finalWords = separateWords.join(' ');
    }
  });
    return finalWords;
};

let revWords3 = (input) => {
  [input].forEach(x => {
    separateWords = input.split(' ');
    process = '';

    for (let i = 0; i < separateWords.length; i++) {
        process = '';
        for (let j = separateWords[i].length - 1; j >= 0; j--) {
            process += separateWords[i][j];
        }
    for (char of separateWords) {    //gave up on for/of.
        separateWords[i] = process;
        finalWords = separateWords.join(' ');
    }
  }
  });
    return finalWords;
};

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
