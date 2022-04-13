const button = document.querySelector("button")

const buttonClicked = () =>{
    axios.get("https://swapi.dev/api/planets/2/").then(res=>{
        let resident = res.data.residents
        // console.log(resident)
        for (let i = 0; i < resident.length; i++){
            axios.get(`${resident[i]}`).then(res=>{
                let residentName = document.createElement("h2")
                residentName.innerText = res.data.name
                document.body.appendChild(residentName)
            })
        }
    })
}

button.addEventListener("click", buttonClicked)