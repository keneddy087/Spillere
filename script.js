$(document).ready(function(){
    $('.bxslider').bxSlider();
  });

const target = document.querySelectorAll("[data-anime]");
const menuBurger = document.getElementById("hamburguer");
const container = document.querySelector(".container");



const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
}

function animeScrool(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 2) / 2);
    
    target.forEach(function (element){
        if((windowTop) > element.offsetTop) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    })
}

animeScrool();

if(target.length){
    window.addEventListener("scroll", debounce(function(){
    
        animeScrool();
    }, 200));
}

menuBurger.addEventListener("click", function(){
    const menuMobile = document.querySelector(".menuMobile");

    menuBurger.classList.toggle("animateHamburger");
    container.classList.toggle("removeContainer");
    menuMobile.classList.toggle("showMenu");
})

/*== Slider procedimentos ==*/

let time         = 2000;
let currentImage = 0;
let images  = document.querySelectorAll("#slider img");
let images2 = document.querySelectorAll("#slider2 img");
let images3 = document.querySelectorAll("#slider3 img");
let max     = images.length;

function nextImage(){

    images[currentImage].classList.remove("selected");
    images2[currentImage].classList.remove("selected");
    images3[currentImage].classList.remove("selected");

    currentImage++;

    if(currentImage >= max){
        currentImage = 0;
    }

    images[currentImage].classList.add("selected");
    images2[currentImage].classList.add("selected");
    images3[currentImage].classList.add("selected");
}

function start(){
    setInterval(() => {
        //troca de imagens
        nextImage();
    }, time)
}
window.addEventListener("load", start);



/*== Accordion ==*/
let showMore = document.querySelectorAll("ul");

showMore.forEach((content) => {

    content.addEventListener("click", function(){
        
        const li = content.querySelector("li");
        console.log(li);
        li.classList.toggle("showContent");
    })
})

