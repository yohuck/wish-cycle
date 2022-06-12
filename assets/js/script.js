let key = '4okwp6xyq58qv182lxa5x55u7'
let secretKey = '4hgvzbv2wm36miayquqhapo6x5fudfo8f5dvkid29m6m6o4ddz'
let appToken = '9Em3vkFlkE4FM14o46mGdx0ae'
let resultElement = document.getElementById('result');
let resultContent = document.getElementById('content');
let resultContentByName = document.getElementById('contentByName')
let landing = document.getElementById('landing');
let fourth = document.getElementById('fourth');
let searchByCodeContainer = document.getElementById('searchByCodeContainer');
let searchByCodeAncestor = document.getElementById('searchByCode-ancestor');
let fourthbyCodeContainer = document.getElementById('fourthByCode')
let input = document.getElementById('search');
let submit = document.getElementById('submit');
let resultLabel = document.getElementById("resultLabel");
let resultLabelByName = document.getElementById('resultLabelByName')
let loader = document.getElementById('loader')
let result2 = document.getElementById('result2')
let location1 = document.getElementById('location1');
let resultsByCode = document.getElementById('resultLabelbyCode')
let resultsByCodeTitle = document.getElementById('resultLabelbyCodeTitle');
let saveDateButton = document.getElementById('viewSaveDate');
let saveDateElement = document.getElementById('date-save')
let infoSection = document.getElementById('infoSection');
let infoButton = document.getElementById('infoIcon')
let modal = document.getElementById('modal')
let modalButton= document.getElementById('modalBtn')
let submiter = document.getElementById('searchByPicture');
let searchByCode = document.getElementById('searchByCode');
let searchByNameResults = document.getElementById('searchByNameContainer');
let second = document.getElementById('second');
let pageThree = document.getElementsByClassName('pageThree');
let pizza = document.getElementById('pizza')
let searchButtons = [submiter, searchByCode];
let saveBtn = document.getElementById('saveDate')
let datePicker = document.getElementById('datePicker')
let secondAncestor = document.getElementById('second-ancestor');
let thirdAncestor = document.getElementById('third-ancestor');
let goBackBtn = document.getElementById('startOver')
let goBackBtn2 = document.getElementById('startOver2')
let goBackBtn3 = document.getElementById('startOver3')
let goBackBtn4 = document.getElementById('startOver4')
let goBackBtn5 = document.getElementById('startOverFourByCode');
let goBackBtn6 = document.getElementById('startOver5');
let goBackBtn7 = document.getElementById('startOverInfo');
let goBackBtn8 = document.getElementById('removeDateElement');
let goBackBtn9 = document.getElementById('startOverByName')
let recyclingSearch = document.getElementById('recyclingSearch')
let electronicSearch1 = document.getElementById('electronicSearch')
let hazardSearch1 = document.getElementById('hazardSearch')
// Search by input box and clicking submit button
submit.addEventListener('click', function(event){
    if(input.value == ''){
        void(0)
    } else{
  let queryTerm = input.value.toUpperCase()
  let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=upper(material_title) like '%25" + queryTerm + "%25'" 
    fetchItem(query, resultContentByName)
    landing.setAttribute('style','transform: translate(-100%)');
    searchByNameResults.setAttribute('style','transform: translate(0%)')
    resultLabel.textContent = queryTerm
}})

// search by input box and pressing enter
input.addEventListener('keypress', (event) => {
    if(input.value == ''){
        void(0)
    } else{
   if(event.key === "Enter") {
    let queryTerm = input.value.toUpperCase()
    let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=upper(material_title) like '%25" + queryTerm + "%25'" 
      fetchItem(query, resultContentByName)
      landing.setAttribute('style','transform: translate(-100%)');
      searchByNameResults.setAttribute('style','transform: translate(0%)')
      resultLabelByName.textContent = queryTerm
  }
}})

