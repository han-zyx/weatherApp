const express = require('express');
const path = require("path");
const app = express();
const hbs = require("hbs");

const port = process.env.PORT || 3500
const publicStaticDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const weatherData =  require('../utils/weatherData');

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));


/*
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App'
    })
})
*/

app.get('', (req,res) => {
    res.send("hii this is weather app")
});

app.get('/weather', (req, res) => {
    const address = req.query.address
    if(!address) {
        return res.send({
            error: "You must enter address in search text box"
        })
    }

    weatherData(address, (error, {temperature, description, cityName} = {}) => {
        if(error) {
            return res.send({
                error
            })
        }
        console.log(temperature, description, cityName);
        res.send({
            temperature,
            description,
            cityName
        })
    })
});

app.get("*",(req, res ) => {
    res.send('Page Not Found.')
})


app.listen(port,(watherApp)=> {
    console.log("Server On the port" , port );
})