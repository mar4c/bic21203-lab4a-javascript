const checkBtn = document.getElementById("checkBtn");

function checkInput() {
  let text = document.getElementById("userInput").value.trim();
  let x = Number(text);
  let result = document.getElementById("result");

  if (text == "" || isNaN(x)) {
    result.textContent = "Please enter a valid number!";
  } else if (x < 10) {
    result.textContent = "The number is lower than 10";
  } else if (x > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);
