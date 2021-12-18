window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu__list').classList.toggle('active')
  })

  $(document).ready(function() {
    $('.burger').click(function(event) {
      $('.burger,.menu').toggleClass('active')
    })
  })
})
