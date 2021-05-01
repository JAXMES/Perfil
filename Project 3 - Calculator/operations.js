var buttons = document.getElementsByTagName("button");
            var calc = document.getElementById("calc");

            for (var thisBtn of buttons) {
                thisBtn.addEventListener('click', function() {
                    if (this.innerHTML == "=")
                        calc.value = eval(calc.value);
                    else if (this.innerHTML == "C")
                        calc.value = "";
                    else
                        calc.value += this.innerHTML;
                })
            }
