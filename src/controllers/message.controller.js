
const Message = require('../models/mensajeModel')
const db = require('../database/databaseJSON')

const messageStorage = db.getData("/messages")

const getMessages = (req, res) =>{
    res.json(messageStorage)
}

const postMessage = (req, res) =>{
    const {sender,text} = req.body

    const message = new Message(text,sender)
    db.push("/messages[]", 
        message
    , true)

    res.json(messageStorage)
}


module.exports = { getMessages, postMessage }
