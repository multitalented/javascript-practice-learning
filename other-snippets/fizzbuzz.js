var output = [];
var output2 = [];
var count = 1;
var count2 = 1;

// How I preferred to do the first FizzBuzz challenge (putting it all in one array at once)
for(var count2=1; i <101 ; i++)
{
//     output.push(i+1);
//     if output(i)
// count2 = i+1;
    if (count2%3 === 0 && count2%5 === 0) {
            output2.push("FizzBuzz");
        }
        else if (count2%3 === 0) {
            output2.push("Fizz");
        }
        else if (count2%5 === 0) {
            output2.push("Buzz");
        }
        else {
            output2.push(count2);
    }
}

// How Angela asked to do the first FizzBuzz challenge (call FizzBuzz() function to add number or Fizz or Buzz or FizzBuzz to array)
// She then modified to add a while loop. Added for completeness of proper JavaScript syntax for while loops
function fizzBuzz() {

    while(count<=100)
    {
        if (count%3 === 0 && count%5 === 0) {
            output.push("FizzBuzz");
        }
        else if (count%3 === 0) {
            output.push("Fizz");
        }
        else if (count%5 === 0) {
            output.push("Buzz");
        }
        else {
            output.push(count);
        }

        count++;
    }
        console.log(output);
}


