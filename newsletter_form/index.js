/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

TODO
* Validate empty email field
* Validate email addresses
* Shake email field if submission was done with invalid email

*/

const email = document.getElementById('email-input')
const form = document.getElementById('myForm')
const emailGroup = document.getElementById('email-group')
const mainCard = document.querySelector('.main-card')
const thanksCard = document.querySelector('.thanks-card')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const emailAddress = email.value
  if (emailAddress === '' || !validateEmail(emailAddress)) {
    emailGroup.classList.remove('run-animation')
    emailGroup.offsetHeight
    emailGroup.classList.add('run-animation')
  } else {
    mainCard.style.display = 'none'
    thanksCard.style.display = 'block'
  }
})

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
