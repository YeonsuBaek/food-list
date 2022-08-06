const filterButtonList = document.querySelectorAll('.filter-toggle')
const overlay = document.querySelector('.overlay')

function toggleFilterMenu() {
  const filter = this.parentNode

  filter.classList.add('is-open')
  overlay.classList.add('is-active')
}

function closeFilterMenu() {
  const filter = document.querySelector('.filter.is-open')

  filter.classList.remove('is-open')
  overlay.classList.remove('is-active')
}

filterButtonList.forEach(function (button) {
  button.addEventListener('click', toggleFilterMenu)
})

overlay.addEventListener('click', closeFilterMenu)
