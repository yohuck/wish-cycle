
let key = '4okwp6xyq58qv182lxa5x55u7'
let secretKey = '4hgvzbv2wm36miayquqhapo6x5fudfo8f5dvkid29m6m6o4ddz'
let appToken = '9Em3vkFlkE4FM14o46mGdx0ae'
let resultElement = document.getElementById('result');


let input = document.getElementById('search');
let submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
  let queryTerm = input.value
  let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=material_synonyms like '%25" + queryTerm + "%25'" 
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
  const results = data[0];
  for (const item in results) {
    const infoElem = document.createElement('p');
    infoElem.textContent = data[0][item];
    resultElement.append(infoElem)
  }
  if (data.length > 1){
    for (let i = 1; i < data.length; i++){
      let otherResult = data[i]['material_title']
      let otherResultLink = document.createElement('a');
      otherResultLink.setAttribute('href','#');
      otherResultLink.textContent = otherResult + " ";
      resultElement.append(otherResultLink)
    }
  }

});

}