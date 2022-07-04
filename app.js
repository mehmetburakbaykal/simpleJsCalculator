const screen = document.getElementById("screen");
const btns = document.querySelectorAll("button");
let screenValue = "";
for (button of btns) {
  button.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "+") {
      buttonText = "+";
      screenValue += buttonText;
      screen.value = screenValue;
    }
    if (buttonText == "-") {
      buttonText = "-";
      screenValue += buttonText;
      screen.value = screenValue;
    }
    if (buttonText == "%") {
      buttonText = "/";
      screenValue += buttonText;
      screen.value = screenValue;
    }
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    }
    if (buttonText == ")") {
      buttonText = ")";
      screenValue += buttonText;
      screen.value = screenValue;
    }
    if (buttonText == "(") {
      buttonText = "(";
      screenValue += buttonText;
      screen.value = screenValue;
    }
    if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "0") {
      buttonText = "0";
      screenValue += "0";
      screen.value = screenValue;
    } else if (buttonText == "1") {
      buttonText = "1";
      screenValue += "1";
      screen.value = screenValue;
    } else if (buttonText == "2") {
      buttonText = "2";
      screenValue += "2";
      screen.value = screenValue;
    } else if (buttonText == "3") {
      buttonText = "3";
      screenValue += "3";
      screen.value = screenValue;
    } else if (buttonText == "4") {
      buttonText = "4";
      screenValue += "4";
      screen.value = screenValue;
    } else if (buttonText == "5") {
      buttonText = "5";
      screenValue += "5";
      screen.value = screenValue;
    } else if (buttonText == "6") {
      buttonText = "6";
      screenValue += "6";
      screen.value = screenValue;
    } else if (buttonText == "7") {
      buttonText = "7";
      screenValue += "7";
      screen.value = screenValue;
    } else if (buttonText == "8") {
      buttonText = "8";
      screenValue += "8";
      screen.value = screenValue;
    } else if (buttonText == "9") {
      buttonText = "9";
      screenValue += "9";
      screen.value = screenValue;
    } else if (buttonText == ".") {
      buttonText = ".";
      screenValue += ".";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    }
  });
}
