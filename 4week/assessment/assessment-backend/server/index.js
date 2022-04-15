const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.
const fortunes = [];
let fortID = 1

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
// POST
app.post("/api/fortune", (req,res)=>{
  let {fortune} = req.body
  let fortuneObj = {
    id:fortID,
    rating:5,
    text:fortune
  }
  fortunes.push(fortuneObj)
  res.status(200).send(fortunes)
  fortID++
})
// GET
app.get("/api/fortune",(req,res)=>{
  if (fortunes.length>0){
    res.status(200).send(fortunes[Math.floor(Math.random()*fortunes.length)])
  }else{
    res.status(400).send(`add some fortunes first`)
  }
})
// DELETE
app.delete(`/api/fortune/:id`, (req,res)=>{
  const {id} = req.params
  let index = fortunes.findIndex(e=>fortunes.id ===+id)
  fortunes.splice(index,1)
  res.status(200).send(`Deletes`)
})
// PUT
app.put(`/api/fortune/:id`, (req,res)=>{
  const {id} = req.params
  let index =fortunes.findIndex(e=> e.id ===+id)
  if (index===-1){
    res.status(400).send(`cant find`)
  }
  let {type}=req.body
  if (type === `minus`){
    fortunes[index].rating--
      if(fortunes[index].rating<1){
        fortunes.splice(index,1)
        res.status(200).send(`Rating too low Deleted from DataBase`)
        return
      }
    res.status(200).send(fortunes[index])
    return
  }else{
    if(fortunes[index].rating>=10){
      res.status(200).send(fortunes[index])
      return
    }else{
      fortunes[index].rating++
      res.status(200).send(fortunes[index])
      return
    }
  }
})

app.listen(4000, () => console.log("Server running on 4000"));