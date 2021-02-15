/*
  TODOS
  1. Create snake (done)
  2. Auto move snake (done)
  3. Move snake with key (done)
  4. Create food (done)
  5. Eat food (done)
  6. Increase snake (done)
  7. Handle gameover cases (done)
  8. Display game over (done)
  9. Restart game (done)
  10. Game over when snake touches itself (done)
*/
const gameContainer = document.querySelector('.game-container')
const scoreText = document.getElementById('score-text')
const startButton = document.querySelector('.btn')
const gemeOverText = document.querySelector('.game-over-text')
const rows = 20
const cells = []
let snake = [2, 1, 0]
let steps = 1
let intervalId = null
let foodIndex = null
let score = 0
let speed = null

// Create cells
const cell = document.createElement('div')
for (let i = 0; i < rows * rows; i++) {
  const cell = document.createElement('div')
  cell.className = 'cell'
  cells.push(cell)
  gameContainer.appendChild(cell)
}

// Draw snake
const drawSnake = () => {
  snake.forEach(index => cells[index].classList.add('snake'))
}
drawSnake()

// Generate food
const generateFood = () => {
  foodIndex = Math.floor((Math.random() * 400))
  cells[foodIndex].classList.add('food')
}

// Move snake
const move = () => {
  // Check if snake has hit wall
  if (
    ((snake[0] + 1) % rows === 0 && steps === 1) // Hits right wall
    || (snake[0] % rows === 0 && steps === -1) // Hits left wall
    || ((snake[0] + rows >= rows * rows) && steps === rows) // Hits bottom wall
    || ((snake[0] < rows) && steps === -rows) // Hits top wall
    || (cells[snake[0] + steps].classList.contains('snake')) // Hits itself 
  ) {
    gemeOverText.classList.add('diplay-game-over-text')
    return clearInterval(intervalId)
  }
  // Move snake x steps
  const tail = snake.pop()
  cells[tail].classList.remove('snake')
  const newHead = snake[0] + steps
  // Add new head
  snake.unshift(newHead)
  cells[newHead].classList.add('snake')
  
  // Check if snake ate food
  const head = snake[0]
  if (head === foodIndex) {
    // Increment snake's length
    snake.push(tail)
    cells[tail].classList.add('snake')
    cells[head].classList.remove('food')
    cells[head].classList.add('snake')
    generateFood()
    score += 1
    scoreText.textContent = score
    if (speed > 100) {
      speed -= 100
      clearInterval(intervalId)
      intervalId = setInterval(move, speed)
    }
  }
}

// Control snake with keyboard
document.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowRight':
      steps = 1
      break
    case 'ArrowLeft':
      steps = -1
      break
    case 'ArrowUp':
      steps = -rows
      break
    case 'ArrowDown':
      steps = rows
      break
  }
})

// Start/restart button
startButton.addEventListener('click', () => {
  // Remove previous snake
  snake.forEach(index => cells[index].classList.remove('snake'))
  // Remove previous food
  if (foodIndex) cells[foodIndex].classList.remove('food')
  // Hide game over text
  gemeOverText.classList.remove('diplay-game-over-text')
  // Reset game state
  snake = [2, 1, 0]
  drawSnake()
  steps = 1
  score = 0
  speed = 500
  generateFood()
  scoreText.textContent = score
  intervalId = setInterval(move, speed)
})