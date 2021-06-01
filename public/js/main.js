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