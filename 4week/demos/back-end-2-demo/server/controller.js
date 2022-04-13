let movies = require("./db.json")
let globalID = 11

module.exports = {
    getMovies: (req, res)=>{
        res.status(200).send(movies)
    },
    deleteMovie: (req, res)=>{
        let index = movies.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res)=>{
        const {title, rating, imageURL} = req.body
        let newMovie = {
            id: globalID,
            title,
            rating,
            imageURL
        }
        movies.push(newMovie)
        globalID++
        res.status(200).send(movies)
    },
    updateMovie: (req, res)=>{
        const {id} = req.params
        const {type} = req.body
        let index = movies.findIndex(elem => +elem.id === +id)
        if (type === "minus" && movies[index].rating > 0){
            movies[index].rating -= 1
            res.status(200).send(movies)
        } else if(type === "plus" && movies[index].rating < 5){
            movies[index] += 1
            res.status(200).send(movies)
        } else{
            res.status(400).send(`Uh oh. Something went wrong.`)
        }
    }
}
