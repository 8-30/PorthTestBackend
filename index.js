const http = require('http');
const path = require('path');

const express = require('express');


const app = express();
const server = http.createServer(app);

//settings
app.set('port', process.env.PORT || 3000);

//starting server
server.listen(app.get('port'),()=>{
    console.log("server on port ",app.get('port'))
})



