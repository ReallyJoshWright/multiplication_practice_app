function question() {
  let num1 = Math.random() * 12 + 1;
  let num2 = Math.random() * 12 + 1;
  num1 = Math.floor(num1);
  num2 = Math.floor(num2);

  let label = '<label id="label">';
  label += num1 + " x " + num2 + "</label>";

  document.getElementById("question").innerHTML = label;
}

function check() {
  let text = document.getElementById("label").innerText;
  let arr = text.split("x");
  let input = document.getElementById("input").value;
  let answer = arr[0] * arr[1];
  if (answer != input) {
    alert("You got the wrong answer: " + input + ", try again!");
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
  }
  else {
    question();
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
  }
}

question();
