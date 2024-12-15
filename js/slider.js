let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    if (slides.length === 0) {
        setTimeout(showSlides, 500);
        return;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000);
}

/* ok ile geçiş */
function plusSlides(n) {
    showSlidesByIndex(slideIndex + n);
}

function showSlidesByIndex(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Sayfa yüklendiğinde slider'ı başlat
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(showSlides, 2000);
});