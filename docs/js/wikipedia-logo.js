// https://meta.wikimedia.org/wiki/File:Wikipedia-logo-en.png
// https://meta.wikimedia.org/wiki/File:Wikipedia-logo-v2-en.png

// <img src="https://meta.wikimedia.org/wiki/File:Wikipedia-logo-en.png" alt="Wikipedia logo">
// <img src="https://meta.wikimedia.org/wiki/File:Wikipedia-logo-v2-en.png" alt="Wikipedia logo V2">

// let createWikipediaLogo = document.querySelector('.imgLogo');
// let createWikipediaLogoV2 = document.querySelector('.imgLogoV2');
let lang = document.querySelector('#lang').value
let img = "";
let srcLogoV2 = `https://meta.wikimedia.org/wiki/File:Wikipedia-logo-v2-${lang}.png`
let getLogo = document.querySelector('#lang');


// createWikipediaLogo.innerHTML = `<img src="https://meta.wikimedia.org/wiki/File:Wikipedia-logo-en.png" alt="Wikipedia logo">`
function createIMG() {
img.innerHTML = `<img src="https://meta.wikimedia.org/wiki/File:Wikipedia-logo-en.png" alt="Wikipedia logo">`
}

getLogo.addEventListener('click',  fGetLogo);

function fGetLogo() {
    console.log(lang);
    console.log(img);
    console.log(srcLogoV2);
    
}




////////////////

const inputDOM = document.querySelector('.form-input');
let button2 = document.querySelector('.submit-btn')

button2.addEventListener('click',  fInputDOM);

function fInputDOM() {
let lang4 = inputDOM.value
console.log(lang4);
srcLogoV2 = `https://meta.wikimedia.org/wiki/File:Wikipedia-logo-v2-${lang4}.png`
console.log(srcLogoV2);
let logo4 = document.querySelector('#logo4');
logo4.src = srcLogoV2
logo4.alt = lang4
}

/////////////////////

// cambiar una imagen...

const imagen = document.querySelector('#imgLogoId');
console.log(imagen.src);
// Cambiar la imagen...
imagen.src = 'https://meta.wikimedia.org/wiki/File:Wikipedia-logo-eo.png';
console.log(imagen.src);
console.log(imagen);


// Vamos a crear la imagen
const imagen2 = document.createElement('img');
imagen2.src = 'img/hacer2.jpg';

