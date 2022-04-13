let message = document.querySelector("#message")


const revealMessage = () => {
    message.classList.remove("hide")
    setTimeout(()=> {
        message.classList.add("hide")
    }, 2000)
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = (`${event.target.parentNode.firstElementChild.textContent} has been deleted`)
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} has been watched`
    } else {
        message.textContent = `${event.target.textContent} has been added back to the list`
    }
    revealMessage()
}

const addMovie = (event) =>{
    event.preventDefault()
    let inputField = document.querySelector(`input`)
    let movie = document.createElement(`li`)
    let movieTitle = document.createElement(`span`)
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener(`click`, crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement(`button`)
    deleteBtn.textContent = `x`
    deleteBtn.addEventListener(`click`, deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector(`ul`).appendChild(movie)
    inputField.value = ``
}

document.querySelector("form").addEventListener("submit", addMovie)