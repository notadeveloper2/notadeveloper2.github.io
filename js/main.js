let lien1fromArticles = document.querySelector('.lien1');
let lien2fromArticles = document.querySelector('.lien2');
let lien3fromArticles = document.querySelector('.lien3');

let lien1fromIndex = document.querySelector('.lien1index');



function goToArticle1FromIndex() {
    window.location.href = 'pages/articles/article1.html';
}
function goToArticle1FromArticles() {
    window.location.href = 'articles/article1.html';
}
function goToArticle2FromArticles() {
    window.location.href = 'articles/article2.html';
}
function goToArticle3FromArticles() {
    window.location.href = 'articles/article3.html';
}

function goToRadio() {
    window.location.href = 'pages/radio.html';
}
function goToVideo() {
    window.location.href = 'pages/vidoe.html';
}

lien1fromArticles.addEventListener("click", goToArticle1FromArticles, false)
lien2fromArticles.addEventListener("click", goToArticle1FromArticles, false)
lien3fromArticles.addEventListener("click", goToArticle1FromArticles, false)

lien1fromIndex.addEventListener("click", goToArticle1FromIndex, false)