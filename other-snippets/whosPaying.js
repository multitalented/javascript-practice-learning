names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    
/******Don't change the code above*******/
numberNames = names.length;
randPerson = Math.floor(Math.random()*numberNames);
return names[randPerson];

/******Don't changge the code below*******/    
}

console.log(whosPaying(names));