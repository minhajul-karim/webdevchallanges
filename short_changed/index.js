import { testPurses } from './shortChangeTests'

/*
    Write a function enoughChange

    Given an object representing a coin purse, and a price
        it should return true/false depending on whether
        or not you have enough change to complete a
        purchase at the given price

    The function should also update the "counters"
        such that they reflect the quantities in
        the test case

    You should then use this function to update the
        purchaseConfirmation div to display whether
        or not you can afford the purchase with the
        coin quantities provided

    Finally, create nextCase and previousCase
        buttons to cycle through the test cases

    Refresh the mini-browser or save this file to
        load new test cases!
*/

const purchaseConfirmation = document.getElementById('purchase-confirmation')
const quarterCounter = document.getElementById('quarter-count')
const dimeCounter = document.getElementById('dime-count')
const nickelCounter = document.getElementById('nickel-count')
const pennyCounter = document.getElementById('penny-count')
const foodPrice = document.getElementById('price')
const currentCashAmount = document.getElementById('current-cash-amount')
const foodImage = document.querySelector('#food img')
const numberOfTestCases = testPurses.length

let currentIndex = 0
let total = null

// Your code here 👇
const enoughChange = (sampleTest) => {
  const { quarters, dimes, nickels, pennies, price, image } = sampleTest
  // Update counters
  quarterCounter.textContent = quarters
  dimeCounter.textContent = dimes
  nickelCounter.textContent = nickels
  pennyCounter.textContent = pennies
  foodPrice.textContent = price
  foodImage.src = image

  total = 0.25 * quarters + 0.1 * dimes + 0.05 * nickels + 0.01 * pennies
  currentCashAmount.textContent = total.toFixed(2)
  return total >= price
}

const purchase = (coins) => {
  const isAffordable = enoughChange(coins)
  purchaseConfirmation.textContent = isAffordable
    ? `Yes! You can afford this purchase!`
    : `Sorry! You can't affort this purchase!`
}

// Handle 1st test on page load
purchase(testPurses[currentIndex])

// Handle next button
document.getElementById('next-case').addEventListener('click', () => {
  currentIndex++
  if (currentIndex < numberOfTestCases) {
    purchase(testPurses[currentIndex])
  } else {
    currentIndex = 0
    purchase(testPurses[currentIndex])
  }
})

// Handle previous button
document.getElementById('previous-case').addEventListener('click', () => {
  currentIndex--
  if (currentIndex >= 0) {
    purchase(testPurses[currentIndex])
  } else {
    currentIndex = numberOfTestCases - 1
    purchase(testPurses[currentIndex])
  }
})
