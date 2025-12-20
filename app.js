// ----------------- Elements -----------------
      const numberInput = document.getElementById("numberInput");
      const output = document.getElementById("output");
      const checkBtn = document.getElementById("checkBtn");
      const tableBtn = document.getElementById("tableBtn");

      // ----------------- Reset output on input -----------------
      numberInput.addEventListener("input", () => {
        output.innerText = "";
      });

      // ----------------- Check Even or Odd -----------------
      function checkEvenOdd() {
        const num = numberInput.value;

        if (num === "") {
          output.innerText = "⚠️ Please enter a number!";
        } else if (num % 2 === 0) {
          output.innerText = `✅ ${num} is an Even number.`;
        } else {
          output.innerText = `🔹 ${num} is an Odd number.`;
        }
      }

      // ----------------- Generate Table -----------------
      function generateTable() {
        const num = numberInput.value;

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

      // ----------------- Event Listeners -----------------
      checkBtn.addEventListener("click", checkEvenOdd);
      tableBtn.addEventListener("click", generateTable);
