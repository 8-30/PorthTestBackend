const http = require('http');


const express = require('express');
const messageRoutes = require('./src/routes/message.routes');
const logger = require('./src/middlewares/logger');
const bp = require('body-parser')

const cors = require('cors')

const app = express();
const server = http.createServer(app);


//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(cors());
app.use(logger);
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


//
app.use('/api/messages',messageRoutes)

//starting server
server.listen(app.get('port'),()=>{
    console.log("server on port ",app.get('port'))
})



