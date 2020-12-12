//require('./bootstrap');
const express = require('express');
const app = express();

//crear servicod http con express
const http = require('http').Server(app);
//paara generar comunicacion, usar socket io
const io = require('socket.io')(http);

//routes
app.use(require('./clase.routes'));
//cargar estaticos html
app.use(express.static("../views/"));

module.exports = http;
