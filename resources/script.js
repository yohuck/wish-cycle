
let key = '4okwp6xyq58qv182lxa5x55u7'
let secretKey = '4hgvzbv2wm36miayquqhapo6x5fudfo8f5dvkid29m6m6o4ddz'
let appToken = '9Em3vkFlkE4FM14o46mGdx0ae'
let apiUrl = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=material_synonyms='dish washing liquid container'" 
let input = document.getElementById('search');
let submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
    let query = apiUrl
    console.log(query)
    fetchItem(query)

})

let fetchItem = urlSearch => {

$.ajax({
    url: urlSearch,
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "9Em3vkFlkE4FM14o46mGdx0ae"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});

}