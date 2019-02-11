const express = require('express');
const mysql = require('mysql2');
const http = require('http');
const body_parser = require('body-parser')
const route = require('./routes/index')
const logger = require('morgan')

const app = express();

app.use(body_parser.json());
app.use(logger('dev'));
app.use(body_parser.urlencoded({extended:false}));

// var connection = mysql.createConnection({
//     user: "root",
//     password: "pranjal",
//     database: "abcdb",
//     host: "localhost"
// });  

// connection.connect(function(error){
//     if(!!error){
//         console.log("Failed to connect!!")
//     }
//     else{
//         console.log("Connected")
//     }
// });

app.use(route);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
//app.listen(4000)

module.exports = app;