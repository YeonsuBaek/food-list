document
  .getElementById('my-menu-button')
  .addEventListener('click', function () {
    document.getElementById('my-menu').classList.toggle('is-active')
  })

document
  .getElementById('gnb-menu-button')
  .addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('is-active')
    document.getElementById('overlay').classList.add('is-active')
  })

document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('sidebar').classList.remove('is-active')
  document.getElementById('overlay').classList.remove('is-active')
  document.getElementById('filter-sidebar').classList.remove('is-active')
})
