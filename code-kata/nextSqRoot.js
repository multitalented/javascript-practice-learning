function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise

  // take the square root of the number
  // if a decimal, then return -1

  const sqRoot = Math.sqrt(sq);

  if (Number.isInteger(sqRoot)) {
    // console.log("Is a perfect square!");
    return Math.pow(sqRoot+1, 2);

  } else {
    return -1;
    // console.log("Not a perfect square.");
  }

  // return -1;
}


let num = 36;
console.log(findNextSquare(num));
