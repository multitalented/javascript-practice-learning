let regExp = /[\d]/g;          // regular expression, \d means any digit 0-9 , +means find consecutively, g means do it for ALL matches
let str = "app9lib3bi2es";    // my made-up string with multiple numbers to test

console.log(regExp.test(str)); // this one returns true, b/c yes there is a digit (the regular expression pattern was found)

console.log(str.search(regExp));                // returns 3, the position where only the FIRST regExp is found (unchanged by added global g)
console.log(str.replace(regExp, "NUMBER"));     // returns a string where NUMBER replaces only where the FIRST regExp is found unless global g is added
console.log(str.split(regExp));                 // returns an array of 4 strings split up by the 3 numbers (regExp) found (unchanged by added global g)
console.log(str.match(regExp));                 // returns an array of the matches in string


str = "app987lib654bi32es";
console.log(str.search(regExp));
console.log(str.replace(regExp, "NUMBER"));
console.log(str.split(regExp));
console.log(str.match(regExp));


regExp = /[\d]+/g;
console.log(str.search(regExp));
console.log(str.replace(regExp, "NUMBER"));
console.log(str.split(regExp));
console.log(str.match(regExp));


// var regex = /[,:.]/;            // delimiters are comma, colon, and period
// var str = 'Tim:20,Henry:30.Linda:35';

// console.log(newStr.split(regex));  // => [Tim,20,Henry,30,Linda,35]


str = "James Bond007";
regExp = /[\d]/g;

console.log(str.replace(regExp, ""));   // => James Bond


regExp = /[a-z][0-9]+/;
console.log(str.search(regExp));   // => 9. the position of d


str = "Mary: 3623, Tim: 38247932";

regExp = /[\d]/g;
console.log(str.match(regExp));      // => [3,6,2,3,3,8, etc.] each individual digit is a result .   [\d]

regExp = /[\d]+/g;
console.log(str.match(regExp));      // => [3623, 38247932] each set of consecutive digits are a result  [\d]+
