
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
let landing = document.getElementById('landing');
let submiter = document.getElementById('searchByPicture');
let searchByCode = document.getElementById('searchByCode');
let second = document.getElementById('second');
let cards = document.getElementsByClassName('pageTwo');
let pageThree = document.getElementsByClassName('pageThree');
let pizza = document.getElementById('pizza')


let searchButtons = [submiter, searchByCode];

searchButtons.forEach(element => element.addEventListener('mouseenter', function(){
  element.classList.remove('is-light');
}))

searchButtons.forEach(element => element.addEventListener('mouseleave', function(){
  element.classList.add('is-light');
}))

submit.addEventListener('mouseenter', function(event){
  console.log('hi')
  submit.classList.add('is-light')
})
submit.addEventListener('mouseleave', function(){
  submit.classList.remove('is-light')
})


submiter.addEventListener('click',function(){
    landing.setAttribute('style','transform: translate(-100%)');
    second.setAttribute('style','transform: translate(0%)')
})

searchByCode.addEventListener('click',function(){
    landing.setAttribute('style','transform: translate(-100%)');
    second.setAttribute('style','transform: translate(0%)')
})



for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click',function(){
        second.setAttribute('style','transform: translate(-100%');
        third.setAttribute('style','transform: translate(0%');
    })
}

for (let i = 0; i < pageThree.length; i++){
    pageThree[i].addEventListener('click',function(event){
        console.log(this.id);
        console.log(event)
        third.setAttribute('style','transform: translate(-100%');
        fourth.setAttribute('style','transform: translate(0%');
    })
}

pizza.addEventListener('click', function(){
    console.log(this.id)
    let queryTerm = this.id
    let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=material_synonyms like '%25" + queryTerm + "%25'" 
      console.log(query)
      fetchItem(query)
})


