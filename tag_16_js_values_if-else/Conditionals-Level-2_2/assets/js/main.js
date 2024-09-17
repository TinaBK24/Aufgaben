const range = document.querySelector("#range");
range.addEventListener("input", checkAirQuality);

function checkAirQuality() {
    const airQualityIndex = range.value;

    const luft = document.querySelector("#aqi");
    luft.textContent = `Luftqualität: ${airQualityIndex}`;


    const body = document.querySelector("body");
    let concernResult;
    let effectResult;

    if (airQualityIndex <= 50) {
        concernResult = "Good";
        effectResult = "Little or no risk";
        body.style.backgroundColor = "green";
    } else if (airQualityIndex > 50 && airQualityIndex <= 100) {
        concernResult = "Moderate";
        effectResult = "Acceptable quality";
        body.style.backgroundColor = "yellow";
    } else if (airQualityIndex > 100 && airQualityIndex <= 150) {
        concernResult = "Unhealthy";
        effectResult = "Generable publics not likely affected";
        body.style.backgroundColor = "orange";
    }

    const concern = document.querySelector("#concern");
    concern.textContent = `Level of health concern: ${concernResult}`

    const effect = document.querySelector("#effect");
    effect.textContent = `Level of health effect: ${effectResult}`;
}