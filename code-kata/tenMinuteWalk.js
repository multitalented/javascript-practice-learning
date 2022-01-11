function isValidWalk(walk) {
  //insert brilliant code here
  let n = 0,
    s = 0,
    w = 0,
    e = 0;
  console.log(walk);

  if (walk.length === 10) {
    walk.forEach(function(direction) {

      switch (direction) {
        case "n":
          n++;
          break;
        case "s":
          s++;
          break;
        case "w":
          w++;
          break;
        case "e":
          e++;
          break;
          // default:
          //   console.log("Not valid direction");
      }
    });
  } else {
    console.log("n: " + n + "   s: " + s + "    w: " + w + "    e: " + e);
    return false;
  }
  if (n === s && w === e) {
    console.log("n: " + n + "   s: " + s + "    w: " + w + "    e: " + e);
    return true;
  } else {
    console.log("n: " + n + "   s: " + s + "    w: " + w + "    e: " + e);
    return false;
  }


}

// const str = ['n','n', 's', 's', 'w', 'w', 'w', 'e', 'e', 'e'];
const str = ['e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'];
console.log(isValidWalk(str));

//
// regExp = /[\d]/g;
// console.log(str.match(regExp)); // => [3,6,2,3,3,8, etc.] each individual digit is a result .   [\d]
