document
  .querySelector('.store-review-button')
  .addEventListener('click', function () {
    document.querySelector('.store-menu-group').classList.remove('is-active')
    document.querySelector('.store-menu-button').classList.remove('is-active')
    document.querySelector('.store-review-group').classList.add('is-active')
    document.querySelector('.store-review-button').classList.add('is-active')
  })

document
  .querySelector('.store-menu-button')
  .addEventListener('click', function () {
    document.querySelector('.store-review-group').classList.remove('is-active')
    document.querySelector('.store-review-button').classList.remove('is-active')
    document.querySelector('.store-menu-group').classList.add('is-active')
    document.querySelector('.store-menu-button').classList.add('is-active')
  })

document.querySelector('.flip-button').addEventListener('click', function () {
  document.querySelector('.flip-button').classList.toggle('is-active')
  document.querySelector('.selected-menu-body').classList.toggle('is-active')
  document.querySelector('.overlay').classList.toggle('is-active')
})
