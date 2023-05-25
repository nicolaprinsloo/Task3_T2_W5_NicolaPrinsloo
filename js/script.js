function calculate() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var operation = document.getElementById('operation').value;

    if (operation === '+') {
      var result = value1 + value2;
      console.log('Result: ' + result);
    } else if (operation === '-') {
      var result = value1 - value2;
      console.log('Result: ' + result);
    } else if (operation === '*') {
      var result = value1 * value2;
      console.log('Result: ' + result);
    } else if (operation === '/') {
      if (value2 !== 0) {
        var result = value1 / value2;
        console.log('Result: ' + result);
      } else {
        console.log('Error: Division by zero');
      }
    } else {
      console.log('Error: Invalid operation');
    }
  }