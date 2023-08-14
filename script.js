const apiKey = '24269dcd959832c1aa319705994436cd';
const weatherIcon = document.querySelector('.weatherIcon');
// const errorMsg = document.querySelector('.error');
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&unit=matrix&q=';
const searchBar = document.querySelector('.searchBar');
const button = document.querySelector('.searchIcon');


async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();
    if(response.status == 404){
        errorMsg.display ='block';
        // detail.display = 'none';
        // weather.display = 'none';
    }else{
        weatherIcon.src.value = //'/images/{somthing}.png'
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp)+" C";
        document.querySelector('.City').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main["humidity"]+"%";
        document.querySelector('.wind').innerHTML = data.wind.speed+" Km/h";
        errorMsg.display ='none';
        // weather.display = 'block';
        // detail.display = 'block';
    }
}
button.addEventListener('click', ()=> {
    checkWeather(searchBar.value);
});
