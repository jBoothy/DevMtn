const foodArr = ["Pier 49", "The Trolly", "Strap Tank Brewery", "Joe Bandidos"]

const randomBtn=(evt)=>{
    evt.preventDefault()
    const random = Math.floor(Math.random() * foodArr.length);
    alert(`You should definitely try out: ${foodArr[random]}!`)
}

document.querySelector("#random").addEventListener("click", randomBtn)