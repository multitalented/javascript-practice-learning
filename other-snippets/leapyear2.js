// Video 129 Challenge, Leap year coding exercise #6
function isLeap(year) {
// check if evenly divisible by 4 (leap)
    if (year%4 === 0) 
    {
        if (year%100 === 0) 
        {
            if(year%400 === 0) 
            {
                return "Leap year";
            }
            else 
            {
                return "Not leap year.";
            }
        }
        else 
        {
            return "Leap year.";
        }
    }
    else 
    {
        return "Not leap year";
    }
}

console.log(isLeap(1900));