function marioPyramid( height ) {
  var bottomRow = height += 1;

  var pyramid = "\n";


  for (var i=1; i < height; i ++) {
    var currentRow = i;
    var numHashes = currentRow += 1;
    var numSpaces = bottomRow - numHashes;

    pyramid += " ".repeat(numSpaces);
    pyramid += "#".repeat(numHashes) + "\n";
  }

  console.log(pyramid);
}



marioPyramid(5);
