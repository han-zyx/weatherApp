const express = require('express');
const path = require("path");
const app = express();

const port = process.env.PORT || 3500
const publicStaticDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const weatherData =  require('../utils/weatherData');

app.use(express.static(publicStaticDirPath));

 app.get('',(req,res) => {
    res.send("hiii hutto")
})

app.get('/weather',(req,res) => {
    const address =  req.query.address

    weatherData(address,(result) => {
        console.log(result)
    })

});

app.get("*",(req, res ) => {
    res.send('Page Not Found.')
})


app.listen(port,(watherApp)=> {
    console.log("Server On the port" , port );
})