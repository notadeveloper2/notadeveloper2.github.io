
let lien = document.querySelectorAll('.lien');

function goToArticles() {
    window.location.href = 'pages/articles.html';
}
function goToRadio() {
    window.location.href = 'pages/radio.html';
}
function goToVideo() {
    window.location.href = 'pages/vidoe.html';
}
lien[0].addEventListener("click", goToArticles, false) 
lien[1].addEventListener("click", goToRadio, false) 
lien[2].addEventListener("click", goToVideo, false) 

