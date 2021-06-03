//Recuperation des boutons
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
tabtn=[btn1,btn2,btn3,btn4]
//Recuperation des slides
let slide1 = document.getElementsByClassName('slide1')[0]
let slide2 = document.getElementsByClassName('slide2')[0]
let slide3 = document.getElementsByClassName('slide3')[0]
let slide4 = document.getElementsByClassName('slide4')[0]

//Cacher les autres slides de base
slide2.style.display = 'none'
slide3.style.display = 'none'
slide4.style.display = 'none'

//Au clique de chaque boutton
tabtn.forEach(element => {
    element.addEventListener('click',()=>{
        switch (element.id) {
            case 'btn1':
                slide2.style.display = 'none'
                slide3.style.display = 'none'
                slide4.style.display = 'none'
                slide1.style.display = 'flex'
            break;
            case 'btn2':
                slide1.style.display = 'none'
                slide3.style.display = 'none'
                slide4.style.display = 'none'
                slide2.style.display = 'flex'
            break;
            case 'btn3':
                slide1.style.display = 'none'
                slide2.style.display = 'none'
                slide4.style.display = 'none'
                slide3.style.display = 'flex'
            break;
            case 'btn4':
                slide1.style.display = 'none'
                slide2.style.display = 'none'
                slide3.style.display = 'none'
                slide4.style.display = 'flex'
            break;
        
            default:
                console.log("Error");
            break;
        }
    })
});
//Defilement des slides
let carr = document.getElementsByClassName('carrousel')[0];
let i =0;
let slides = [slide1, slide2, slide3, slide4];

let time = 2000;

function changeSlide() {
    setInterval(()=>{
        
    })
};

window.onload = changeSlide;

//Comportement de la nav au Scroll
let nav = document.querySelector('.nav-top')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 15) {
        nav.style.borderBottom = '2px solid'
        nav.style.top="0"
        nav.style.transition = '0.5s ease-out'
    } else {
        nav.style.top=""
        nav.style.borderBottom = '1px solid white'
    }
})

// Darkmode
let dark = document.querySelector('.dark')
let light = document.querySelector('.light')
let body = document.querySelector('body')

dark.addEventListener('click',()=>{
    body.style.backgroundColor ="black"
    body.style.color = "white"
})
light.addEventListener('click',()=>{
    body.style.backgroundColor ="white"
    body.style.color = "black"
})

//MODAL1
let modal1 = document.querySelector('.mod-part1')
let connex = document.querySelector('.connex')
let modal_glob= document.querySelector('.modal-glob')

connex.addEventListener('click',()=>{
    modal_glob.classList.add('bg-active')
    

})
//Fermer le modal 1
let close= document.querySelector('.close')
close.addEventListener('click',()=>{
    modal_glob.classList.remove('bg-active')
    
})
//MODAL 2
let modal_glob2= document.querySelector('.modal-glob2')

let modal2 = document.querySelector('.mod-part2')
let close2 = document.querySelector('.close2')
let inscription= document.querySelector(".inscription")

inscription.addEventListener('click',()=>{
    modal_glob.classList.remove('bg-active')
    modal_glob2.classList.add('bg-active2')
    console.log(modal_glob2);
})
close2.addEventListener('click',()=>{
    modal_glob2.classList.remove('bg-active2')
})

//Hamburger
let toggle_button = document.querySelector('.toggle-button')
let av_ul = document.querySelector('.av-ul')
toggle_button.addEventListener('click',()=>{
    av_ul.classList.toggle('active')
})