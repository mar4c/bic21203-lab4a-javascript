const generateBtn = document.getElementById("generateBtn");

function generateNumbers() {
  let list = document.getElementById("numberList");
  list.textContent = "";

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "The number is " + i;
    list.appendChild(li);
  }
}

generateBtn.addEventListener("click", generateNumbers);
