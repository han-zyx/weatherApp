let fetchWeather = "/weather";

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const weatherIcon = document.querySelector('.weatherIcon');

const weatherCondition = document.querySelector('.weatherCondition');

const tempElement = document.querySelector('.temperature span');

const locationElement = document.querySelector('.place');

const dateElemnt = document.querySelector('.date')


const monthName = ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝම්බර්", "නොවැම්බර්", "දෙසැම්බර්"];
dateElemnt.textContent = monthName[new Date().getMonth()] +" "+ new Date().getDate();




weatherForm.addEventListener('submit',(event) => {
    event.preventDefault();
    console.log(search.value);

    locationElement.textContent = "මොකද හදිස්සි , පොඩ්ඩක් ඉවසන්න ...";
    tempElement.textContent = "";
    weatherCondition.textContent = "";

    const locationApi =  fetchWeather + "?address=" + search.value;
    fetch(locationApi).then(response => {
        response.json().then(data => {
            if(data.error){
                locationElement.textContent = "අනේ හරියට ඉන්න තැන ටයිප් කරපන්කො.";
                tempElement.textContent = "";
                weatherCondition.textContent = "";

            } else {
               /* if (data.description === "rain" || data.description === "fog"){
                    weatherCondition.className = "wi wi-day-" + data.description
                } else {
                    weatherIcon.className = "wi wi-day-cloudy"
                } */
                locationElement.textContent = data.cityName;
                tempElement.textContent = (data.temperature - 273.5).toFixed(2) + String.fromCharCode(176);
                weatherCondition.textContent = data.description.toUpperCase();
            }
        })
    })


})