document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.getElementById('string')
  const counterDiv = document.getElementById('counterFooter')
  const remainingChars = document.getElementById('character-remaining')
  const button = document.getElementById('btn')
  const characterLimit = 140

  textArea.addEventListener('input', (event) => {
    const numberOfRemainingCharacters =
      characterLimit - event.target.value.length
    remainingChars.textContent = numberOfRemainingCharacters
    button.disabled = false

    // Turn characters count read
    if (numberOfRemainingCharacters <= 20) {
      counterDiv.style.color = '#ff0000'
    }

    // Disable button
    if (numberOfRemainingCharacters < 0) {
      button.disabled = true
    }

    if (numberOfRemainingCharacters > 20) {
      counterDiv.style.color = '#000000'
    }
  })
})