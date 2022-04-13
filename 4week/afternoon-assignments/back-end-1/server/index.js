const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

app.listen(4000, ()=> console.log("Server is running on port 4000"))

app.get("/api/users", (req, res)=>{
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
    res.status(200).send(friends)
})

app.get("/weather/:temperature", (req, res)=>{
    const phrase = `<h3>It was ${req.params.temperature} today.</h3>`
    res.status(200).send(phrase)
})