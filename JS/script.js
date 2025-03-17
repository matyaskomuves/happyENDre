//Gallery Slide - Manual + Automatic
let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);
startAutoSlide();

function changeSlides(n) {
    showSlides(slideIndex += n);
    resetAutoSlide(); //Resetting the interval on button click
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoSlide(); //Resetting the interval on button click
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("gallerySlide");

    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        changeSlides(1);
    }, 2000); // Change slide every 2 seconds
}

function resetAutoSlide() {
    clearInterval(slideInterval); // Stopping the current interval
    startAutoSlide(); // Restart auto-sliding
}