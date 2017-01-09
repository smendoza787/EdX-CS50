function initialsPlease(first, middle, last) {
  // grab the first letter of each name passed
  var letter1 = first[0];
  var letter2 = middle[0];
  var letter3 = last[0];

  // concat each letter and return
  return letter1 + letter2 + letter3;
}

console.log( initialsPlease( "Patrick", "Pink", "Star" ) );
