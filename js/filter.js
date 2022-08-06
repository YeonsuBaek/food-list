const filterButtonList = document.querySelectorAll('.filter-toggle')
const overlay = document.querySelector('.overlay')
const responsive = window.matchMedia('screen and (max-width: 768px')

function toggleFilterMenu() {
  const filter = this.parentNode
  const filterOpened = document.querySelector('.filter.is-open')

  if (filterOpened) {
    console.log(1)
    filterOpened.classList.remove('is-open')
  }

  if (filter == filterOpened) {
    console.log(2)
    filter.classList.remove('is-open')
  } else {
    console.log(3)
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
