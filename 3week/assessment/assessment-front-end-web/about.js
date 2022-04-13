console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert(`Your form has been submitted properly. Good job!`)
}

const complimentHover=()=>{
	alert(`The duck isn't as big as my affection for you.`)
}
document.querySelector("img").addEventListener("mouseover", complimentHover)


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);