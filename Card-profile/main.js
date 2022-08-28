var btn1=document.querySelector(".btn-1")
var btn2=document.querySelector(".btn-2")
var btn3=document.querySelector(".btn-3")
var card2=document.querySelector('.content')
// var card3=document.querySelector('.card3')
// var card1=document.querySelector('.card1')
btn1.addEventListener("click",()=>{
    card2.style.marginLeft='0px'
    btn1.style.backgroundColor='red'
    btn2.style.backgroundColor='transparent'
    btn3.style.backgroundColor='transparent'
})
btn2.addEventListener("click",()=>{
    card2.style.marginLeft='-250px'
    btn2.style.backgroundColor='red'
    btn3.style.backgroundColor='transparent'
    btn1.style.backgroundColor='transparent'
})
btn3.addEventListener("click",()=>{
    card2.style.marginLeft='-500px'
    btn3.style.backgroundColor='red'
    btn1.style.backgroundColor='transparent'
    btn2.style.backgroundColor='transparent'
})