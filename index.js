const express = require('express');
const app = express();
const db = require('./api/db.json')

app.use(express.jso({ extended: false}));

app.use("/api/db.json", db)

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log (`Servidor en funcionamiento en el puerto ${PORT}`))
module.exports = app