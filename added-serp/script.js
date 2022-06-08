
let key = '4okwp6xyq58qv182lxa5x55u7'
let secretKey = '4hgvzbv2wm36miayquqhapo6x5fudfo8f5dvkid29m6m6o4ddz'
let appToken = '9Em3vkFlkE4FM14o46mGdx0ae'
let resultElement = document.getElementById('result');
let resultContent = document.getElementById('content')
let landing = document.getElementById('landing');
let fourth = document.getElementById('fourth');
let searchByCodeContainer = document.getElementById('searchByCodeContainer');
let searchByCodeAncestor = document.getElementById('searchByCode-ancestor');
let fourthbyCodeContainer = document.getElementById('fourthByCode')
let input = document.getElementById('search');
let submit = document.getElementById('submit');
let resultLabel = document.getElementById("resultLabel")
let loader = document.getElementById('loader')
let result2 = document.getElementById('result2')
let location1 = document.getElementById('location1');
let resultsByCode = document.getElementById('resultLabelbyCode')
let resultsByCodeTitle = document.getElementById('resultLabelbyCodeTitle')
submit.addEventListener('click', function(event){
  let queryTerm = input.value.toUpperCase()
  let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=upper(material_synonyms) like '%25" + queryTerm + "%25'" 
    console.log(query)
    fetchItem(query)
    landing.setAttribute('style','transform: translate(-100%)');
    fourth.setAttribute('style','transform: translate(0%)')
    resultLabel.textContent = queryTerm
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
    resultContent.innerHTML= []
  const results = data[0];
  console.log('got-here')
  console.log(results)
  for (const item in results) {
    const infoElem = document.createElement('p');
    infoElem.textContent = data[0][item];
    resultContent.append(infoElem)
  }
  if (data.length > 1){
    for (let i = 1; i < data.length; i++){
      let otherResult = data[i]['material_title']
      let otherResultLink = document.createElement('a');
      otherResultLink.setAttribute('href','#');
      otherResultLink.textContent = otherResult + " ";
      resultContent.append(otherResultLink)
    }
  }

});
}

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
    searchByCodeContainer.setAttribute('style','transform: translate(0%)');
    generateSearchByCodeOptions()
})

let saveBtn = document.getElementById('saveDate')
let datePicker = document.getElementById('datePicker')
saveBtn.addEventListener('click', function(e){
    e.preventDefault()
    let savedDate = datePicker.value
    localStorage.setItem('date', savedDate)
    renderdate()
})
let renderSaved = document.getElementById('savedDate')
let renderdate = () => {
    renderSaved.innerHTML = ''
    let grabPast = localStorage.getItem('date')
    renderSaved.append(grabPast)
    console.log(grabPast)
}

renderdate()

let goBackBtn = document.getElementById('startOver')
let goBackBtn2 = document.getElementById('startOver2')
let goBackBtn3 = document.getElementById('startOver3')
let goBackBtn4 = document.getElementById('startOver4')
let goBackBtn5 = document.getElementById('startOverFourByCode');
let goBackBtn6 = document.getElementById('startOver5')

goBackBtn.addEventListener('click', function(){
      second.setAttribute('style','transform: translate(100%)');
      landing.setAttribute('style','transform: translate(0%)');
    })

goBackBtn2.addEventListener('click', function(){
        third.setAttribute('style','transform: translate(100%)');
        second.setAttribute('style','transform: translate(0%)');
      })

goBackBtn3.addEventListener('click', function(){
        fourth.setAttribute('style','transform: translate(100%)');
        third.setAttribute('style','transform: translate(0%)');
      })
    
goBackBtn4.addEventListener('click', function(){
        searchByCodeContainer.setAttribute('style','transform: translate(100%)');
        landing.setAttribute('style','transform: translate(0%)');
        
      })
      
goBackBtn5.addEventListener('click', function(){
        fourthByCode.setAttribute('style','transform: translate(100%)');
        searchByCodeContainer.setAttribute('style','transform: translate(0%)');
      })

goBackBtn6.addEventListener('click', function(){
        fifth.setAttribute('style','transform: translate(100%)');
        landing.setAttribute('style','transform: translate(0%)');
        loader.setAttribute('style', 'display: block')
        result2.innerHTML = []
      })
    








