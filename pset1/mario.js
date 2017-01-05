function marioPyramid( height ) {
  // We need to know the length of the bottom row to calculate the number of
  // spaces needed for the upper rows
  var bottomRow = height += 1;
  // Our pyramid starts off as a string, with a new line character entered
  // so it doesn't look wierd when its rendered
  var pyramid = "\n";

  for (var i=1; i < height; i ++) {
    // initilize the number of the currentRow, not necessary but looks better
    var currentRow = i;
    // The # of hashes is always the current row + 1
    var numHashes = currentRow += 1;
    // The # of spaces needed before the hashes start is the # of hashes in the
    // bottom row subtracted by the # of hashes in the current row
    var numSpaces = bottomRow - numHashes;
    // This concats the spaces repeated by the numSpaces variables
    pyramid += " ".repeat(numSpaces);
    // This concats the hashes repeeated by the numHashes variable which ends
    // the line, thus adding a new line char
    pyramid += "#".repeat(numHashes) + "\n";

    // This loop repeats until it hits the given height
  }
  // logs the pyramid, for lack of better presentation
  console.log(pyramid);
}



marioPyramid(5);
