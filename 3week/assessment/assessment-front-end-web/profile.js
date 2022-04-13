const faveColor=(evt)=>{
    evt.preventDefault()
    alert(`My favorite color is Indigo!`)
}

const favePlace=(evt)=>{
    evt.preventDefault()
    alert(`My favorite place is anywhere in the mountains or on a ranch!`)
}

const faveRitual=(evt)=>{
    evt.preventDefault()
    alert(`My favorite ritual is playing sports!`)
}

document.querySelector("#color").addEventListener("click", faveColor)
document.querySelector("#place").addEventListener("click", favePlace)
document.querySelector("#ritual").addEventListener("click", faveRitual)