// pizza.addEventListener('click', function(){
//     console.log(this.id)
//     let queryTerm = this.id
//     let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=material_synonyms like '%25" + queryTerm + "%25'" 
//       console.log(query)
//       fetchItem(query)
// })



const recyclingObject = {
    Kitchen: {
      name: 'Kitchen',
      items: ["milk_jug", "coffee pods", "plastic_produce_bag", "pop_can", "pizza box", "tissue_box", "hand soap", "dish soap", "paper towel", "Aluminum Foil"],
      itemNames: ['Milk Jug', 'Coffee Pods', "Plastic Produce Bag", 'Beverage Can', "Pizza Box", 'Tissue Box', "Hand Soap", "Dish Soap", "Paper Towel", "Aluminum Foil"],
      icons: ['fa-jug', 'fa-coffee-beans', 'fa-sack', 'fa-can-food', 'fa-pizza', 'fa-box-tissue', 'fa-pump-soap', 'fa-jug-detergent', 'fa-scroll', 'fa-sheet-plastic'],
      icon: 'fa-kitchen-set',
    },
  
    Garage: {
      name: 'Garage',
      items: ["gas can", "oil_filter", "power_tool", "sports_equipment", "wood", "garden_hose", "bicycle_parts", "hardware", "Christmas lights", "Asphalt shingles"],
      itemNames: ["Gas Can", "Oil Filter", "Power Tools", "Sports Equipment", "Wood", "Garden Hose", "Bicycle Parts", "Hardware", "Holiday Lights", "Asphalt Shingles"],
      icons: ['fa-gas-pump', 'fa-oil-can-drip', 'fa-screwdriver-wrench', 'fa-basketball', 'fa-fence', 'fa-hose', 'fa-bicycle', 'fa-screwdriver-wrench', 'fa-lights-holiday', 'fa-chimney'],
      icon: 'fa-garage-open',
    },
  
    Packaging: {
      name: 'Packaging',
      items: ["Bubble wrap", "duck tape", "Styrofoam packing peanuts", "Shrink wrap", "Bubble mailer", "Ribbons and bows", "Cardboard"],
      itemNames: ["Bubble wrap", "Duct Tape", "Styrofoam Packing Peanuts", "Shrink Wrap", "Bubble Mailer", "Ribbons and Bows", "Cardboard"],
      icons: ['fa-braille', 'fa-tape', 'fa-peanut', 'fa-sheet-plastic', 'fa-envelopes-bulk', 'fa-gift', 'fa-boxes-packing'],
      icon: 'fa-boxes-packing'
    },
  
    Electronics: {
      name: 'Electronics',
      items: ["audio_cassette_tape_case", "vcr_player", "dvd", "Computer monitor", "calculator", "CD player", "headphones", "Computer cables", "Camera", "television" ],
      itemNames: ["Cassette Tape Case", "VCR/DVD/Media Player", "DVD", "Computer Monitor", "Calculator", "CD Player", "Headphones", "Computer Cables", "Camera", "Television"],
      icons: ['fa-cassette-tape', 'fa-film-simple', 'fa-compact-disc', 'fa-computer', 'fa-calculator', 'fa-disc-drive', 'fa-headphones', 'fa-code-branch', 'fa-camera', 'fa-tv'],
      icon: 'fa-plug-circle-bolt'
    },
  
    Hazardous: {
      name: 'Hazardous',
      items: ["pesticide_garden_chemicals_fertilizer", "old paint", "Motor oil", "mercury_thermometer", "Pool chemicals",  "Aerosol can (empty)"],
      itemNames: ["Pesticides, Garden Chemicals, Fertilizer", "Paint", "Motor Oil", "Mercury Thermometer", "Pool Chemicals",  "Aerosol Can"],
      icons: ['fa-flask-round-poison', 'fa-fill-drip', 'fa-oil-can-drip', 'fa-temperature-half', 'fa-person-swimming', 'fa-spray-can'],
      icon: 'fa-biohazard'
    },
  
    Bathroom: {
      name: 'Bathroom',
      items: ["toilet_seat", "plastic_detergent_bottle", "curtain_rod_wood_or_plastic", "Shower curtain rings", "deodorant", "Toothpaste tube", "toothbrush", "razor_disposable", "Shampoo bottle", "shaving_cream_can_empty"],
      itemNames: ["Toilet Seat", "Plastic Detergent Bottle", "Curtain Rod (Wood or Plastic)", "Shower Curtain Rings", "Deodorant", "Toothpaste Tube", "Toothbrush", "Disposable Razor", "Shampoo Bottle", "Shaving Cream Can"],
      icons: ['fa-toilet', 'fa-jug-detergent', 'fa-booth-curtain', 'fa-ring', 'fa-shower', 'fa-toothbrush', 'fa-teeth', 'fa-user-shakespeare', 'fa-jug-detergent', 'fa-pump-soap'],
      icon: ['fa-bath']
    },
  
    Living_Room: {
      name: 'Living Room',
      items: ["book_hardcover", "Pillows and cushions", "Furniture", "Light fixture", "light_bulb_all_types","Coffee table", "Picture frame", "Magazine", "Artificial plants and flowers"],
      itemNames: ["Hardcover Book", "Pillows and Cushions", "Furniture", "Light Fixture", "Light Bulb","Coffee Table", "Picture Frame", "Magazine", "Artificial Plants"],
      icons: ['fa-book-sparkles', 'fa-mattress-pillow', 'fa-couch', 'fa-lamp-floor', 'fa-lightbulb-on', 'fa-table-picnic', 'fa-frame', 'fa-book', 'fa-leaf'],
      icon: 'fa-couch'
    },
  
    Bedroom: {
      name: 'Bedroom',
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
    parentTile.classList.add('tile', 'is-parent', 'is-4', pageTag);
    parentTile.setAttribute('id', category)
    let article = document.createElement('article');
    article.classList.add('tile', 'is-child', 'box', 'notification', 'is-secondary');
    let categoryName = document.createElement('p');
    categoryName.classList.add('title', 'has-text-white');
    categoryName.textContent = category;
    let icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-10x', 'is-third');
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
      let chosenCat = recyclingObject[this.id]
      console.log(chosenCat)
      let chosenCategory = recyclingObject[this.id].itemNames;
      console.log('hello')
      let chosenCategoryCamel = recyclingObject[this.id]
      console.log(chosenCategoryCamel)
      thirdAncestor.innerHTML = [];
      for (let i = 0; i < chosenCategory.length; i++){
        createCategoryTile(chosenCategory[i], thirdAncestor, 'pageThree');
        let iconNeeded = document.getElementById(chosenCategory[i]);
        console.log(iconNeeded.children[0].children[1]);
        iconNeeded.children[0].children[1].classList.remove('fa-kitchen-set')
        iconNeeded.children[0].children[1].classList.add(recyclingObject[this.id].icons[i])
        console.log(recyclingObject[this.id].icons[i]);
      }
      for (let i = 0; i < pageThree.length; i++){
        pageThree[i].addEventListener('click',function(event){
            //calls API for selected Item
            let searchByPictureQuery = this.id
            console.log(searchByPictureQuery)
            let queryTerm = searchByPictureQuery.toUpperCase()
            let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=upper(material_title) like '%25" + queryTerm + "%25'" 
            console.log(query)
            fetchItem(query)
            third.setAttribute('style','transform: translate(-100%');
            fourth.setAttribute('style','transform: translate(0%');
            resultLabel.textContent = queryTerm
        })
      }
        second.setAttribute('style','transform: translate(-100%');
        third.setAttribute('style','transform: translate(0%');
    })
}




