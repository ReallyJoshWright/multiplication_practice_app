function multiplicationTable() {
  let table='<table id="mtable"';
  let num1 = 1;
  let num2 = 12;

  for (i = 1; i < 13; i++) {
    table += "<tr>";
    for (let num = num1; num <= num2; num++) {
      table += "<td>" + num * i + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("result").innerHTML = table;
}

multiplicationTable();
