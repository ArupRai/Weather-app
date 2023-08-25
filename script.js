const apiKey = '24269dcd959832c1aa319705994436cd';
const weatherIcon = document.querySelector('.weatherIcon');
const errorMsg = document.querySelector('.error');
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBar = document.querySelector('.searchBar');
const button = document.querySelector('.searchIcon');

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
    if (response.status === 404) {
        errorMsg.style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.detail').style.display = 'none';
    } else {
        errorMsg.style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.detail').style.display = 'flex';

        switch (data.weather[0].main) {
            case 'Rain':
                weatherIcon.src = 'images/Rain.png';
                break;
            case 'Clear':
            case 'Sunny':
                weatherIcon.src = 'images/Clear.png';
                break;
            case 'Clouds':
                weatherIcon.src = 'images/Clouds.png';
                break;
            case 'Drizzle':
                weatherIcon.src = 'images/Drizzle.png';
                break;
            case 'Mist':
            case 'Haze':
                weatherIcon.src = 'images/Mist.png';
                break;
            case 'Snow':
            case 'Frost':
            case 'Ice':
                weatherIcon.src = 'images/Snow.png';
                break;
        }

        document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.City').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed} Km/h`;
    }
}

button.addEventListener('click', () => {
    checkWeather(searchBar.value);
});

$(document).ready(function () {
    var autocomplete;
    var id = 'searchBar';

    autocomplete = new google.maps.places.Autocomplete((document.getElementById(id)), {
        types: ['geocode'],
    });
});