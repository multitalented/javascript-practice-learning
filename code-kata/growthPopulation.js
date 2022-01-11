function nbYear(p0, percent, aug, p){
  let pnew=0;
  let years=0;
  while(pnew<p){
    pnew = p0 + p0*percent/100 + aug;
    p0=pnew;
    years++;
  }
  // console.log(years);
  return years;
}

console.log(nbYear(1500, 5, 100, 5000)); // should return 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // should return 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // should return 94

console.log(nbYear(100, 0, 10, 200)); // should return 94
