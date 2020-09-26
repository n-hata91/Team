let score = document.querySelector('#score')
const timeLeft = document.querySelector('#time-left')
const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
let result = 0

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  // assign the id of the randomPosition to hit Position for us to use later
  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if (id.id === hitPosition) {
      result = resutl + 1
      score.textContent = result
    }
  })
})

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 1000)
}

moveMole();