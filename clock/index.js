import { now } from './utility.js'

const getClockTemplate = id =>
  `
    <div id="clock-${id}"" class="clock">
      <div class="hand second-hand" id="clock-${id}-second-hand"></div>
      <div class="hand minute-hand" id="clock-${id}-minute-hand"></div>
      <div class="hand hour-hand" id="clock-${id}-hour-hand"></div>
      <div class="clock-center"></div>
    </div>`

const startClock = () => {
  document.getElementById('clock-area').innerHTML = getClockTemplate(0)
  const secondHand = document.querySelector('.second-hand')
  const minuteHand = document.querySelector('.minute-hand')
  const hourHand = document.querySelector('.hour-hand')
  let { hours, minutes, seconds } = now()

  setInterval(() => {
    seconds++
    if (seconds > 59) {
      seconds = 0
      minutes++
    }
    if (minutes > 59) {
      minutes = 0
      hours++
    }
    if (hours > 23) {
      hours = 0
    }
    const secondDegree = 270 + (6 * seconds)
    const minuteDegree = 270 + (60 * minutes + seconds) / 10
    const hourDegree = 270 + (3600 * hours + 60 * minutes + seconds) / 120
    secondHand.style.transform = `rotate(${secondDegree}deg) translate(50%)`
    minuteHand.style.transform = `rotate(${minuteDegree}deg) translate(50%)`
    hourHand.style.transform = `rotate(${hourDegree}deg) translate(50%)`
  }, 1000)
}

startClock()

// Play audio
const soundInput = document.getElementById('soundInput')
const track = document.getElementById('tick-sound')
let intervalId = null
soundInput.addEventListener('change', event => {
  if (event.target.checked) {
    intervalId = setInterval(() => {
      track.play()
    }, 1000)
  } else {
    clearInterval(intervalId)
  }
})
