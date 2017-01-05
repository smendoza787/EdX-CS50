function greedyChange( input ) {
  // assign input to changeTotal for eadability
  var changeTotal = input;
  // convert float to integer
  changeTotal *= 100;
  // make an array of coins to loop through
  var coins = [25, 10, 5, 1];
  // make a variable to hold the current number of coins dispensed
  var numCoins = 0;

  // this loop will run while the changeTotal isn't 0 meaning there is still
  // change to dispense
  while (changeTotal !== 0) {
    // this loop will run through the coins array
    for (var i=0; i < coins.length; i++) {
      // this loop will run until the coin amount is larger than the change left
      while (coins[i] <= changeTotal) {
        // if the coin is less than the changeTotal it will subtract from the
        // changeTotal and add to the numCoins value
        changeTotal -= coins[i];
        numCoins++;
      }
    }
  }

  console.log( numCoins );
}

greedyChange(0.95);
