
let key = '4okwp6xyq58qv182lxa5x55u7'
let secretKey = '4hgvzbv2wm36miayquqhapo6x5fudfo8f5dvkid29m6m6o4ddz'
let appToken = '9Em3vkFlkE4FM14o46mGdx0ae'
let resultElement = document.getElementById('result');


let input = document.getElementById('search');
let submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
  let queryTerm = input.value.toUpperCase();
  let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=upper(material_synonyms) like '%25" + queryTerm + "%25'" 
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
  console.log(data)
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
  landing.setAttribute('style','transform: translate(-100%');
  fourth.setAttribute('style','transform: translate(0%');

});

}
let landing = document.getElementById('landing');
let submiter = document.getElementById('searchByPicture');
let searchByCode = document.getElementById('searchByCode');
let second = document.getElementById('second');
let pageThree = document.getElementsByClassName('pageThree');
let pizza = document.getElementById('pizza')
let goBackBtn = document.getElementById('startOver');


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

goBackBtn.addEventListener('click', function(){
  // second.setAttribute('style','transform: translate(100%)');
  // pageThree.setAttribute('style','transform: translate(100%)');
})







// pizza.addEventListener('click', function(){
//     console.log(this.id)soappap
//     let queryTerm = this.id
//     let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=material_synonyms like '%25" + queryTerm + "%25'" 
//       console.log(query)
//       fetchItem(query)
// })



