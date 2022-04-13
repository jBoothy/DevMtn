// Counter
let count = 0
const counterText = document.getElementById("counter")

const increase = () => {
    count += 1
    counterText.textContent = count
}

const decrease = () => {
    if (count > 0){
    count -= 1
    counterText.textContent = count
    } else {
        alert ("You cannot count below 0 because I said so.")
    }
}

const reset = () => {
    count = 0
    counterText.textContent = count
}

const plusBtn = document.querySelector("#plus-btn")
const minusBtn = document.querySelector("#minus-btn")
const resetBtn = document.querySelector("#reset-btn")

plusBtn.addEventListener("click", increase)
minusBtn.addEventListener("click", decrease)
resetBtn.addEventListener("click", reset)


// Theme Buttons
const buttons = document.querySelectorAll(".theme-buttons")

const selectTheme = (event) => {
    const theme = event.target.textContent

    const body = document.querySelector("body")
    const main = document.querySelector("main")

    body.className = theme
    main.className = theme
    for (let i = 0; i <buttons.length; i++){
        buttons[i].className = theme
    }
}

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", selectTheme)
}