// help page
infoButton.addEventListener('click', function(){
  infoSection.setAttribute('style','transform: translate(0%)');
  landing.setAttribute('style', 'transform: translate(100%)')
})

// save recycling dropdown
saveDateButton.addEventListener('click', function(){
  saveDateElement.setAttribute('style','transform: translateY(0%)')
})


// The function being called for recycling information by picture or by input
let fetchItem = (urlSearch, destination) => {

$.ajax({
    url: urlSearch,
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "9Em3vkFlkE4FM14o46mGdx0ae"
    }
}).done(function(data) {
    const infoElem = document.createElement('p');
    resultContentByName = []
    if (data[0].material_synonyms == undefined & data[0].material_synonyms == undefined){
        infoElem.innerHTML= 'Where to bring:  -- ' + data[0].stream_title
        destination.append(infoElem)
        console.log(data)
    }else if(data[0].material_synonyms == undefined){
        infoElem.innerHTML = 'Special instructions: --  ' +data[0].special_instructions+'<br/> <br/>'+ 'Where to bring:  -- ' + data[0].stream_title
        destination.append(infoElem)
        console.log(data)
    }else if (data[0].special_instructions == undefined){
        infoElem.innerHTML = 'Similar products:  -- '+ data[0].material_synonyms+ '<br/> <br/>'+ 'Where to bring:  -- ' + data[0].stream_title
        destination.append(infoElem)
        console.log(data)
    } else if (data[0].stream_title == undefined){
        infoElem.innerHTML = 'Similar products:  -- '+ data[0].material_synonyms+ '<br/> <br/>' +'Special instructions: --  ' +data[0].special_instructions
        destination.append(infoElem)
    } else {
    infoElem.innerHTML = 'Similar products:  -- '+ data[0].material_synonyms+ '<br/> <br/>' +'Special instructions: --  ' +data[0].special_instructions+'<br/> <br/>'+ 'Where to bring:  -- ' + data[0].stream_title
    destination.append(infoElem)
    console.log(data)
    }
    if (data[0].stream_title == 'Eco Station drop-off (household hazardous waste)'){
        hazardSearch1.setAttribute('style', 'display:block')
        electronicSearch1.setAttribute('style', 'display:none')
        recyclingSearch.setAttribute('style','display:none')
    } else if (data [0].stream_title == 'Reuse') {
        electronicSearch1.setAttribute('style', 'display:block')
        recyclingSearch.setAttribute('style', 'display:block')
        hazardSearch1.setAttribute('style:block')
        destination.append(newEl)
    }
    else if (data[0].stream_title== 'Recycling Depot drop-off'){
        electronicSearch1.setAttribute('style', 'display:none')
        recyclingSearch.setAttribute('style', 'display:block')
        hazardSearch1.setAttribute('style', 'display: none')
    } else if (data[0].stream_title== 'Recycling collection'){
        electronicSearch1.setAttribute('style', 'display:none')
        recyclingSearch.setAttribute('style', 'display:block')
        hazardSearch1.setAttribute('style', 'display: none')
    } 
    else if (data[0].stream_title== 'Eco Station drop-off (electronics & appliances)'){
        electronicSearch1.setAttribute('style', 'display:block')
        recyclingSearch.setAttribute('style', 'display:none')
        hazardSearch1.setAttribute('style', 'display:none')
    } else {
        electronicSearch1.setAttribute('style', 'display:block')
        recyclingSearch.setAttribute('style', 'display:block')
        hazardSearch1.setAttribute('style', 'display:block')
    } 

});

}


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
}

renderdate();

let scrollToTop = () => {
  window.scroll({
    top: 0
  })
}

//   Back Buttons

goBackBtn.addEventListener('click', function(){
      scrollToTop();
      second.setAttribute('style','transform: translate(100%)');
      landing.setAttribute('style','transform: translate(0%)');
    })

goBackBtn2.addEventListener('click', function(){
  scrollToTop();
        third.setAttribute('style','transform: translate(100%)');
        second.setAttribute('style','transform: translate(0%)');
      })

