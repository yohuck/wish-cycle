let landing = document.getElementById('landing');
let submiter = document.getElementById('searchByPicture');
let second = document.getElementById('second')

submiter.addEventListener('click',function(){
    console.log('hello')
    landing.setAttribute('style','transform: translate(-100%)');
    second.setAttribute('style','transform: translate(0%)')
})