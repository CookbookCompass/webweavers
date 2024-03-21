//Variables for Hamburger Button 
const hamburger = document.getElementsByClassName('hamburger')[0]
const menubar = document.getElementsByClassName('menu-bar')[0]

//Adding Event Listener for my button and menubar for a tablet and Phone view
hamburger.addEventListener('click', () => {
  menubar.classList.toggle('active')
})
