// Ajout des écouteurs d'événement pour les flèches
const leftArrow = document.querySelector('.arrow_left');

const rightArrow = document.querySelector('.arrow_right');


// Bannière
const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
//console.log(slides)

// Variables
const dots = document.querySelector(".dots");
let index = 0;
const bannerImage = document.querySelector(".banner-img img");
const bannerText = document.querySelector("#banner p");

// Affichage des dots
function displayDots() {
    for (let dotNumber = 0; dotNumber < slides.length; dotNumber++) {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        dots.appendChild(dot)
        if (dotNumber == index) {
            dot.classList.add("dot_selected")
        }
    }
}

displayDots();

// Changement au clic sur flèche droite
function rightClick () {
    rightArrow.addEventListener("click", () => {
        //console.log("right")
        const allDots = document.querySelectorAll(".dots .dot")
        allDots[index].classList.remove("dot_selected")
        index++
        if (index > slides.length-1) {
            index = 0;
        }
        allDots[index].classList.add("dot_selected")
        bannerImage.src = slides[index].image
        bannerText.innerHTML = slides[index].tagLine
    })
}

rightClick();

// Changement au clic sur flèche gauche
function leftClick () {
    leftArrow.addEventListener("click", () => {
        //console.log("left")
        const allDots = document.querySelectorAll(".dots .dot")
        allDots[index].classList.remove("dot_selected")
        index--
        if (index < 0) {
            index = slides.length-1;
        }
        allDots[index].classList.add("dot_selected")
        bannerImage.src = slides[index].image
        bannerText.innerHTML = slides[index].tagLine
    })
}

leftClick();