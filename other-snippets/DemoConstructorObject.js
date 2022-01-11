var dessert = { type: 'pie'};
dessert.type = 'pudding';

console.log(dessert.type);

var seconds = dessert;
// var seconds = { type: 'pie'};
seconds.type = 'fruit';

console.log(dessert.type);

dessert.type = 'cake';

console.log(seconds.type);


function Dessert(type, color, temperature){
    this.type = type;
    this.color = color;
    this.temperature = temperature;
}

var puddingD = new Dessert("pudding", "yellow", "hot");
var fruitD = new Dessert("fruit", "red", "cold");
var cakeD = new Dessert("cake", "white", "room");

console.log(puddingD.type);

fruitD.type = "chocolate";

console.log(puddingD.type);