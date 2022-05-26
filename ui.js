let landing = document.getElementById('landing');
let submit = document.getElementById('searchByPicture');
let second = document.getElementById('second')

submit.addEventListener('click',function(){
    console.log('hello')
    landing.setAttribute('style','transform: translate(-100%)');
    second.setAttribute('style','transform: translate(0%)')
})