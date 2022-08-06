const filterButtonList = document.querySelectorAll('.filter-toggle')
const overlay = document.querySelector('.overlay')
const responsive = window.matchMedia('screen and (max-width: 768px')

function toggleFilterMenu() {
  const filter = this.parentNode
  const filterOpened = document.querySelector('.filter.is-open')

  if (filterOpened) {
    filterOpened.classList.remove('is-open')
  }

  if (filter != filterOpened) {
    filter.classList.add('is-open')
  }

  if (responsive.matches) {
    overlay.classList.add('is-active')
  }
}

function closeFilterMenu() {
  const filterOpened = document.querySelector('.filter.is-open')

  filterOpened.classList.remove('is-open')
  overlay.classList.remove('is-active')
}

filterButtonList.forEach(function (button) {
  button.addEventListener('click', toggleFilterMenu)
})

overlay.addEventListener('click', closeFilterMenu)
