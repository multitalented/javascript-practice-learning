// Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  let sides = [a, b, c];
  sides.sort(function(a, b) {
    if (a < b) {
      return a - b;
      if (a > b)
        return b - a;
    }
  });
  console.log(sides);

  if (sides[0] + sides[1] > sides[2]) {
    return true;
  } else {
    return false;
  }
}

function isTriangle2(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

function isTriangle3(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
let a = 2, b = 3, c = 0;
console.log(isTriangle(a, b, c));
console.log(isTriangle2(a, b, c));
console.log(isTriangle3(a, b, c));
