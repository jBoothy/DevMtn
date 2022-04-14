const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].pwHash)
        if (users[i].username === username && existing) {
          let rtnUsr = {...users[i]}
          delete rtnUsr.pwHash
          res.status(200).send(rtnUsr)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      console.log('attempting to register User')
      console.log(req.body)
      if(users.length > 0){
        for (i in users){
          let {username} = req.body
          if (username === users[i].username){
            res.status(409).send(`username already exists`)
            return
          }
        }
      }
      const salt = bcrypt.genSaltSync()
      const pwHash = bcrypt.hashSync(req.body.password, salt)
      console.log(req.body.username)
      let usrOBJ = {
        username:req.body.username,
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        pwHash
      }
      console.log(usrOBJ)
      users.push(usrOBJ)
      let rtnUsr = {...usrOBJ}
      delete rtnUsr.pwHash
        res.status(200).send(rtnUsr)
        console.log(users)
    }
}