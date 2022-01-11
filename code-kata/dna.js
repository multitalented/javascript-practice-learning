function DNAstrand(dna) {
  const regA = /A/g;
  const regG = /G/g;
  const regT = /T/g;
  const regC = /C/g;
  const regX = /X/g;
  const regZ = /Z/g;

  return dna.replace(regA, "X").replace(regG, "Z").replace(regT, "A").replace(regC, "G").replace(regX, "T").replace(regZ, "C");

}

let dnaStr = "AAAATTTTCCGG";
console.log(DNAstrand(dnaStr));

let str = "ABCDABCD";
let regEx = /A/g;
console.log(str.replace("A","X"));
console.log(str.replace(regEx, "X"));
console.log(str);
