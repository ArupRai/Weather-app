const apiKey = '24269dcd959832c1aa319705994436cd';
let weatherIcon = document.querySelector('.weatherIcon');
const errorMsg = document.querySelector('.error');
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const searchBar = document.querySelector('.searchBar');
const button = document.querySelector('.searchIcon');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    if (response.status == 404) {
        errorMsg.style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.detail').style.display = 'none';
    } else {
        errorMsg.style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.detail').style.display = 'flex';

        if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images\\Rain.png";
        }
        if (data.weather[0].main == "Clear" || data.weather[0].main == "Sunny") {
            weatherIcon.src = "images\\Clear.png";
        }
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images\\Clouds.png";
        }
        if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images\\Drizzle.png";
        }
        if (data.weather[0].main == "Mist" || data.weather[0].main == "Haze") {
            weatherIcon.src = "images\\Mist.png";
        }
        if (data.weather[0].main == "Snow" || data.weather[0].main == "Frost" || data.weather[0].main == "Ice") {
            weatherIcon.src = "images\\Snow.png";
        }

        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.City').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main["humidity"] + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h";
    }
}
button.addEventListener('click', () => {
    checkWeather(searchBar.value);
});
