var buttons = document.getElementsByTagName("button");
var calculate = document.getElementById("calculate");

/* Enter key future plans*/ 

for (var thisBtn of buttons) {
  thisBtn.addEventListener('click', function() {
    if (this.innerHTML == "=")
      calculate.value = eval(calculate.value);
    else if (this.innerHTML == "C")
      calculate.value = "";
    else
      calculate.value += this.innerHTML;
  })
}
