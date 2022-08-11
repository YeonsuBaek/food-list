document
  .querySelector('.gnb-menu-button')
  .addEventListener('click', function () {
    document.querySelector('.sidebar').classList.add('is-active')
    document.querySelector('.overlay').classList.add('is-active')
  })

document.querySelector('.overlay').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.remove('is-active')
  document.querySelector('.overlay').classList.remove('is-active')
  document.querySelector('.filter-sidebar').classList.remove('is-active')
})

const searchButton = document.querySelector('.search-button')
const closeButton = document.querySelector('.close-button')
const searchModal = document.querySelector('.search-modal')
const overlay = document.querySelector('.overlay')

function openSearchModal() {
  searchModal.classList.add('is-active')
  overlay.classList.add('is-active')
}

function closeSearchModal() {
  searchModal.classList.remove('is-active')
  overlay.classList.remove('is-active')
}

searchButton.addEventListener('click', openSearchModal)
closeButton.addEventListener('click', closeSearchModal)
