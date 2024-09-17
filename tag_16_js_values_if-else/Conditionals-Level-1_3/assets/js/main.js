

function rauchen(event) {
    event.preventDefault();

    const alterInput = document.querySelector("#alter");
    const alter = parseInt(alterInput.value, 10);

    let alterResult;

    if (alter >= 18) {
        alterResult = `Ja, Du kannst Shisha rauchen.`;
    } else {
        alterResult = `Du darfst noch nicht Shisha rauchen.`;
    }

    const result = document.querySelector("p");
    result.textContent = alterResult;
}

const button = document.querySelector("#button");
button.addEventListener("click", rauchen);