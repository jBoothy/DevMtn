const bcrypt = require("bcryptjs")
const chats = []

module.exports = {
    createMessage: (req, res) => {
        console.log(req.body)
        const {pin, message} = req.body

        const salt = bcrypt.genSaltSync(5)
        const pinHash = bcrypt.hashSync(pin, salt)

        console.log('pin = ' + pin)
        console.log('salt = ' + salt)
        console.log('pinhash = ' + pinHash)
    }
}