const recyclingObject = {
  Kitchen: {
    items: ["milk_jug", "coffee pods", "plastic_produce_bag", "pop_can", "pizza box", "tissue_box", "hand soap", "dish soap", "paper towel", "Aluminum Foil"],
    itemNames: ['Milk Jug', 'Coffee Pods', "Plastic Produce Bag", 'Beverage Can', "Pizza Box", 'Tissue Box', "Hand Soap", "Dish Soap", "Paper Towel", "Aluminum Foil"],
    icons: ['fa-jug', 'fa-coffee-beans', 'fa-sack', 'fa-can-food', 'fa-pizza', 'fa-box-tissue', 'fa-pump-soap', 'fa-jug-detergent', 'fa-scroll', 'fa-sheet-plastic'],
    icon: 'fa-kitchen-set',
  },

  Garage: {
    items: ["gas can", "oil_filter", "power_tool", "sports_equipment", "wood", "garden_hose", "bicycle_parts", "hardware", "Christmas lights", "Asphalt shingles"],
    itemNames: ["Gas Can", "Oil Filter", "Power Tools", "Sports Equipment", "Wood", "Garden Hose", "Bicycle Parts", "Hardware", "Holiday Lights", "Asphalt Shingles"],
    icons: ['fa-gas-pump', 'fa-oil-can-drip', 'fa-screwdriver-wrench', 'fa-basketball', 'fa-fence', 'fa-hose', 'fa-bicycle', 'fa-screwdriver-wrench', 'fa-lights-holiday', 'fa-chimney'],
    icon: 'fa-garage-open',
  },

  Packaging: {
    items: ["Bubble wrap", "duck tape", "Styrofoam packing peanuts", "Shrink wrap", "Bubble mailer", "Ribbons and bows", "Cardboard"],
    itemNames: ["Bubble wrap", "Duct Tape", "Styrofoam Packing Peanuts", "Shrink Wrap", "Bubble Mailer", "Ribbons and Bows", "Cardboard"],
    icons: ['fa-braille', 'fa-tape', 'fa-peanut', 'fa-sheet-plastic', 'fa-envelopes-bulk', 'fa-gift', 'fa-boxes-packing'],
    icon: 'fa-boxes-packing'
  },

  Electronics: {
    items: ["audio_cassette_tape_case", "vcr_player", "dvd", "Computer monitor", "calculator", "CD player", "headphones", "Computer cables", "Camera", "television" ],
    itemNames: ["Cassette Tape Case", "VCR/DVD/Media Player", "DVD", "Computer Monitor", "Calculator", "CD Player", "Headphones", "Computer Cables", "Camera", "Television"],
    icons: ['fa-cassette-tape', 'fa-film-simple', 'fa-compact-disc', 'fa-computer', 'fa-calculator', 'fa-disc-drive', 'fa-headphones', 'fa-code-branch', 'fa-camera', 'fa-tv'],
    icon: 'fa-plug-circle-bolt'
  },

  Hazardous: {
    items: ["pesticide_garden_chemicals_fertilizer", "old paint", "Motor oil", "mercury_thermometer", "Pool chemicals",  "Aerosol can (empty)"],
    itemNames: ["Pesticides, Garden Chemicals, Fertilizer", "Paint", "Motor Oil", "Mercury Thermometer", "Pool Chemicals",  "Aerosol Can"],
    icons: ['fa-flask-round-poison', 'fa-fill-drip', 'fa-oil-can-drip', 'fa-temperature-half', 'fa-person-swimming', 'fa-spray-can'],
    icon: 'fa-biohazard'
  },

  Bathroom: {
    items: ["toilet_seat", "plastic_detergent_bottle", "curtain_rod_wood_or_plastic", "Shower curtain rings", "deodorant", "Toothpaste tube", "toothbrush", "razor_disposable", "Shampoo bottle", "shaving_cream_can_empty"],
    itemNames: ["Toilet Seat", "Plastic Detergent Bottle", "Curtain Rod (Wood or Plastic)", "Shower Curtain Rings", "Deodorant", "Toothpaste Tube", "Toothbrush", "Disposable Razor", "Shampoo Bottle", "Shaving Cream Can"],
    icons: ['fa-toilet', 'fa-jug-detergent', 'fa-booth-curtain', 'fa-ring', 'fa-shower', 'fa-toothbrush', 'fa-teeth', 'fa-user-shakespeare', 'fa-jug-detergent', 'fa-pump-soap'],
    icon: ['fa-bath']
  },

  Living_Room: {
    items: ["book_hardcover", "Pillows and cushions", "Furniture", "Light fixture", "light_bulb_all_types","Coffee table", "Picture frame", "Magazine", "Artificial plants and flowers"],
    itemNames: ["Hardcover Book", "Pillows and Cushions", "Furniture", "Light Fixture", "Light Bulb","Coffee Table", "Picture Frame", "Magazine", "Artificial Plants"],
    icons: ['fa-book-sparkles', 'fa-mattress-pillow', 'fa-couch', 'fa-lamp-floor', 'fa-lightbulb-on', 'fa-table-picnic', 'fa-frame', 'fa-book', 'fa-leaf'],
    icon: 'fa-couch'
  },

  Bedroom: {
    items: ["stuffed_animal", "Shoes", "Backpacks & handbags", "Halloween costume", "Mattress",  "clothes", "hangers_plastic", "Electric blanket"],
    itemNames: ["Stuffed Animal", "Shoes", "Backpacks & Handbags", "Halloween Costume", "Mattress",  "Clothes", "Plastic Hanger", "Electric Blanket"],
    icons: ['fa-teddy-bear', 'fa-boot', 'fa-backpack', 'fa-mask', 'fa-mattress-pillow', 'fa-shirt', 'fa-clothes-hanger', 'fa-blanket-fire'],
    icon: 'fa-bed-front'
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
    icon.classList.add('fa-solid', 'fa-10x');
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
    let iconEditParent = cards[i].id
    let iconEdit = cards[i].children[0].children[1];
    iconEdit.classList.add(recyclingObject[iconEditParent].icon)
    cards[i].addEventListener('click',function(event){
      let chosenCategory = recyclingObject[this.id].itemNames;
      for (let i = 0; i < chosenCategory.length; i++){
        createCategoryTile(chosenCategory[i], thirdAncestor, 'pageThree');
        let iconNeeded = document.getElementById(chosenCategory[i]);
        console.log(iconNeeded.children[0].children[1]);
        iconNeeded.children[0].children[1].classList.remove('fa-kitchen-set')
        iconNeeded.children[0].children[1].classList.add(recyclingObject[this.id].icons[i])
        console.log(recyclingObject[this.id].icons[i])
      }
      for (let i = 0; i < pageThree.length; i++){
        pageThree[i].addEventListener('click',function(event){
            third.setAttribute('style','transform: translate(-100%');
            fourth.setAttribute('style','transform: translate(0%');
        })
      }
        second.setAttribute('style','transform: translate(-100%');
        third.setAttribute('style','transform: translate(0%');
    })
}
