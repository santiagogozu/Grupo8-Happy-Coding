const path = require('path');

const express = require("express");

const app = express();

app.use( express.static("public"))


app.get("/construccion",(req, res) =>{
    res.sendFile(path.resolve("./views/construccion.html"))
})


app.get("/home",(req, res) =>{
    res.sendFile(path.resolve("./views/home.html"))
})

app.get("/tshirts",(req, res) =>{
    res.sendFile(path.resolve("./views/tshirts.html"))
})



app.listen(3030, () =>{
    console.log('servidor corriendo en puerto 3000')
})