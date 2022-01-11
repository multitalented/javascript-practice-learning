function solution(str, ending) {
  console.log("str: " + str);
  console.log("ending: " + ending);
  let re, temp;

  if (ending.match(/\W/g)) {
    temp = ending.replace(/\W/g, "\\$&");
    console.log("temp: " + temp);
    re = new RegExp(`${temp}` + `\$`);
    console.log("found special characters");
    console.log("re: " + re);
  } else {
    re = new RegExp(`${ending}\\b`);
    console.log("no special characters");
  }
  // let replxaceThis = "John";
  // need a $ with regEx to match ending with end of str
  // var re = new RegExp(ending + "$", "g");
  console.log(re);

  if (str.match(re)) {
    return true;
  } else {
    return false;
  }
  // const newStr = str.replaceAll(test, "\\$&");
}

const str = "abcdf:-(";
const ending = ":-(";
console.log(solution(str, ending));

// const regEx = /\:\-\($/;
// console.log(regEx);
//
// const test = /\W/g;
// console.log(ending.match(test));
//
// const temp = ending.replaceAll(test, "\\$&");
// const regExEnd = new RegExp(`${temp}` + `\$`);
//
// console.log(regExEnd);
// console.log(str.match(regExEnd));

// const newStr = str.replaceAll(test, function(){
//
// });



// function solution(str, ending) {
//   console.log(str.search(ending));
//   console.log(str.length);
//   console.log(ending.length);
//   if (str.search(ending) >= 0) {
//     return str.search(ending) === str.length - ending.length;
//   } else {
//     return false;
//   }
// }
