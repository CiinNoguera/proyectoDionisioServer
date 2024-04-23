require('dotenv').config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const apiVersion = process.env.API_VERSION;

const app = express();

//Configurar Header HTTP - CORS 
app.use(cors());

//Importar rutas
const authRoutes = require('./router/auth');

//Configurar Body Parse
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Configurar static dolter
app.use(express.static("uploads"));

//Configurar rutas
app.use(`/api/${apiVersion}`, authRoutes);

module.exports = app;