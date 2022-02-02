const http = require('http');


const express = require('express');
const messageRoutes = require('./src/routes/message.routes');
const logger = require('./src/middlewares/logger');
const bp = require('body-parser')

const cors = require('cors')

const app = express();

//middlewares
app.use(cors());
app.use(logger);
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


//
app.use('/api/messages',messageRoutes)

//settings
const PORT = process.env.PORT || 3000
//starting server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })



module.exports = {app,server}
