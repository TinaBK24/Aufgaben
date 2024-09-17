function multipliziert() {
    const numberInput = document.querySelector("#numberinput");
    const number = parseInt(numberInput.value, 10);

    const multipliziertResult = 2 * number;
    console.log(multipliziertResult);

    const result = document.querySelector("#result");
    result.textContent = multipliziertResult;
}

const button = document.querySelector("#button");
button.addEventListener("click", multipliziert);