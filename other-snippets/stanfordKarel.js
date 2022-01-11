/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/

 // goes with http://stanford.edu/~cpiech/karel/ide.html

function main(){
   rowsThreePlace();
   leftTurnNext();
   rowsTwoPlace();
   rightTurnNext();
   rowsThreePlace();
   leftTurnNext();
   rowsTwoPlace();
   rightTurnNext();
   rowsThreePlace();
}
function leftTurnNext() {
   turnLeft();
   move();
   turnLeft();
}
function rightTurnNext() {
   turnRight();
   move();
   turnRight();
}
function rowsTwoPlace() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
function rowsThreePlace() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
function diagonalPlaceBeeper() {
      putBeeper();
      move();
      turnLeft();
      move();
      turnRight();

}
