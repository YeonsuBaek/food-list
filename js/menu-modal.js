const storeMenuButtonList = document.querySelectorAll('.store-menu-item')
const menuModal = document.querySelector('.menu-modal')
const menuModalCloseButton = document.querySelector('.menu-modal .close-button')
const getButton = document.querySelector('.menu-get-button')
const overlay = document.querySelector('.overlay')

function openMenuModal() {
  menuModal.classList.add('is-open')
  overlay.classList.add('is-active')
}

storeMenuButtonList.forEach(function (button) {
  button.addEventListener('click', openMenuModal)
})

function closeMenuModal() {
  menuModal.classList.remove('is-open')
  overlay.classList.remove('is-active')
}

menuModalCloseButton.addEventListener('click', closeMenuModal)
getButton.addEventListener('click', closeMenuModal)
overlay.addEventListener('click', closeMenuModal)
