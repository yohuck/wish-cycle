// search by asking for location 
var location1 = document.getElementById('location1')
var generalBtn = document.getElementById('general')
var electronicsBtn = document.getElementById('electronics')
var hazardBtn = document.getElementById('hazard')

var generalSearch = () =>{
const successCallback = (position) => {
    console.log(position);
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    var apiKey = 'e6c7145ef0589d5c1799b396e8bd2be3'

    let url = 'https://api.openweathermap.org/geo/1.0/reverse?lat='+latitude+'&lon='+longitude+'&limit=1&appid=' + apiKey
        $.ajax({
            url: url,
            type: 'get',
        }) .done(function (data){
            console.log(data)
            location1.textContent = 'General Recycling for '+ data[0].name + ', ' + data[0].state
            city = data[0].name

            let result1 = '';
            let url2 = 'https://api.valueserp.com/search?api_key=A194679C5A1340D5986D72FAE3E67B62&q=recycling&location='+ city+'&gl=us&cr=us&lr=lang_en&num=3'

            $.ajax({
            url: url2,
            type: 'GET',
            }).done(function(data){
                console.log(data)
                data.local_results.forEach(result =>{
                result1 = `<h1 class="title is-3">${result.title}</h1>
                    <p>Phone Number: ${result.extensions[4]}</p>
                    <a>${result.link}</a><br>`

                $("#result").append(result1)
                $("#result").addClass("show")
            })     
        })  
        })
}
const errorCallback = (error) =>{
    console.error(error)
}

navigator.geolocation.getCurrentPosition(successCallback,errorCallback)
}

$('#general').on('click', generalSearch)


var electronicSearch = () =>{
    const successCallback2 = (position) => {
        console.log(position);
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        var apiKey = 'e6c7145ef0589d5c1799b396e8bd2be3'
    
        let url = 'https://api.openweathermap.org/geo/1.0/reverse?lat='+latitude+'&lon='+longitude+'&limit=1&appid=' + apiKey
            $.ajax({
                url: url,
                type: 'get',
            }) .done(function (data){
                console.log(data)
                $('#hidden').removeClass('hide')
                location1.textContent = 'Electronics Recycling for '+ data[0].name + ', ' + data[0].state
                city = data[0].name
    
                let result1 = '';
                let url2 = 'https://api.valueserp.com/search?api_key=A194679C5A1340D5986D72FAE3E67B62&q=electronics+recycling&location='+ city+'&gl=us&cr=us&lr=lang_en&num=3'
    
                $.ajax({
                url: url2,
                type: 'GET',
                }).done(function(data){
                    console.log(data)
                    data.local_results.forEach(result =>{
                    result1 = `<h1 class="title is-3">${result.title}</h1>
                        <p>${result.extensions[4]}</p>
                        <a>${result.link}</a><br>`
                    $("#result").append(result1)
                    $("#result").addClass("show")
                })     
            })  
            })
    }
    const errorCallback = (error) =>{
        console.error(error)
    }
    
    navigator.geolocation.getCurrentPosition(successCallback2,errorCallback)
}

$('#electronics').on('click', electronicSearch)  


var hazardSearch = () =>{
    const successCallback3 = (position) => {
        console.log(position);
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        var apiKey = 'e6c7145ef0589d5c1799b396e8bd2be3'
    
        let url = 'https://api.openweathermap.org/geo/1.0/reverse?lat='+latitude+'&lon='+longitude+'&limit=1&appid=' + apiKey
            $.ajax({
                url: url,
                type: 'get',
            }) .done(function (data){
                console.log(data)
                $('#hidden').removeClass('hide')
                location1.textContent = 'Hazardous Recycling for '+ data[0].name + ', ' + data[0].state
                city = data[0].name
    
                let result1 = '';
                let url2 = 'https://api.valueserp.com/search?api_key=A194679C5A1340D5986D72FAE3E67B62&q=hazardous+recycling&location='+ city+'&gl=us&cr=us&lr=lang_en&num=3'
    
                $.ajax({
                url: url2,
                type: 'GET',
                }).done(function(data){
                    console.log(data)
                    data.local_results.forEach(result =>{
                    result1 = `<h1 class="title is-3">${result.title}</h1>
                        <p>${result.extensions[4]}</p>
                        <a>${result.link}</a><br>`
    
                    $("#result").append(result1)
                    $("#result").addClass("show")
                })     
            })  
            })
    }
    const errorCallback = (error) =>{
        console.error(error)
    }
    
    navigator.geolocation.getCurrentPosition(successCallback3,errorCallback)
    }

    $('#hazard').on('click', hazardSearch)