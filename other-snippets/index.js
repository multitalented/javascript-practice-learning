// alert("Hello");
// alert("World!");
// window.alert("hello!");

// var myName = "Deanna";
// var yourName = prompt("My name is " + myName + ". What is your name?");
// alert("Nice to meet you, " + yourName);

// // // Video 109 Challenge
// tweet = prompt("Compose your tweet here:");
// tweetCount = tweet.length;
// maxTweet = 30;
// remainCount = maxTweet - tweetCount;

// slicedTweet = tweet.slice(0,maxTweet);

// alert(slicedTweet);

// if (tweetCount >= maxTweet) {
//     alert("You have typed " + tweetCount + " characters. You need to cut off " + -remainCount + " characters!");
// }
// else {
//     alert("You have typed " + tweetCount + " characters. You have " + remainCount + " characters left you can type.");
// }

// Quicker way!
// alert(prompt("Compose your message: ").slice(0,30));


// var name = "Deanji";
// alert( name.slice(3,5) );
// slice(x, y) slices from x to y 

// var name = "Deanna";
// name.toUpperCase();
// name.toLowerCase();

// // Video 111-112 challenge
// var name = prompt("What is your name?");
// alert("Hello, " + name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase());

// var x = 3;
// var y = x++;
// y += 1;

// function getMilk(dollars) {   
//   var cost = 1.5;
// //   var bottles = (dollars - dollars%cost)/cost;
//    var bottles = Math.floor(dollars/cost);
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("buy " + bottles + " bottles of milk")
//   console.log("moveRight");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }

// getMilk(8);


// // Videwo 120 challenge
// function lifeInWeeks(age) {
// // var weeksPerYear = 52;
// // var maxAge = 90;
// // var weeksLife = (maxAge - age) * weeksPerYear;
//     var yearsRemaining = 90-age;
//     var days = 365 * yearsRemaining;
//     var weeks = 52 * yearsRemaining;
//     var months = 12 * yearsRemaining;
//     console.log("You have " + days + " days, or " + weeks + " weeks, or " + months + " months remaining");
// }

// // console.log(lifeInWeeks(51));
// lifeInWeeks(30);


// Video 125
// Random number generation with a uniform distribution from 0 - 0.9999999999999 
//  Multiply by the max range you want and floor number and add one if needed to get random number integer
var n = Math.random();
n = n*6;
n = Math.floor(n) + 1;
console.log(n);

// Video 125 Challenge, Love Calculator

function loveCalculator() {
    loveScore = Math.floor(Math.random()*100) + 1;
    return loveScore;
}

firstName = prompt("What is the first name?");
secondName = prompt("What is the second name?");
loveChance = loveCalculator();

// JavaScript uses === and == for equal comparison 
// === checks for matching value AND data type
// == checks for matching value but NOT the data type
// and !== for not-equal comparison

var loveMessage = " ...Good luck with that.";

    if (loveScore >= 66) {
        loveMessage = " Get the wedding started, they must be made for each other!";
    }
    // Combining operators in JavaScript is just && for AND and || for OR
//     if (loveScore >= 33 && loveScore < 66) {
//         loveMessage = " Pretty average, but take what you can get."
//     }
    else if (loveScore >= 33) {
        loveMessage = " Pretty average, but take what you can get."
    }

alert(firstName + " and " + secondName + " have a " + loveChance + "% chance of being together." + loveMessage);