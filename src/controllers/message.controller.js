
const Message = require('../models/mensajeModel')
const { JsonDB } = require ('node-json-db');
const { Config } = require ('node-json-db/dist/lib/JsonDBConfig')

const db = new JsonDB(new Config("myDataBase", true, false, '/'));

const messageStorage = db.getData("/messages");



const getMessages = (req, res) =>{
    res.json(messageStorage)
}

const postMessage = (req, res) =>{
    const {sender,text} = req.body
    const message = new Message(text,sender)
    db.push("/messages[]", 
        message
    , true);
    res.json(messageStorage)
}


module.exports = { getMessages, postMessage }
