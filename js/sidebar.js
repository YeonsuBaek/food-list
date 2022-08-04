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

document.querySelector('.search-button').addEventListener('click', function () {
  document.querySelector('.search-modal').classList.add('is-active')
})

document.querySelector('.close-button').addEventListener('click', function () {
  document.querySelector('.search-modal').classList.remove('is-active')
})
