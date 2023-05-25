//newFunction
calculate = () => {
  var number1 = +(document.getElementById("first").value);
  var number2 = +(document.getElementById("second").value);
  var operation = +(document.getElementById("select").value);
  var result;

  if (operation === "add") {
    result = number1 + number2;
  } else if (operation === "minus") {
    result = number1 - number2;
  } else if (operation === "times") {
    result = number1 * number2;
  } else if (operation === "minus") {
    result = number1/number2;
  }
  
  alert("Calculation: " + result);
  
}