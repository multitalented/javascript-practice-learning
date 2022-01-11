function solution(str, ending) {
  return str.endsWith(ending);
}

const str = "abcdf:-(asdf";
const ending = ":-(";
console.log(solution(str, ending));

// from code-kata... wow, can't believe i didn't find that
// there was this endsWith method for strings
// was so caught up in getting into regular expressions
//    \_(-_-)_/