goBackBtn3.addEventListener('click', function(){
  scrollToTop();
  resultContent.innerHTML = []
        fourth.setAttribute('style','transform: translate(100%)');
        third.setAttribute('style','transform: translate(0%)');
      })
    
goBackBtn4.addEventListener('click', function(){
  scrollToTop();
        searchByCodeContainer.setAttribute('style','transform: translate(100%)');
        landing.setAttribute('style','transform: translate(0%)');
        
      })
      
goBackBtn5.addEventListener('click', function(){
  scrollToTop();
        fourthByCode.setAttribute('style','transform: translate(100%)');
        searchByCodeContainer.setAttribute('style','transform: translate(0%)');
      })

goBackBtn6.addEventListener('click', function(){
  scrollToTop();
        fifth.setAttribute('style','transform: translate(100%)');
        landing.setAttribute('style','transform: translate(0%)');
        loader.setAttribute('style', 'display: block')
        result2.innerHTML = []
      })
    
goBackBtn7.addEventListener('click', function(){
  scrollToTop();
  infoSection.setAttribute('style','transform: translate(-100%)')
  landing.setAttribute('style', 'transform: translate(0%)')
})

goBackBtn8.addEventListener('click', function(){
  scrollToTop();
  saveDateElement.setAttribute('style','transform: translateY(-100%)')
})
goBackBtn9.addEventListener('click', function(){
  scrollToTop();
  resultContent.innerHTML = []
  landing.setAttribute('style','transform: translate(0%)');
  searchByNameResults.setAttribute('style','transform: translate(100%)')
})

