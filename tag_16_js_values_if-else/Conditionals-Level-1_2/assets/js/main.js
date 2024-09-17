function weather() {
    const numberInput = document.querySelector("#number");
    const number = parseInt(numberInput.value, 10);

    if (number >= 0 && number <= 2) {
        result = "schlecht";
    } else if (number >= 3 && number <= 5) {
        result = "okay";
    } else if (number >= 6 && number <= 7) {
        result = "gut";
    } else if (number >= 8 && number <= 10) {
        result = "super";
    } else {
        result = "unbekannt";
    }


    const resultWeather = document.querySelector("p");
    resultWeather.textContent = `Die Wetter Qualität ist: ${result}`;
}

const button = document.querySelector("#button");
button.addEventListener("click", weather);