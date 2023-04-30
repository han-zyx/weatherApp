let fetchWeather = "/weather";

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const weatherIcon = document.querySelector('.weatherIcon');

const weatherCondition = document.querySelector('.weatherCondition');

const tempElement = document.querySelector('.temperature span');

const locationElement = document.querySelector('.place');

const dateElemnt = document.querySelector('.date')


const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//dateElemnt.textContent = monthName[new Date().getMonth()] +" "+ new Date().getDate();
dateElemnt.textContent = new Date().getDate() + " " + monthName[new Date().getMonth()];



weatherForm.addEventListener('submit',(event) => {
    event.preventDefault();
    console.log(search.value);

    locationElement.textContent = "Loading...";
    tempElement.textContent = "";
    weatherCondition.textContent = "";

    const locationApi =  fetchWeather + "?address=" + search.value;
    fetch(locationApi).then(response => {
        response.json().then(data => {
            if(data.error){
                locationElement.textContent = "Invalid location.";
                tempElement.textContent = "";
                weatherCondition.textContent = "";

            } else {
                console.log()
                if(data.description === "rain" || data.description === "fog") {
                    weatherIcon.className = "wi wi-day-" + data.description
                } else {
                    weatherIcon.className = "wi wi-day-cloudy"
                }
                locationElement.textContent = data.cityName;
                tempElement.textContent = (data.temperature - 273.5).toFixed(2) + String.fromCharCode(176);
                weatherCondition.textContent = data.description.toUpperCase();
            }
        })
    })


})