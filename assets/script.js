// Ajout des écouteurs d'événement pour les flèches
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// Eléments du carrousel
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

// Variables
let index = 0;
const banner = document.getElementById("banner")

// Affichage de la 1ère image et texte au lancement du site
const sliderDivision = document.createElement("div");
sliderDivision.classList.add("banner-img");
banner.appendChild(sliderDivision);
banner.insertBefore(sliderDivision, banner.querySelector(".arrow"));
const sliderImage = document.createElement("img");
sliderImage.src = slides[index].image;
sliderDivision.appendChild(sliderImage);
const sliderText = document.createElement("p");
sliderText.innerHTML = slides[index].tagLine;
banner.appendChild(sliderText);
banner.insertBefore(sliderText, banner.querySelector(".arrow"));

// Affichage des dots
function displayDots() {
    const sliderDots = document.createElement("div");
    sliderDots.classList.add("dots");
    banner.appendChild(sliderDots);
    for (let dotNumber = 0; dotNumber < slides.length; dotNumber++) {
        const dots = document.querySelector(".dots");
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
        const allDots = document.querySelectorAll(".dots .dot")
        allDots[index].classList.remove("dot_selected")
        index++
        if (index > slides.length-1) {
            index = 0;
        }
        allDots[index].classList.add("dot_selected")
        sliderImage.src = slides[index].image
        sliderText.innerHTML = slides[index].tagLine
    })
}

rightClick();

// Changement au clic sur flèche gauche
function leftClick () {
    leftArrow.addEventListener("click", () => {
        const allDots = document.querySelectorAll(".dots .dot")
        allDots[index].classList.remove("dot_selected")
        index--
        if (index < 0) {
            index = slides.length-1;
        }
        allDots[index].classList.add("dot_selected")
        sliderImage.src = slides[index].image
        sliderText.innerHTML = slides[index].tagLine
    })
}

leftClick();