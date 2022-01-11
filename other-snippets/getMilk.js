function getMilkOriginal() {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}


function getMilk(dollars) {
  var cost = 1.5;
//   var bottles = (dollars - dollars%cost)/cost;
  var bottles = Math.floor(dollars/cost);
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveUp");
  console.log("buy " + bottles + " bottles of milk")
  console.log("moveRight");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(8);
