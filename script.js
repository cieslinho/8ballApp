const ballImg = document.querySelector('img')
const input = document.querySelector('#question')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = [
	'Tak',
	'Nie',
	'Ups... spróbuj ponownie',
	'Być może... 😂',
	'Nie chcesz znać odpowiedźi na to pytanie',
	'Może...',
]

const shakeAnimation = () => {
	ballImg.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
		ballImg.classList.remove('shake-animation')
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie kończymy znakiem zapytania 😉'
		answer.textContent = ''
		ballImg.classList.remove('shake-animation')
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie!'
		answer.textContent = ''
		ballImg.classList.remove('shake-animation')
	}
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 6)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
	console.log(number)
}
ballImg.addEventListener('click', shakeAnimation)