var generalSearch = () =>{
    const successCallback = (position) => {
        loader.style.display = 'block'
        fourth.setAttribute('style','transform: translate(-100%)');
        fourthbyCodeContainer.setAttribute('style','transform:translate(-100%)')
        fifth.setAttribute('style','transform: translate(0%)')
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
                let city = data[0].name

                let result1 = '';
                // commented out URL
                let url2 = 'https://api.valueserp.com/search?api_key=C900A666A97042E0BA3DB407B95D254F&q=recycling&location='+ city+'&gl=us&cr=us&lr=lang_en&num=3'
                $.ajax({
                url: url2,
                type: 'GET',
                }).done(function(data){
                    console.log(data)
                    data.local_results.forEach(result =>{
                    result1 = `<h1 class="is-third title is-3">${result.title}</h1>
                        <p class="is-third">${result.extensions[4]}</p>
                        <a class="is-third">${result.link}</a><br>`
                        
                    
                    $("#result2").append(result1)
                    loader.setAttribute('style', 'display:none')
                })     
            })  
            })
    }
    const errorCallback = (error) =>{
        console.error(error)
        alert('you must allow location to search')
    }

    navigator.geolocation.getCurrentPosition(successCallback,errorCallback)
}
var electronicSearch = () =>{
    const successCallback2 = (position) => {
        fourth.setAttribute('style','transform: translate(-100%)');
        fourthbyCodeContainer.setAttribute('style','transform:translate(-100%)')
        fifth.setAttribute('style','transform: translate(0%)')
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
                let city = data[0].name
    
                let result1 = '';
                // Commented out URL
                let url2 = 'https://api.valueserp.com/search?api_key=C900A666A97042E0BA3DB407B95D254F&q=electronics+recycling&location='+ city+'&gl=us&cr=us&lr=lang_en&num=3'
    
                $.ajax({
                url: url2,
                type: 'GET',
                }).done(function(data){
                    console.log(data)
                    data.local_results.forEach(result =>{
                    result1 = `<h1 class="title is-3">${result.title}</h1>
                        <p>${result.extensions[4]}</p>
                        <a>${result.link}</a><br>`
                    
                    $("#result2").append(result1)
                    loader.setAttribute('style', 'display:none')
                })     
            })  
            })
    }
    const errorCallback = (error) =>{
        console.error(error)
        alert('you must allow location to search')
    }
    
    navigator.geolocation.getCurrentPosition(successCallback2,errorCallback)
}


