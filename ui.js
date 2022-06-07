let landing = document.getElementById('landing');
let submiter = document.getElementById('searchByPicture');
let second = document.getElementById('second');
let cards = document.getElementsByClassName('pageTwo');
let pageThree = document.getElementsByClassName('pageThree');
let pizza = document.getElementById('pizza')



submiter.addEventListener('click',function(){
    console.log('hello')
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
})