// Object for creating search by picture
const recyclingObject = {
    Kitchen: {
      name: 'Kitchen',
      items: ["milk_jug", "coffee pods", "plastic_produce_bag", "pop_can", "pizza box", "tissue_box", "hand soap", "dish soap", "paper towel", "Aluminum Foil"],
      itemNames: ['Plastic Bottle', 'Coffee Pod', "Plastic Bag", 'Pop Can', "Pizza Box", 'Tissue Box', "Hand Soap", "Plastic Container", "Paper Towel", "Aluminum Foil"],
      icons: ['fa-jug', 'fa-coffee-beans', 'fa-sack', 'fa-can-food', 'fa-pizza', 'fa-box-tissue', 'fa-pump-soap', 'fa-jug-detergent', 'fa-scroll', 'fa-sheet-plastic'],
      icon: 'fa-kitchen-set',
    },
  
    Garage: {
      name: 'Garage',
      items: ["gas can", "oil_filter", "power_tool", "sports_equipment", "wood", "garden_hose", "bicycle_parts", "hardware", "Christmas lights", "Asphalt shingles"],
      itemNames: ["Gasoline", "Oil Filter", "Power Tool", "Sports Equipment", "Wood", "Garden Hose", "Bicycle Parts", "Screws \u0026 Nails", "Christmas Lights", "Asphalt Shingles"],
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
      itemNames: ["Cassette Tape Case", "VCR", "DVD", "Computer Monitor", "Calculator", "CD Player", "Headphones", "Computer Cables", "Camera", "Television"],
      icons: ['fa-cassette-tape', 'fa-film-simple', 'fa-compact-disc', 'fa-computer', 'fa-calculator', 'fa-disc-drive', 'fa-headphones', 'fa-code-branch', 'fa-camera', 'fa-tv'],
      icon: 'fa-plug-circle-bolt'
    },
  
    Hazardous: {
      name: 'Hazardous',
      items: ["pesticide_garden_chemicals_fertilizer", "old paint", "Motor oil", "mercury_thermometer", "Pool chemicals",  "Aerosol can (empty)"],
      itemNames: ["Pesticide", "Paint", "Motor Oil", "Thermometer (Mercury)", "Pool Chemicals",  "Aerosol Can"],
      icons: ['fa-flask-round-poison', 'fa-fill-drip', 'fa-oil-can-drip', 'fa-temperature-half', 'fa-person-swimming', 'fa-spray-can'],
      icon: 'fa-biohazard'
    },
  
    Bathroom: {
      name: 'Bathroom',
      items: ["toilet_seat", "plastic_detergent_bottle", "curtain_rod_wood_or_plastic", "Shower curtain rings", "deodorant", "Toothpaste tube", "toothbrush", "razor_disposable", "Shampoo bottle", "shaving_cream_can_empty"],
      itemNames: ["Toilet Seat", "Hand Soap", "Curtain Rod (Wood or Plastic)", "Shower Curtain Rings", "Deodorant", "Toothpaste Tube", "Toothbrush", "Razor (Disposable)", "Shampoo Bottle", "Shaving Cream Can"],
      icons: ['fa-toilet', 'fa-jug-detergent', 'fa-booth-curtain', 'fa-ring', 'fa-shower', 'fa-toothbrush', 'fa-teeth', 'fa-user-shakespeare', 'fa-jug-detergent', 'fa-pump-soap'],
      icon: ['fa-bath']
    },
  
    Living_Room: {
      name: 'Living Room',
      items: ["book_hardcover", "Pillows and cushions", "Furniture", "Light fixture", "light_bulb_all_types","Coffee table", "Picture frame", "Magazine", "Artificial plants and flowers"],
      itemNames: ["Book (Hardcover)", "Pillows and Cushions", "Furniture", "Light Fixture", "Lightbulb","Coffee Table", "Picture Frame", "Magazine", "Artificial Plants"],
      icons: ['fa-book-sparkles', 'fa-mattress-pillow', 'fa-couch', 'fa-lamp-floor', 'fa-lightbulb-on', 'fa-table-picnic', 'fa-frame', 'fa-book', 'fa-leaf'],
      icon: 'fa-couch'
    },
  
    Bedroom: {
      name: 'Bedroom',
      items: ["stuffed_animal", "Shoes", "Backpacks & handbags", "Halloween costume", "Mattress",  "clothes", "hangers_plastic", "Electric blanket"],
      itemNames: ["Stuffed Animal", "Shoes", "Backpacks & Handbags", "Costume", "Mattress",  "Clothes", "Clothes Hanger", "Electric Blanket"],
      icons: ['fa-teddy-bear', 'fa-boot', 'fa-backpack', 'fa-mask', 'fa-mattress-pillow', 'fa-shirt', 'fa-clothes-hanger', 'fa-blanket-fire'],
      icon: 'fa-bed-front'
    }
}

// Function to create cards on page 2
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
    icon.classList.add('fa-solid', 'fa-8x', 'is-third');
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
      thirdAncestor.innerHTML = [];
      for (let i = 0; i < chosenCategory.length; i++){
        createCategoryTile(chosenCategory[i], thirdAncestor, 'pageThree');
        let iconNeeded = document.getElementById(chosenCategory[i]);
        iconNeeded.children[0].children[1].classList.remove('fa-kitchen-set')
        iconNeeded.children[0].children[1].classList.add(recyclingObject[this.id].icons[i])
      }
      for (let i = 0; i < pageThree.length; i++){
        pageThree[i].addEventListener('click',function(event){
            //calls API for selected Item
            let searchByPictureQuery = this.id.toUpperCase()
            console.log(searchByPictureQuery)
            let queryTerm = searchByPictureQuery.toUpperCase()
            let query = "https://data.edmonton.ca/resource/gtej-pcij.json?$where=upper(material_title) like '%25" + queryTerm + "%25'" 
            console.log(query)
            fetchItem(query, resultContent)
            third.setAttribute('style','transform: translate(-100%');
            fourth.setAttribute('style','transform: translate(0%');
            resultLabel.textContent = queryTerm
        })
      }
        second.setAttribute('style','transform: translate(-100%');
        third.setAttribute('style','transform: translate(0%');
    })
}