var hazardSearch = () =>{
    const successCallback3 = (position) => {
        fourth.setAttribute('style','transform: translate(-100%)');
        fourthbyCodeContainer.setAttribute('style','transform:translate(-100%)')
        fifth.setAttribute('style','transform: translate(0%)')
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
                let city = data[0].name
    
                let result1 = '';
                // Commented out URL
                let url2 = 'https://api.valueserp.com/search?api_key=C900A666A97042E0BA3DB407B95D254F&q=hazardous+recycling&location='+ city+'&gl=us&cr=us&lr=lang_en&num=3'
    
                $.ajax({
                url: url2,
                type: 'GET',
                }).done(function(data){
                    console.log(data)
                    data.local_results.forEach(result =>{
                    result1 = `<h1 class="title is-3">${result.title}</h1>
                        <p>${result.extensions[4]}</p>
                        <a>${result.link}</a><br>`
    
                    $("#result2").append(result1)
                    loader.setAttribute('style', 'display:none')
                })     
            })  
            })
    }
    const errorCallback = (error) =>{
        console.error(error)
        alert('you must allow location to search')
    }
    
    navigator.geolocation.getCurrentPosition(successCallback3,errorCallback)
    }
var resetSerp = () => {
    result2.textContent = []
    loader.setAttribute('style', 'display:block')
}


