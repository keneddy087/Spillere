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
    const menuMobile   = document.querySelector(".menuMobile");

    const containerIni = document.querySelector(".container_ini");
    const Myhistory    = document.querySelector(".myHistoryMain");
    const procedure    = document.querySelector(".procedure");
    const toSchedule   =  document.querySelector(".toSchedule"); 

    var descendentes = document.querySelectorAll("a");

    menuBurger.classList.toggle("animateHamburger");
    containerIni.classList.toggle("removeContainer");
    Myhistory.classList.toggle("removeContainer");
    procedure.classList.toggle("removeContainer");
    toSchedule.classList.toggle("removeContainer");

    menuMobile.classList.toggle("showMenu");

    let aboutMe = document.getElementById("link1");

    aboutMe.addEventListener("click", function(){

        menuMobile.classList.remove("showMenu");
        menuBurger.classList.remove("animateHamburger");

        containerIni.classList.remove("removeContainer");
        Myhistory.classList.remove("removeContainer");
        procedure.classList.remove("removeContainer");
        toSchedule.classList.remove("removeContainer");
    })

    let myHisotryLink = document.getElementById("link2");

    myHisotryLink.addEventListener("click", function(){
        
        menuMobile.classList.remove("showMenu");
        menuBurger.classList.remove("animateHamburger");

        containerIni.classList.remove("removeContainer");
        Myhistory.classList.remove("removeContainer");
        procedure.classList.remove("removeContainer");
        toSchedule.classList.remove("removeContainer");
    })

    let procedureLink = document.getElementById("link3");

    procedureLink.addEventListener("click", function(){
       
        menuMobile.classList.remove("showMenu");
        menuBurger.classList.remove("animateHamburger");

        containerIni.classList.remove("removeContainer");
        Myhistory.classList.remove("removeContainer");
        procedure.classList.remove("removeContainer");
        toSchedule.classList.remove("removeContainer");
    })

    let toScheduleLink = document.getElementById("link4");

    toScheduleLink.addEventListener("click", function(){
       
        menuMobile.classList.remove("showMenu");
        menuBurger.classList.remove("animateHamburger");

        containerIni.classList.remove("removeContainer");
        Myhistory.classList.remove("removeContainer");
        procedure.classList.remove("removeContainer");
        toSchedule.classList.remove("removeContainer");
    })
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

