const bcrypt = require("bcryptjs")
const chats = []

module.exports = {
    createMessage: (req, res) => {
        console.log(req.body)
        const {pin, message} = req.body

        for(let i = 0; i < chats.length; i++){
            const existingPin = bcrypt.compareSync(pin, chats[i].pinHash)
            if(existingPin){
                chats[i].messages.push(message)

                let existingSecuredMessage = {...chats[i]}
                delete existingSecuredMessage.pinHash

                return res.status(200).send(existingSecuredMessage)
            }
        }


        const salt = bcrypt.genSaltSync(5)
        const pinHash = bcrypt.hashSync(pin, salt)

        // console.log('pin = ' + pin)
        // console.log('salt = ' + salt)
        // console.log('pinhash = ' + pinHash)

        const msg = {
            pinHash,
            messages: [message]
        }

        chats.push(msg)

        let securedMessage = {...msg}
        delete securedMessage.pinHash

        res.status(200).send(securedMessage)
    }
}
