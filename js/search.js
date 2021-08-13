document.getElementById('filter-button').addEventListener('click', function () {
  document.getElementById('filter-sidebar').classList.add('is-active')
  document.getElementById('overlay').classList.add('is-active')
})

document.getElementById('filter-close').addEventListener('click', function () {
  document.getElementById('filter-sidebar').classList.remove('is-active')
  document.getElementById('overlay').classList.remove('is-active')
})

document.getElementById('search-button').addEventListener('click', function () {
  document.getElementById('search-modal').classList.add('is-active')
})

document.getElementById('close-button').addEventListener('click', function () {
  document.getElementById('search-modal').classList.remove('is-active')
})
