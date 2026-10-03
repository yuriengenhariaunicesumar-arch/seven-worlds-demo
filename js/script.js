// =========================
// CARROSSEL DE DESTINOS
// =========================

const carouselTrack = document.querySelector(".carousel-track");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-btn.prev");
const nextButton = document.querySelector(".carousel-btn.next");

if (carouselTrack && carouselSlides.length && prevButton && nextButton) {

    let currentIndex = 0;

    function getVisibleSlides() {
        if (window.innerWidth <= 650) return 1;
        if (window.innerWidth <= 1000) return 2;
        return 3;
    }

    function updateCarousel() {
        const slide = carouselSlides[0];
        const gap = 22;
        const slideWidth = slide.offsetWidth + gap;

        carouselTrack.style.transform =
            `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        const visibleSlides = getVisibleSlides();
        const maxIndex = carouselSlides.length - visibleSlides;

        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        const visibleSlides = getVisibleSlides();
        const maxIndex = carouselSlides.length - visibleSlides;

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex;
        }

        updateCarousel();
    });

    window.addEventListener("resize", () => {
        currentIndex = 0;
        updateCarousel();
    });
}