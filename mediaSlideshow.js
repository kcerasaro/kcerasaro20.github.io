let slideIdx = 1;
showSlides(slideIdx);

function traverseSlides(n) {
    showSlides(slideIdx = n)
}

function currentSlide() {
    showSlides(slideIdx = n);
}

function showSlides(n) {
    let slides = document.getElementById("media")

    if(n > slides.length) {
        slideIdx = 1;
    }

    if(n < 1) {
        slideIdx = slides.length;
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }

    slides[slideIdx-1].style.display = "block";
}