var guestList = ["Deanna", "Fergie", "Matt"]

console.log(guestList.length);
console.log(guestList.includes("Matt"));
console.log(guestList.includes("Sally"));

nameCheck = prompt("What is your name?");
if (guestList.includes(nameCheck)){
    alert("Welcome!");
}
else {
    alert("Sorry, maybe next time...");
}