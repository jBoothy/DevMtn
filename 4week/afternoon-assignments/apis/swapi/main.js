

const button = document.querySelector("button")

const buttonClicked = () =>{
    axios.get("https://swapi.dev/api/planets/2/").then(res=>{
        let resident = res.data.results[0].residents
        console.log(resident)
    })
}

button.addEventListener("click", buttonClicked)