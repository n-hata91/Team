document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelector('.grid div')
  const scoreDisplay = document.querySelector('span')
  const startBtn = document.querySelector('.start')

  const width = 10
  let currentIndex = 0 //so first div in our grid
  let appleIndex = 0 
  let currentSnake = [2, 1, 0] //so the div in our grid being 2 (or the Head), and 0 being the end(Tail, with all 1's being the body for now on)
  let direction = 1
  let score = 0
  let speed = 0.9
  let intervalTime = 0
  let interval = 0

  // to start, and restart the game
  function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score = 0
    // randomApple()
    direction = 1
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2, 1, 0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(moveOutcomes, intervalTime)
  }

  // function that deals with all the ove out comes of the snake
  function moveOutcomes() {

    // deals with snake hitting border and snake hitting self
    if (
      (currentSnake[0] + width >= (width * width) && direction === width) || // if snake hits bottom
      (currentSnake[0] % width === width - 1 && direction === 1) || // if snake hits right wall
      (currentSnake[0] % width === 0 && direction === -1) || // if snake hit left wall
      (currentSnake[0] - widht < 0 && direction === -width) || // if snake hit the top
      squares[currentSnake[0] + direction].classList.contains('snake') // if snake goses into itself
    )
    return clearInterval(interval)
  }

  const tail = currentSnake.pop() // removes last item of the array and shows it
  squares[tail].classList.remove('snake') // removes class of snake from the Tail
  currentSnake.unshift(currentSnake[0] + direction ) // gives direction to the head

  //deals with snake getting apple
  if (squares[currentSnake[0]].classList.contains('apple')) {
    squares[currentSnake[0]].classList.remove('apple')
    squares[tail].classList.add('snake')
    currentSnake.push(tail)
    // randomApple()
    score++
    scoreDisplay.textContent = score
    clearInterval(interval)
    intervalTime
  }


  // assign functions to keycodes
  function control(e) {
    squares[currentIndex].classList.remove('snake')// we are removing the class of snake from all the squares.apple

    if (e.keyCode === 39) {
      direction = 1 //if we press the right arrow on our keybord, the snake will go right one
    } else if (e.keyCode === 38) {
      direction = -width //if we press the up arrow on our keybord, the snake will go back ten divs, appearing to go up
    } else if (e.keyCode === 37) {
      direction = -1 //if we press the left arrow on our keybord, the snake will go left one div
    } else if (e.keyCode === 40) {
      direction = +width //if we press the down arrow on our keybord, the snake head will instantly appear in the div ten divs from where you are now
    }
  }

  // generate new apple once apple is eaten
  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake')) // making sure apple
    squares[appleIndex].classList.add('apple')
  }

  document.addEventListener('keyup', control)
  startBtn.addEventListener('click', startGame)
})