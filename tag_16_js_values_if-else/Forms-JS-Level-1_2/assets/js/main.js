function altersBerechnung() {
    const jahrInput = document.querySelector("#jahr");
    const jahr = parseInt(jahrInput.value, 10);

    const aktuellesJahr = new Date().getFullYear();
    const alter = aktuellesJahr - jahr;
    console.log(alter);

    const resultAlter = document.querySelector("p");
    resultAlter.textContent = alter;
}

const button = document.querySelector("#button");
button.addEventListener("click", altersBerechnung);