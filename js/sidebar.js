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

document.querySelector('.filter-button').addEventListener('click', function () {
  document.querySelector('.filter-sidebar').classList.add('is-active')
  document.querySelector('.overlay').classList.add('is-active')
})

document.querySelector('.filter-close').addEventListener('click', function () {
  document.querySelector('.filter-sidebar').classList.remove('is-active')
  document.querySelector('.overlay').classList.remove('is-active')
})
