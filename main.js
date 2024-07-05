const btnNum = document.getElementsByClassName("btnNum");
const btnOperator = document.getElementsByClassName("btnOperator");
const equal = document.getElementsByClassName("equal")[0];
const display = document.getElementsByClassName("display")[0];
const clear = document.getElementsByClassName("ac")[0];

console.log(btnNum);

let operator = "";
let a = 0;

for (let i = 0; i < btnNum.length; i++) {
  btnNum[i].addEventListener("click", () => {
    display.textContent += btnNum[i].textContent;
  });
}

for (let i = 0; i < btnOperator.length; i++) {
  btnOperator[i].addEventListener("click", () => {
    operator = btnOperator[i].textContent;
    a = display.textContent;
    display.textContent = "";
  });
}

equal.addEventListener("click", () => {
  let result = 0;
  if (operator === "+") {
    result = Number(a) + Number(display.textContent);
  } else if (operator === "-") {
    result = Number(a) - Number(display.textContent);
  } else if (operator === "*") {
    result = Number(a) * Number(display.textContent);
  } else if (operator === "/") {
    result = Number(a) / Number(display.textContent);
  }

  display.textContent = result;
});

clear.addEventListener("click", (display = ""));
