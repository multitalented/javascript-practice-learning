
// Your task is to sort a given string.
// Each word in the string will contain a single number.
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string.
// The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  const uWords = words.split(' ');    // learned how to use split
  const oWords = [];
  const regExp = /[\d]/g;   // learned about regular expressions and how to use
  let objs = [];

  uWords.forEach(function(word) {
    objs.push({       // brushed up on making javascript objects
      str: word,
      place: word.match(regExp)   // learned how to use match
    });
  });

  objs.sort(compare);   // learned how to use sort() function

  objs.forEach(function(obj) {
    oWords.push(obj.str);
  });
  // console.log(oWords);
  let newStr = oWords.join(' ');    // learned how to use join()

  return newStr;
}

const words = "is2 Thi1s T4est 3a"; //  -->  "Thi1s is2 3a T4est"
console.log(order(words));

function compare(a, b) {
  if (a.place < b.place) {
    return -1;
  }
  if (a.place > b.place) {
    return 1;
  }
  return 0;
}

// solution found on codewars.com from this  codekata
function order2(words){

  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}

console.log(order2(words));
