// Location API for saying city.
// 
var location1 = document.getElementById('location1')

$(function(){
  let url3 = 'https://fastah-ip.p.rapidapi.com/whereis/v1/json/auto'
  $.ajax({
    url: url3,
    type: 'Get',
    headers: {
      'X-RapidAPI-Host': 'fastah-ip.p.rapidapi.com',
		  'X-RapidAPI-Key': '515a2898a9msh2f25577eb75a280p1a4b8cjsnb61a243f2616'
    }
  }) .done(function (data){
    displayLocation(data)
  })
  var displayLocation = function (data){
    location1.textContent= data.locationData.cityName
  }
})

// Search API for local recycling Info 
// 
$(function() {

    result = '';
    result2= '';
    result3= '';
    result4= '';
    
    //4/100 API KEY uses
    var api_KEY= 'fb3d1f5a0dbb8be1449df85450cf1633';
    var url = 'http://api.serpstack.com/search?access_key=' + api_KEY +'&type=web&query=electronics+recycling&auto_location=1&num=4'


    $.ajax({
      url: url,
      type: 'GET',
    }).done(function(data){
      data.local_results.forEach(result =>{
        let result1 = `<p>${result.title}</p>`

        $("#result").addClass("show")
        $("#result").append(result1)
      })
      data.organic_results.forEach(result =>{
        result2 = `<p>${result.title}</p>
        <a target="_blank" href="${result.url}">${result.url}</a>`

        $("#result2").addClass("show")
        $("#result2").append(result2)
      })
    })
  })
  var api_KEY= 'fb3d1f5a0dbb8be1449df85450cf1633';
  var url2 = 'http://api.serpstack.com/search?access_key=' + api_KEY +'&type=web&query=recycling&auto_location=1&num=4'
    $.ajax({
      url: url2,
      type:'GET',
    }).done(function(data){
      data.local_results.forEach(result => {
            
      result3 = `<p>${result.title}</p>`
        
      $("#result3").addClass("show")
      $("#result3").append(result3)
    })
    data.organic_results.forEach(result => {
            
      result4 = `<p>${result.title}</p>
      <a target="_blank" href="${result.url}">${result.url}</a>`
      
      $("#result4").addClass("show")
      $("#result4").append(result4)
  })
})