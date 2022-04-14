const bcrypt = require("bcryptjs")
const chats = []

module.exports = {
    createMessage: (req, res) =>{
        console.log(req.body)
        const {pin, message} = req.body
        const salt = bcrypt.getSaltSync()
    }
}