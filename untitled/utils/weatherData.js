const request = require('request');
const constant = require('../utils/config');
const {openWeatherMap} = require("./config");

const weatherData = (address , callback) => {
    const url = openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + openWeatherMap.SECRET_KEY;
    console.log(url);
    request({url,json:true}, (error , {body}) => {
        console.log(body);
        if(error){
            callback("Can't Get Data" , undefined)
        } else {
            callback(undefined,{
                abc : true
            })
        }
    })
    callback(true);
}

module.exports = weatherData;