const number = document.querySelector(".number");
const buttons = document.querySelector(".buttons");

runEvents();

function runEvents() {
    buttons.addEventListener("click", exe)
}

let numberValue = 0;

function exe(e) {
    const getExe = e.target.className;
    if (getExe === "decrease") {
        numberValue = numberValue - 1;
        number.textContent = `${numberValue}`;
    }
    if (getExe === "reset") {
        numberValue = 0;
        number.textContent = `${numberValue}`;
    }
    if (getExe === "increase") {
        numberValue = numberValue + 1;
        number.textContent = `${numberValue}`;
    }
}