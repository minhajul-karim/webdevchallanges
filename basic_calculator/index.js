const mainContainer = document.getElementById('main-container')
const equationField = document.getElementById('equation-field')
const solveButton = document.getElementById('solve-button')
const solutionDisplay = document.getElementById('solution-display')

// Takes an equation & splits it into an array
const equationToArray = (equation) => {
  let equationArray = null
  if (equation.includes(' ')) {
    // When equation has spaces
    equationArray = equation.split(' ')
  } else {
    // Splits equation w/o spaces
    equationArray = equation.split(/(\D)/)
  }
  return equationArray
}

// Calcuate an expression
const calculate = (equation) => {
  let workingArray = equationToArray(equation)
  const equationArray = [...workingArray]
  let index = 1
  // Handle division and multiplication
  while (index < workingArray.length) {
    if (workingArray[index] === '/') {
      workingArray[index - 1] =
        parseInt(workingArray[index - 1]) / parseInt(workingArray[index + 1])
      // Remove the operator and the next operand
      workingArray.splice(index, 2)
      index--
    } else if (workingArray[index] === '*') {
      workingArray[index - 1] =
        parseInt(workingArray[index - 1]) * parseInt(workingArray[index + 1])
      // Remove the operator and the next operand
      workingArray.splice(index, 2)
      index--
    }
    index++
  }

  index = 1
  // Handle addition and subtraction
  while (index < workingArray.length) {
    if (workingArray[index] === '+') {
      workingArray[index - 1] =
        parseInt(workingArray[index - 1]) + parseInt(workingArray[index + 1])
      // Remove the operator and the next operand
      workingArray.splice(index, 2)
      index--
    } else if (workingArray[index] === '-') {
      workingArray[index - 1] =
        parseInt(workingArray[index - 1]) - parseInt(workingArray[index + 1])
      // Remove the operator and the next operand
      workingArray.splice(index, 2)
      index--
    }
    index++
  }
  return {
    equationArray: equationArray,
    result: workingArray[0],
  }
}

solveButton.addEventListener('click', function () {
  let { equationArray, result } = calculate(equationField.value)

  // Clears the solution contents on each click
  solutionDisplay.innerHTML = ``

  // Append '=' and result to the equation[]
  equationArray.push('=', `${result.toFixed(2)}`)

  equationArray.map((item) => {
    // Create a new div
    const newDiv = document.createElement('div')
    // Add class to newDiv
    if (parseInt(item)) {
      if (parseInt(item) === result) {
        newDiv.classList.add('equation-component', 'result')
      } else {
        newDiv.classList.add('equation-component', 'number')
      }
    } else {
      newDiv.classList.add('equation-component')
    }

    // Assign content to newDiv
    const newContent = document.createTextNode(`${item}`)
    // Add text node to newDiv
    newDiv.appendChild(newContent)
    // Add newDiv to solutionDisplay
    solutionDisplay.appendChild(newDiv)
  })
})
