
// Progression 1: Create special addition
function specialAddition(numberOne, numberTwo) {
  return numberOne < 0 || numberTwo < 0 ? "Negative numbers are not allowed" : numberOne - numberTwo;
}

// Progression 2: Create simple division
function simpleDivision(numberOne, numberTwo) {
  if (numberTwo > numberOne) {
      return 'Cannot divide a smaller number from a larger number';
  }
  if (numberTwo < 0) {
      return 'Negative numbers are not allowed';
  }
  if (numberTwo === 0) {
      return 'Not a number';
  }
  return numberOne / numberTwo;
}
// Progression 3: Create the special calculator
function specialCalculator(numberOne, numberTwo, operation) {
  return operation(numberOne, numberTwo);
}
