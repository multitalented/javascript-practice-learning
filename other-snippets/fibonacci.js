
function fibonacciGenerator(n) {
var sequence = [];
    for (var i = 0; i < n; i++)
    {
        if (i===0) //(n===1)
        {
            sequence.push(0);
        }
        else if (i===1) //(n===2)
        {
            sequence.push(1);
//             sequence.push(0,1)
        }
        else
        {
            sequence.push(sequence[i-1]+sequence[i-2]);
        }  
    }
    return sequence;
}

output = fibonacciGenerator(10);
console.log(output);