// searches for local general recycling centers

var generalSearch = () =>{
    const successCallback = (position) => {
        loader.style.display = 'block'
        fourth.setAttribute('style','transform: translate(-100%)');
        fourthbyCodeContainer.setAttribute('style','transform:translate(-100%)')
        fifth.setAttribute('style','transform: translate(0%)')
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        var apiKey = 'e6c7145ef0589d5c1799b396e8bd2be3'

        let url = 'https://api.openweathermap.org/geo/1.0/reverse?lat='+latitude+'&lon='+longitude+'&limit=1&appid=' + apiKey
            $.ajax({
                url: url,
                type: 'get',
            }) .done(function (data){
                location1.textContent = 'General Recycling for '+ data[0].name + ', ' + data[0].state
                let city = data[0].name
                let result1 = '';
                let url2 = 'https://api.valueserp.com/search?api_key=0B06CFEBAB884DC49ED3D9055BBDFD5C&q=recycling&location='+ city+'&gl=us&cr=us&lr=lang_en&num=3'
                $.ajax({
                url: url2,
                type: 'GET',
                }).done(function(data){
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
        modal.classList.add('is-active')
    }

    navigator.geolocation.getCurrentPosition(successCallback,errorCallback)
}

var electronicSearch = () =>{
    const successCallback2 = (position) => {
        fourth.setAttribute('style','transform: translate(-100%)');
        fourthbyCodeContainer.setAttribute('style','transform:translate(-100%)')
        fifth.setAttribute('style','transform: translate(0%)')
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        var apiKey = 'e6c7145ef0589d5c1799b396e8bd2be3'
    
        let url = 'https://api.openweathermap.org/geo/1.0/reverse?lat='+latitude+'&lon='+longitude+'&limit=1&appid=' + apiKey
            $.ajax({
                url: url,
                type: 'get',
            }) .done(function (data){
                $('#hidden').removeClass('hide')
                location1.textContent = 'Electronics Recycling for '+ data[0].name + ', ' + data[0].state
                let city = data[0].name
                let result1 = '';
                let url2 = 'https://api.valueserp.com/search?api_key=0B06CFEBAB884DC49ED3D9055BBDFD5C&q=electronics+recycling&location='+ city+'&gl=us&cr=us&lr=lang_en&num=3'
    
                $.ajax({
                url: url2,
                type: 'GET',
                }).done(function(data){
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
        modal.classList.add('is-active')
    }

    navigator.geolocation.getCurrentPosition(successCallback2,errorCallback)
}


var hazardSearch = () =>{
    const successCallback3 = (position) => {
        fourth.setAttribute('style','transform: translate(-100%)');
        fourthbyCodeContainer.setAttribute('style','transform:translate(-100%)')
        fifth.setAttribute('style','transform: translate(0%)')
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        var apiKey = 'e6c7145ef0589d5c1799b396e8bd2be3'
    
        let url = 'https://api.openweathermap.org/geo/1.0/reverse?lat='+latitude+'&lon='+longitude+'&limit=1&appid=' + apiKey
            $.ajax({
                url: url,
                type: 'get',
            }) .done(function (data){
                $('#hidden').removeClass('hide')
                location1.textContent = 'Hazardous Recycling for '+ data[0].name + ', ' + data[0].state
                let city = data[0].name
    
                let result1 = '';
                // Commented out URL
                let url2 = 'https://api.valueserp.com/search?api_key=0B06CFEBAB884DC49ED3D9055BBDFD5C&q=hazardous+recycling&location='+ city+'&gl=us&cr=us&lr=lang_en&num=3'
    
                $.ajax({
                url: url2,
                type: 'GET',
                }).done(function(data){
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
        modal.classList.add('is-active')
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
  
  


// Generates cards for search by code
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
        icon.classList.add('fa-solid', 'fa-8x', 'is-third', 'fa-recycle');
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

let closeModal = () =>{
    modal.classList.remove('is-active')
}
