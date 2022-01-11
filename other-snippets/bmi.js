 //Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// function bmiCalculator(weight, height){

// //     return Math.round(weight/(height**2));
// //     return Math.round(weight/(height*height));
//     return Math.round(weight/Math.pow(height,2));

// }

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.
*/

// var bmi = bmiCalculator(48, 1.524);

// var bmi = bmiCalculator(65, 1.8);


function bmiCalculator (weight, height) {
    var interpretaion;
    var bmi = Math.round(weight/Math.pow(height,2));
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    else if (bmi >= 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    else {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    return interpretation;
}

// resultBMI = bmiCalculator(48, 1.524);
resultBMI = bmiCalculator(60, 2);
// var bmi = bmiCalculator(65, 1.8);