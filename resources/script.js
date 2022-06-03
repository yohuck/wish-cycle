
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







// pizza.addEventListener('click', function(){
//     console.log(this.id)
//     let queryTerm = this.id
//     let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=material_synonyms like '%25" + queryTerm + "%25'" 
//       console.log(query)
//       fetchItem(query)
// })



const recyclingObject = {
  kitchen: {
    items: ["milk_jug", "coffee pods", "plastic_produce_bag", "pop_can", "pizza box", "tissue_box", "hand soap", "dish soap", "paper towel", "Aluminum Foil"],
  },

  garage: {
    items: ["gas can", "oil_filter", "power_tool", "sports_equipment", "wood", "garden_hose", "bicycle_parts", "hardware", "Christmas lights", "Asphalt shingles"]
  },

  packaging: {
    items: ["Bubble wrap", "duck tape", "Styrofoam packing peanuts", "Shrink wrap", "Bubble mailer", "Ribbons and bows", "Cardboard"]
  },

  electronics: {
    items: ["audio_cassette_tape_case", "vcr_player", "dvd", "Computer monitor", "calculator", "CD player", "headphones", "Computer cables", "Camera", "television" ]
  },

  hazardous: {
    items: ["pesticide_garden_chemicals_fertilizer", "old paint", "Motor oil", "mercury_thermometer", "Pool chemicals",  "Aerosol can (empty)"]
  },

  bathroom: {
    items: ["toilet_seat", "plastic_detergent_bottle", "curtain_rod_wood_or_plastic", "Shower curtain rings", "deodorant", "Toothpaste tube", "toothbrush", "razor_disposable", "Shampoo bottle", "shaving_cream_can_empty"]
  },

  livingRoom: {
    items: ["book_hardcover", "Pillows and cushions", "Furniture", "Light fixture", "light_bulb_all_types","Coffee table", "Picture frame", "Magazine", "Artificial plants and flowers" ]
  },

  bedroom: {
    items: ["stuffed_animal", "Shoes", "Backpacks & handbags", "Halloween costume", "Mattress",  "clothes", "hangers_plastic", "Electric blanket"]
  }
  
}

  let secondAncestor = document.getElementById('second-ancestor');
  let thirdAncestor = document.getElementById('third-ancestor');

  let createCategoryTile = (category, page, pageTag) => {
    let parentTile = document.createElement('div');
    parentTile.classList.add('tile', 'is-parent', pageTag);
    parentTile.setAttribute('id', category)
    let article = document.createElement('article');
    article.classList.add('tile', 'is-child', 'box', 'notification', 'is-danger');
    let categoryName = document.createElement('p');
    categoryName.classList.add('title', 'has-text-white');
    categoryName.textContent = category;
    let icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-kitchen-set', 'fa-10x');
    article.appendChild(categoryName);
    article.appendChild(icon);
    parentTile.appendChild(article);
    page.appendChild(parentTile)
  }
  
  for (let category in recyclingObject){
    createCategoryTile(category, secondAncestor, 'pageTwo')
  }
  let cards = document.getElementsByClassName('pageTwo');
  for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click',function(event){
      let chosenCategory = recyclingObject[this.id].items;
      console.log(chosenCategory)
      for (let i = 0; i < chosenCategory.length; i++){
        createCategoryTile(chosenCategory[i], thirdAncestor, 'pageThree')
      }
      for (let i = 0; i < pageThree.length; i++){
        pageThree[i].addEventListener('click',function(event){
            console.log(this.id);
            console.log(event)
            third.setAttribute('style','transform: translate(-100%');
            fourth.setAttribute('style','transform: translate(0%');
        })
      }
        second.setAttribute('style','transform: translate(-100%');
        third.setAttribute('style','transform: translate(0%');
    })
}
