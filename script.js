const WEATHER_KEY = '87ba786be6669558fec733774396e761'
const WEATHER_API = 'https://api.openweathermap.org/data/2.5/'

const date = document.querySelector('.weather-date'),
      search = document.querySelector('.weather-search input'),
      city = document.querySelector('.weather-city'),
      high = document.querySelector('.weather-high'),
      low = document.querySelector('.weather-low')
      
search.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        fetch(`${WEATHER_API}weather?q=${search.value}&appid=${WEATHER_KEY}`)
        .then((res)=> res.json())
        .then((data)=> info(data))
    }
})

function info(data) {
    console.log(data.sys);
    city.innerHTML = data.name
    high.innerHTML = Math.round(data.main.temp_max - 273.15) + '°C'
    low.innerHTML = Math.round(data.main.temp_min - 273.15) + '°C'
}