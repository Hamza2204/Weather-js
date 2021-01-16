

let cityName = document.querySelector('.city-name');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.weather-desc');
let weatherIcon = document.querySelector('.icon');
let inputValue = document.querySelector('.search');


inputValue.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
        let value = e.target.value;
        getWeatherInfo(value);
    }
});

function getWeatherInfo(name){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=49adec57e41fc269a83c5007c4a52a51&units=imperial`;
    fetch(api)
    .then((response) => response.json())
    .then((data) => updateWeatherInfo(data));
};

function updateWeatherInfo(data){
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    cityName.innerHTML = data.name;
    temperature.innerHTML = ~~data.main.temp;
    description.innerHTML = `${data.weather[0].description}, Humidity: ${data.main.humidity}%`;
};