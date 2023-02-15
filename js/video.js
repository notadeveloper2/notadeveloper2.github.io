let lien1 = document.querySelector('.lien1');

function goTovideo() {
    window.location.href = "videos/video1.html";
}

lien1.addEventListener('click', goTovideo, false)