const foods = [
  './assets/burger.png',
  './assets/donut.png',
  './assets/fish.png',
  './assets/french-fries.png',
  './assets/fruits.png',
]

export function roll(min, max, floatFlag) {
  const r = Math.random() * (max - min) + min
  return floatFlag ? r : Math.floor(r)
}

export const testPurses = Array(5)
  .fill(0)
  .map((currentValue, index) => ({
    quarters: roll(0, 15),
    dimes: roll(0, 30),
    nickels: roll(0, 40),
    pennies: roll(0, 50),
    price: Number(roll(0, 10, 1).toFixed(2)),
    image: foods[index],
  }))
