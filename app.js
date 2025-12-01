function checkEvenOdd() {
  const num = document.getElementById("numberInput").value;
  const output = document.getElementById("output");

  if (num === "") {
    output.innerText = "⚠️ Please enter a number!";
  } else if (num % 2 === 0) {
    output.innerText = `✅ ${num} is an Even number.`;
  } else {
    output.innerText = `🔹 ${num} is an Odd number.`;
  }
}

function generateTable() {
  const num = document.getElementById("numberInput").value;
  const output = document.getElementById("output");

  if (num === "") {
    output.innerText = "⚠️ Please enter a number!";
    return;
  }

  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${num} × ${i} = ${num * i}\n`;
  }
  output.innerText = table;
}
