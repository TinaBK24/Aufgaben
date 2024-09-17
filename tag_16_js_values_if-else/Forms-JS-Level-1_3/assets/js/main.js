function differenz() {
    const alter1Input = document.querySelector("#alter1");
    const zahl1 = parseInt(alter1Input.value, 10);

    const alter2Input = document.querySelector("#alter2");
    const zahl2 = parseInt(alter2Input.value, 10);

    const differenzResult = zahl1 - zahl2;

    const result = document.querySelector("#result");
    result.textContent = differenzResult;
}

const button = document.querySelector("#button");
button.addEventListener("click", differenz);