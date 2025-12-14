
const mathInput = document.getElementById("math");
const engInput = document.getElementById("english");
const submitBtn = document.getElementById("submitBtn");
const tbody = document.querySelector("#gradeTable tbody");

submitBtn.addEventListener("click", function () {
  const math = Number(mathInput.value);
  const eng = Number(engInput.value);

  if (isNaN(math) || isNaN(eng)) return;

  addRow(math, eng);
  updateColumnAverages();

  mathInput.value = "";
  engInput.value = "";
});

function updateColumnAverages() {
  let mathSum = 0, engSum = 0;
  const rows = tbody.rows;

  for (let row of rows) {
    mathSum += Number(row.cells[1].textContent);
    engSum += Number(row.cells[2].textContent);
  }

  const count = rows.length;
  const mathAvg = (mathSum / count).toFixed(2);
  const engAvg = (engSum / count).toFixed(2);
  const overallAvg = ((mathSum + engSum) / (count * 2)).toFixed(2);

  document.getElementById("mathAvg").textContent = mathAvg;
  document.getElementById("engAvg").textContent = engAvg;
  document.getElementById("overallAvg").textContent = overallAvg;
}

function addRow(math, eng) {
  const rowCount = tbody.rows.length + 1;
  const avg = ((math + eng) / 2).toFixed(2);

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${rowCount}</td>
    <td>${math}</td>
    <td>${eng}</td>
    <td>${avg}</td>
  `;
  tbody.appendChild(tr);
}
if (mathInput.value === "" || engInput.value === "") return;