// Search By Code Object
const recyclingSymbols = {
  codeOne: {
      code: '1',
      Name: 'PETE',
      FullName: 'Polyethylene Terephthalate',
      CommonItems: ["soft drinks", "water bottle", "single use itmes"],
      Notes: "recycled by curbside pickup, rinse and clean of any food, remove caps",
  },

  codeTwo: {
      code: '2',
      Name: 'HDPE',
      FullName: 'High Density Polyethylene',
      CommonItems: ["milk jugs", "juice bottles", "household cleaner bottles", "motor oil bottles", "cereal box liners"],
      Notes: "recycled by curbside pickup ",
  },

  codeThree: {
      code: '3',
      Name: 'PVC',
      FullName: 'Polyvinyl Choride', 
      CommonItems: ["blister packaging", "siding", "wire jacketing", "piping"],
      Notes: "can rarly be recycled, ask local waste management if it can be thrown in the trash or dropped off at a collection center",
  },

  codeFour: {
      code: '4',
      Name: 'LDPE',
      FullName: 'Low Density Polyethylene',
      CommonItems: ["Squeezable bottles", "frozen food bags", "bread bags","shopping bags"],
      Notes: "Not recyclable, return shopping bags to the store to be reused",
  },
  codeFive: {
      code: '5',
      Name: 'PP',
      FullName: 'Polypropylene',
      CommonItems: ["yogurt containers", "syrup bottles","straws", "caps"],
      Notes: "curbside progrms may recycle these, clean of any food or product, throw cap in the garbage",
  },

  codeSix: {
      code: '6',
      Name: 'PS',
      FullName: 'Polystryrene',
      CommonItems: ["disposable plates", "egg containers", "meat tray", "carry-out containers", "compact disk tray", "styrofoam cups"],
      Notes: "Not recyclable, place in a bag and squeeze the air out and thorw away",
  },

  codeSeven: {
      code: '7',
      Name: 'Miscellaneous',
      FullName: 'Other',
      CommonItems: ["3-5 gallon water bottles", "bullet proof material", "sunglasses","DVD","ipod and computer cases","nylon"],
      Notes: "Not recyclable",
  }
  }   
  
  



    let generateSearchByCodeOptions = () => {
        searchByCodeAncestor.innerHTML = []
      for (codes in recyclingSymbols){
        let parentTile = document.createElement('div');
        parentTile.classList.add('tile', 'is-parent', 'searchByCodePage', 'is-4');
        parentTile.setAttribute('id', recyclingSymbols[codes].code)
        let article = document.createElement('article');
        article.classList.add('tile', 'is-child', 'box', 'notification', 'is-secondary');
        let categoryName = document.createElement('p');
        categoryName.classList.add('title', 'has-text-white');
        categoryName.textContent = recyclingSymbols[codes].Name + ' ' + recyclingSymbols[codes].code;
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-10x', 'is-third', 'fa-recycle');
        article.appendChild(categoryName);
        article.appendChild(icon);
        parentTile.appendChild(article);
        searchByCodeAncestor.appendChild(parentTile);
      };
      let pageTwoByCode = document.getElementsByClassName('searchByCodePage');
      for (let i = 0; i < pageTwoByCode.length; i++){
        pageTwoByCode[i].addEventListener('click',function(event){
            let searchByCodeQuery = this.id
            generateFourthByCode(searchByCodeQuery);
            searchByCodeContainer.setAttribute('style','transform: translate(-100%');
            fourthbyCodeContainer.setAttribute('style','transform: translate(0%');
        })
      }
    }

let generateFourthByCode = code => {
    resultsByCodeTitle.innerHTML = []
    resultsByCode.innerHTML = []
  console.log(code)
  let codeSwitch;
  switch (code) {
    case '1': codeSwitch = 'codeOne';
      break;
    case '2': codeSwitch = 'codeTwo';
      break;
    case '3': codeSwitch = 'codeThree';
      break;
    case '4': codeSwitch = 'codeFour';
      break;
    case '5': codeSwitch = 'codeFive';
      break;
    case '6': codeSwitch = 'codeSix';
      break;
    case '7': codeSwitch = 'codeSeven';
      break;
    default:
      break;
  }
  console.log(codeSwitch)
  let byCodeParent = document.createElement('p')
  byCodeParent.textContent = code + ' ' + recyclingSymbols[codeSwitch].Name;
  let byCodeInfo = document.createElement('p');
  byCodeInfo.classList.add('byCodeInfo')
  byCodeInfo.textContent = recyclingSymbols[codeSwitch].FullName;
  let commonItems = document.createElement('ul');
  commonItems.textContent = 'Common Examples:'
  commonItems.classList.add('byCodeList')
  for (let i = 0; i < recyclingSymbols[codeSwitch].CommonItems.length; i++){
    let commonItem = document.createElement('li');
    commonItem.textContent = recyclingSymbols[codeSwitch].CommonItems[i];
    commonItems.appendChild(commonItem)
  };
  let byCodeNotes = document.createElement('p');
  byCodeNotes.textContent = recyclingSymbols[codeSwitch].Notes
  byCodeNotes.classList.add('byCodeNotes')
  resultsByCodeTitle.appendChild(byCodeParent)
  resultsByCodeTitle.appendChild(byCodeInfo)
  resultsByCode.appendChild(commonItems)
  resultsByCode.appendChild(byCodeNotes)
}
