// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated
// by commas except for the last two names,
// which should be separated by an ampersand.
function list(names) {
  let i = 1;
  let nameList = "";
  console.log(names.length);

  names.forEach(function(name) {
    console.log(name.name);

    if (i < names.length -1) {
      nameList = nameList + name.name + ", ";
    }
    else if (i === names.length-1) {
      nameList = nameList + name.name + " & ";
    }
     else if (i === names.length) {
       nameList = nameList + name.name;
        console.log("last name on list: " + name.name);
    }
    i++;
  })
  return nameList;
}


let names = [{
  name: 'Bart'
}, {
  name: 'Lisa'
}, {
  name: 'Maggie'
}, {
  name: 'Homer'
}, {
  name: 'Marge'
}];
// console.log(names);

console.log(list(names));



// highest rated solution from codewars/code-kata
function list2(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }

console.log(list2(names));



// Example:
//
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
