const {app} = require('../../index')
const supertest = require('supertest')

const api = supertest(app)

const getAllMessages = async() =>{
    const {text} = await api.get('/api/messages')
    return {
        content:text
    }
    
}

const postMessage = async(message) =>{
    const  {text} = await api.post('/api/messages').send(message)
    return {
        content:text
    }
    
}

module.exports = {api, getAllMessages,postMessage}