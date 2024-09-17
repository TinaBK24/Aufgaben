function adult() {
    const alterInput = document.querySelector("#alter");
    const alter = parseInt(alterInput.value, 10);

    if (alter >= 18) {
        const result = document.querySelector("p");
        result.textContent = "Volljährig";
    } else {
        const result = document.querySelector("p");
        result.textContent = "Minderjährig";
    }
}

const button = document.querySelector("#button");
button.addEventListener("click", adult);