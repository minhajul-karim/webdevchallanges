const gameContainer = document.querySelector('.game-container')
const scoreText = document.querySelector('.score-text')
const rows = 20
const snake = [0]
const cells = []
let steps = 1
let intervalId = null

// Create cells
const cell = document.createElement('div')
for (let i = 1; i <= rows * rows; i++) {
  const cell = document.createElement('div')
  cell.className = 'cell'
  cells.push(cell)
  gameContainer.appendChild(cell)
}

/*
  TODOS
  1. Create snake
  2. Auto move snake
  3. Move snake with key
  4. Handle gameover cases
  5. Create food
  6. Eat food
*/

// Draw snake
snake.forEach(index => cells[index].classList.add('snake'))

// Move snake
const move = () => {
  const head = snake[0]
  cells[head].classList.remove('snake')
  snake[0] = head + steps
  cells[snake[0]].classList.add('snake')
}

// intervalId = setInterval(move, 1000)

