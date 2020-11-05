document.addEventListener('DOMContentLoaded', () => {
  const brandNameInputField = document.getElementById('brand-name-input')
  const backgroundColorInputField = document.getElementById(
    'background-color-input'
  )
  const textColorInputField = document.getElementById('text-color-input')
  const brandNameText = document.querySelector('.brand-name p')
  const logoIcon = document.querySelector('.logo-icon')
  const logoIconText = document.querySelector('.logo-icon h1')
  const logoCard = document.querySelector('.logo-card')

  // Initialize logo with some default values
  const name = 'Caver'
  brandNameInputField.value = name
  brandNameText.textContent = brandNameInputField.value
  logoIconText.textContent = name.charAt(0)
  backgroundColorInputField.value = '#f4efea'
  textColorInputField.value = '#7d141d'

  // Update brand name
  brandNameInputField.addEventListener('keyup', (event) => {
    brandNameText.textContent = brandNameInputField.value
    logoIconText.textContent = brandNameInputField.value.charAt(0)
  })

  // Update background color
  backgroundColorInputField.addEventListener('keyup', (event) => {
    logoCard.style.backgroundColor = backgroundColorInputField.value
    // Change text color of logo icon
    logoIconText.style.color = backgroundColorInputField.value
  })

  // Update text color
  textColorInputField.addEventListener('keyup', (event) => {
    brandNameText.style.color = textColorInputField.value
    // Change background color of logo icon box
    logoIcon.style.backgroundColor = textColorInputField.value
  })

  // Update shape of logo icon box
  document
    .getElementById('logo-icon-shape')
    .addEventListener('change', (event) => {
      switch (event.target.value) {
        case 'square':
          logoIcon.style.borderRadius = '0px'
          break
        case 'rounded':
          logoIcon.style.borderRadius = '10px'
          break
        default:
          logoIcon.style.borderRadius = '50%'
      }
    })
})
