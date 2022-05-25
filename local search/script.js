var location1 = document.getElementById('location')

var nextPage = (event) => {
  event.preventDefault()
  window.location.assign('./recycling-results.html')
}

$("#submit").on('click', nextPage)
