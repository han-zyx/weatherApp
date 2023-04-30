let fetchWeather = "/weather";

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const weatherIcon = document.querySelector('.weatherIcon i');
const weatherCondition = document.querySelector('.weatherCondition');

const tempElement = document.querySelector('.temperature span');

const locationElement = document.querySelector('.place');

const dateElement = document.querySelector('.date');



const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

dateElement.textContent = new Date().getDate() + " " + monthNames[new Date().getMonth()].substring(0, 3);



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    locationElement.textContent = "Loading...";
    tempElement.textContent = "";
    weatherCondition.textContent = "";
    const locationApi = fetchWeather + "?address=" + search.value;
    fetch(locationApi).then(response => {
        response.json().then(data => {
            if(data.error) {
                locationElement.textContent = data.error;
                tempElement.textContent = "";
                weatherCondition.textContent = "";
            } else {
                console.log()
                if(data.description === "clear sky"  ) {
                    weatherIcon.className = "wi wi-cloud" ;

                } else if(data.description === "few clouds")  {
                    weatherIcon.className = "wi wi-cloudy" ;

                } else if(data.description === "scattered clouds") {
                    weatherIcon.className = "wi wi-cloudy-windy" ;

                }else if(data.description === "broken clouds") {
                    weatherIcon.className = "wi wi-fog" ;

                }else if(data.description === "shower rain") {
                    weatherIcon.className = "wi wi-showers" ;

                }else if(data.description === "rain") {
                    weatherIcon.className = "wi wi-rain" ;

                }else if(data.description === "light rain") {
                    weatherIcon.className = "wi wi-sleet" ;

                }else if(data.description === "thunderstorm") {
                    weatherIcon.className = "wi wi-thunderstorm" ;

                }else if(data.description === "snow") {
                    weatherIcon.className = "wi wi-snow" ;

                }else if(data.description === "mist") {
                    weatherIcon.className = "wi wi-windy";
                }else {
                    weatherIcon.className = "wi wi-night-alt-cloudy-high";
                }


                locationElement.textContent = data.cityName;
                tempElement.textContent = (data.temperature - 273.5).toFixed(2) + String.fromCharCode(176);
                weatherCondition.textContent = data.description.toUpperCase();
            }
        })
    });
})