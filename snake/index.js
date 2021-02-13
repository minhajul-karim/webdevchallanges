const gameContainer = document.querySelector('.game-container')
const rows = 20

// Create cells

const cell = document.createElement('div')
for (let i = 1; i <= rows * rows; i++) {
  const cell = document.createElement('div')
  cell.className = 'cell'
  gameContainer.appendChild(cell)
}
