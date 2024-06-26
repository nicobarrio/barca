const express = require('express');
const mysql = require('mysql2');
const path = require('path'); 
const app = express();

const port = 3090;

const publicPath = path.join(__dirname ,'/public');

// REQUERIR RUTAS //
const homeRoute = require('./routes/homeRoute.js');
const productsRoute = require('./routes/productsRoute.js')

// CAPTURAR INFO DE POST //
app.use(express.urlencoded( { extended:false } ));
app.use(express.json());

// CONFIGURAR PUERTO //
app.listen(port, () => {
    console.log('Server ' + port + ' is working');
});

// CONFIGURAR EJS //
app.set('view engine', 'ejs'); 
app.set("views", path.join(__dirname, "views"));

app.use(express.static(publicPath)); 

app.use('/', homeRoute);
app.use('/', productsRoute);