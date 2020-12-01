/* Write your code here 👇 */
const panels = document.querySelectorAll('.panel')
let prevPanel = null
document.addEventListener('DOMContentLoaded', () => {
  panels.forEach((currentDiv, index) => {
    currentDiv.addEventListener('click', (event) => {
      let currentPanel = index
      if (prevPanel === currentPanel) {
        console.log(`${currentPanel + 1} panel was clicked twice`)
      }
      prevPanel = index
      // Remove all instances of zoom-in class
      panels.forEach((node) => {
        node.classList.remove('zoom-in')
      })
      event.target.classList.add('zoom-in')
    })
  })
})

/*

STRETCH GOALS:

1) Turn it into your own gallery, portfolio, showcase, diary, travel notes, pet photo album.
2) Choose to make it vertical, horizontal, diagonal (why not?). Experiment! 
3) Make it so more than one panel can be expanded at a time! The user should be able to click on all panels and they are all equally spaced. 

Example gif:

https://docs.google.com/presentation/d/e/2PACX-1vQabQ1b7iLGqmB_MyTaKl85CSiQVGkrYQviaef03cZZOi59IEwUahS0fDqY0JkoOjY_aaE_PgTlN6_6/pub?start=false&loop=false&delayms=3000

*/
