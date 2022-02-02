const { server } = require('..')
const { api, getAllMessages, postMessage } = require('./helpers/app')

describe("Test POST AND GET Messages", () => {
    test("The result should contain the text of a message", async () => {
        const { content } = await getAllMessages()
        expect(content).toContain("Hola, aqui puedes dejar tus mensajes")
    })
    test("The result should contain the previus sended message", async () => {
        const newMessage = {
            "sender": "Emisor2",
            "text": "Mensaje2"
        }
        const { content } = await postMessage(newMessage)
        expect(content).toContain(newMessage.text)
    })
})


afterAll(() => {
    server.close()
}) 