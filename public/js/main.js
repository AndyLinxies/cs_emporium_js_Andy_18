//Recuperation des boutons
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let tabtn = [btn1, btn2, btn3, btn4]
//Recuperation des slides
let slide1 = document.getElementsByClassName('slide1')[0]
let slide2 = document.getElementsByClassName('slide2')[0]
let slide3 = document.getElementsByClassName('slide3')[0]
let slide4 = document.getElementsByClassName('slide4')[0]
let slideTab = [slide1,slide2,slide3,slide4]

//Cacher les autres slides de base
slide1.classList.add('active')
slide2.classList.remove('active')
slide3.classList.remove('active')
slide4.classList.remove('active')

//Au clique de chaque boutton
tabtn.forEach((element,i) => {
    element.addEventListener('click',()=>{
        switch (element.id) {
            case 'btn1':
                slide2.classList.remove('active')
                slide3.classList.remove('active')
                slide4.classList.remove('active')
                slide1.classList.add('active')
                
            break;
            case 'btn2':
                slide1.classList.remove('active')
                slide3.classList.remove('active')
                slide4.classList.remove('active')
                slide2.classList.add('active')
                
            break;
            case 'btn3':
                slide1.classList.remove('active')
                slide2.classList.remove('active')
                slide4.classList.remove('active')
                slide3.classList.add('active')
                
            break;
            case 'btn4':
                slide1.classList.remove('active')
                slide2.classList.remove('active')
                slide3.classList.remove('active')
                slide4.classList.add('active')
                
            break;

            default:
                console.log("Error");
            break;
        }
    })
    
}); 

let i = 0
window.setInterval(() => {
    if (slide1.classList.contains("active") || slide2.classList.contains("active") || slide3.classList.contains("active") || slide4.classList.contains("active")) {
        slide1.classList.remove("active");
        slide2.classList.remove("active");
        slide3.classList.remove("active");
        slide4.classList.remove("active");
        

        if (i == 4) {
            i = 0;
        }
        slideTab[i].classList.add("active");
        i++;
    }
}, 2000);
//Fin essai



//Comportement de la nav au Scroll
let nav = document.querySelector('.nav-top')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 15) {
        nav.style.borderBottom = '2px solid'
        nav.style.top = "0"
        nav.style.transition = '0.5s ease-out'
    } else {
        nav.style.top = ""
        nav.style.borderBottom = '1px solid white'
    }
})

// Darkmode
let dark = document.querySelector('.dark')
let light = document.querySelector('.light')
let body = document.querySelector('body')

dark.addEventListener('click', () => {
    body.style.backgroundColor = "black"
    body.style.color = "white"
})
light.addEventListener('click', () => {
    body.style.backgroundColor = "white"
    body.style.color = "black"
})

//MODAL1
let modal1 = document.querySelector('.mod-part1')
let connex = document.querySelector('.connex')
let modal_glob = document.querySelector('.modal-glob')

connex.addEventListener('click', () => {
    modal_glob.classList.add('bg-active')

})
//Fermer le modal 1
let close = document.querySelector('.close')
close.addEventListener('click', () => {
    modal_glob.classList.remove('bg-active')

})
//MODAL 2
let modal_glob2 = document.querySelector('.modal-glob2')

let modal2 = document.querySelector('.mod-part2')
let close2 = document.querySelector('.close2')
let inscription = document.querySelector(".inscription")

//clique sur inscription
inscription.addEventListener('click', () => {
    modal_glob.classList.remove('bg-active')
    modal_glob2.classList.add('bg-active2')
    console.log(modal_glob2);
})
//fermeture Modal 2
close2.addEventListener('click', () => {
    modal_glob2.classList.remove('bg-active2')
})


//Hamburger
let toggle_button = document.querySelector('.toggle-button')
let av_ul = document.querySelector('.av-ul')
toggle_button.addEventListener('click', () => {
    av_ul.classList.toggle('active')
})

//Animation des h2 
let h2_card = Array.from(document.querySelectorAll('.h2-txt'))

h2_card.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('bouge')
    })
    element.addEventListener('mouseout', () => {
        element.classList.remove('bouge')
        element.style.transition = '1s ease-in'
    })

});
//Animation cartes Recent products
let imgCarte = Array.from(document.querySelectorAll('.imgCarte'))

imgCarte.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('moove')
    })
    element.addEventListener('mouseout', () => {
        element.classList.remove('moove')
        element.style.transition = '0.5s ease-out'
    })

});

//Animation images de la carousel
let imgCar = Array.from(document.querySelectorAll('.imgCar'))

imgCar.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('zzom')
    })
    element.addEventListener('mouseout', () => {
        element.classList.remove('zzom')
        element.style.transition = '0.5s ease-out'
    })

});

//Animation avFooter

let trust1 = document.getElementById('trust1');
let shipping = document.getElementById('shipping');
let trust2 = document.getElementById('trust2');

let avFooter = [trust1, trust2, shipping];
avFooter.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('rred')
    })
    element.addEventListener('mouseout', () => {
        element.classList.remove('rred')
        element.style.transition = '0.5s ease-out'
    })
});

//coloration btn 
btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = 'black'
    btn2.style.backgroundColor = ''
    btn3.style.backgroundColor = ''
    btn4.style.backgroundColor = ''
    
})
btn2.addEventListener('click', () => {
    btn1.style.backgroundColor = ''
    btn2.style.backgroundColor = 'black'
    btn3.style.backgroundColor = ''
    btn4.style.backgroundColor = ''
    
})
btn3.addEventListener('click', () => {
    btn1.style.backgroundColor = ''
    btn2.style.backgroundColor = ''
    btn3.style.backgroundColor = 'black'
    btn4.style.backgroundColor = ''
    
})
btn4.addEventListener('click', () => {
    btn1.style.backgroundColor = ''
    btn2.style.backgroundColor = ''
    btn3.style.backgroundColor = ''
    btn4.style.backgroundColor = 'black'
    
})


