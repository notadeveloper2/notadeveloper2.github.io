let lien1fromIndex = document.querySelector('.lien1index');

function goToArticle1FromIndex() {
    window.location.href = 'pages/articles/article1.html';
}

lien1fromIndex.addEventListener("click", goToArticle1FromIndex, false)

let lien2fromIndex = document.querySelector('.lien2index');

function goToArticle2FromIndex() {
    window.location.href = 'pages/podcasts/podcast1.html';
}

lien2fromIndex.addEventListener("click", goToArticle2FromIndex, false)