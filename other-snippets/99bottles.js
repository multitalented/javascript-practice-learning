n = 99;
function beer() {
    while(n>2)
    {
        lyric = n + " bottles of beer on the wall, " + n + " bottles of beer. Take 1 down, pass it around, " + (n-1) + " bottles of beer on the wall."
        console.log(lyric);
        n--;
    }
    var bottleWord = " bottles";
    while(n>0) 
    {
        if (n==1){bottleWord = " bottle";}
        lyric = n + bottleWord + " of beer on the wall, " + n + bottleWord + " of beer. Take 1 down, pass it around, ";
        n--; 
        if (n==1) {bottleWord = " bottle";}
        else {bottleWord = " bottles";}
        lyric = lyric + n + bottleWord + " of beer on the wall."
        console.log(lyric);
    }
    lyric = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
    console.log(lyric);
    n=99;
}