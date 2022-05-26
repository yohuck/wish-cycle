// Location API for saying city.
// 
var location1 = document.getElementById('location1')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'fastah-ip.p.rapidapi.com',
		'X-RapidAPI-Key': '515a2898a9msh2f25577eb75a280p1a4b8cjsnb61a243f2616'
	}
};

fetch('https://fastah-ip.p.rapidapi.com/whereis/v1/json/auto', options)
	.then(response => response.json()).then(function(data){
    displayLocation(data)
  })
	.then(response => console.log(response))
	.catch(err => console.error(err));

  var displayLocation = function (data){
    location1.textContent= data.locationData.cityName
  }

// Search API for local recycling Info 
// 
$(function() {

    result = '';
    result2= '';
    result3= '';
    result4= '';
    
    // 49/100 API KEY uses
    var api_KEY= '8475c8f7cf63190a54808c26cc9b4360';
    var url = 'http://api.serpstack.com/search?access_key=' + api_KEY +'&type=web&query=electronics+recycling&auto_location=1&num=4'
    var url2 = 'http://api.serpstack.com/search?access_key=' + api_KEY +'&type=web&query=recycling&auto_location=1&num=4'
  
  
    $.get(url, function (data) {
        console.log(data)
        
        data.local_results.forEach(res =>{
            
            result = `<p>${res.title}</p>`
            
            $("#result").addClass("show")
            $("#result").append(result)
        })
  
        data.organic_results.forEach(res =>{
            
            result2 = `<p>${res.title}</p>
            <a target="_blank" href="${res.url}">${res.url}</a>`

            $("#result2").addClass("show")
            $("#result2").append(result2)
        })
    })
    $.get(url2, function (data) {
        console.log(data)
        data.local_results.forEach(res => {
            
            result3 = `<p>${res.title}</p>`
            
            $("#result3").addClass("show")
            $("#result3").append(result3)
        });
  
        data.organic_results.forEach(res => {
            
            result4 = `<p>${res.title}</p>
            <a target="_blank" href="${res.url}">${res.url}</a>`
            
            $("#result4").addClass("show")
            $("#result4").append(result4)
        })
    })
})