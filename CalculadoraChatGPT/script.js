let calculation = "";

function addToDisplay(value) {
  calculation += value;
  
 /* calculation += value;
 

  calculation += value;
*/
 
document.getElementById("display").value = calculation;
}

function clearDisplay() {
  calculation = 
 
"";
  
 
document.getElementById("display").value = "";
}

function calculate() {
  
 
let result = eval(calculation);
  
 
document.getElementById("display").value = result;
  calculation = 
 
"";
}