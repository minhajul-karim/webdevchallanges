/*
DESCRIPTION:
In this challenge you are a magician that tells your audience that by pressing only
the first square on the left, you can change ALL 9 squares on the grid to be yellow.
Write a function using the .forEach() method that will do just that.

event listeners, Array work

*/

// Write your code here 👇

// Change background color of given elements
const changeBackgroundColor = (arrayOfElements, color) => {
  arrayOfElements.forEach(element => {
    element.style.backgroundColor = color
  })
}

const pauseAnimation = () => {
  document.querySelector('.click').style.animationPlayState = 'paused'
  document.querySelector('.click').style.animationIterationCount = 1
}

// Create an array of all div elements inside container class
const squares = [...document.querySelectorAll('.container div')]

// Detect click on the 1st square and take action
squares.forEach((element, index) => {
  element.addEventListener('click', () => {
    /*
      Change background color of all squares when the
      1st square has been clicked
    */
    if (index === 0) {
      changeBackgroundColor(squares, 'yellow')
      pauseAnimation()
    }
  })
})

// Detect enter key press on 1st square
document.querySelector('.click').addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    changeBackgroundColor(squares, 'yellow')
    pauseAnimation()
  }
})

document.querySelector('.reset-button').addEventListener('click', () => {
  changeBackgroundColor(squares, 'purple')
  document.querySelector('.click').style.animationPlayState = 'running'
  document.querySelector('.click').style.animationIterationCount = 'infinite'
})


/*

DETAILED INSTRUCTIONS 
1. Use JavaScript to turn elements into an Array
2. Use the .forEach() method to apply a change to all the elements
3. Listen out for when the first square is clicked

STRETCH GOALS:
- What else can you change about the squares?
- Can you improve the overall design?

*/
