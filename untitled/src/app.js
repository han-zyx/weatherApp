const express = require('express');
const path = require("path");
const app = express();

const port = process.env.PORT || 3500

const publicStaticDirPath = path.join(__dirname, '../public');

 app.get('',(req,res) => {
    res.send("hiii hutto")
})

app.get('/weather',(req,res) => {
    res.send("This is weather ")
})

app.get("*",(req, res ) => {
    res.send('Page Not Found.')
})


app.listen(port,(watherApp)=> {
    console.log("Server On the port" , port );
})