document
  .getElementsByClassName('my-menu-button')[0]
  .addEventListener('click', function () {
    document.getElementsByClassName('my-menu')[0].classList.toggle('is-active')
  })

document
  .getElementsByClassName('gnb-menu-button')[0]
  .addEventListener('click', function () {
    document.getElementsByClassName('sidebar')[0].classList.add('is-active')
    document.getElementsByClassName('overlay')[0].classList.add('is-active')
  })

document
  .getElementsByClassName('overlay')[0]
  .addEventListener('click', function () {
    document.getElementsByClassName('sidebar')[0].classList.remove('is-active')
    document.getElementsByClassName('overlay')[0].classList.remove('is-active')
  })
