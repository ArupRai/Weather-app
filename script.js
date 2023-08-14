const apiKey = '';
const weatherIcon = document.querySelector('.weatherIcon');
const errorMsg = document.querySelector('.error');
const apiUrl = '';
const searchBar = document.querySelector('.searchBar').value;
const button = document.querySelector('.searchIcon');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const temp = document.querySelector('.temperature');
const city = document.querySelector('.City');



async function checkWeather($searchBar){
    const response = await fetch(apiUrl+apiKey+`${searchBar}&unit=matrix`);
    const data = response.json();
    if(response.status == 404){
        errorMsg.display ='block';
        // detail.display = 'none';
        // weather.display = 'none';
    }else{
        weatherIcon.src.value = //'/images/{somthing}.png'
        temp.innerHTML;
        city.innerHTML;
        humidity.innerHTML;
        wind.innerHTML;
        errorMsg.display ='none';
        // weather.display = 'block';
        // detail.display = 'block';
    }
}
button.addEventListener('click', checkWeather);
