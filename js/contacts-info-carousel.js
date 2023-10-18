/* carousel .container-contacts__info-rect-carousel starts */
const prevBtn = document.querySelector(
    ".container-contacts__info-rect-carousel-back-arrow-left"
  ),
  nextBtn = document.querySelector(
    ".container-contacts__info-rect-carousel-back-arrow-right"
  ),
  carouselContainer = document.querySelector(
    ".container-contacts__info-rect-carousel-container"
  ),
  carouselItems = document.querySelectorAll(
    ".container-contacts__info-rect-carousel-img"
  );
let currentPosition = 0;
if (window.innerWidth < 1024) {
  prevBtn.addEventListener("click", () => {
    currentPosition += 100;
    console.log("prev currentPosition:", currentPosition);
    if (currentPosition > 0) {
      currentPosition = -100 * (carouselItems.length - 5);
    }
    carouselContainer.style.transform = `translateX(${currentPosition}%)`;
  });
  nextBtn.addEventListener("click", () => {
    currentPosition -= 100;
    console.log("next currentPosition:", currentPosition);
    if (currentPosition < -100 * (carouselItems.length - 5)) {
      currentPosition = 0;
    }
    carouselContainer.style.transform = `translateX(${currentPosition}%)`;
  });
} else {
  prevBtn.addEventListener("click", () => {
    currentPosition += 100;
    console.log("prev currentPosition:", currentPosition);
    if (currentPosition > 0) {
      currentPosition = -100 * (carouselItems.length - 5); // I have four more images from 1024px
    }
    carouselContainer.style.transform = `translateX(${currentPosition}%)`;
  });
  nextBtn.addEventListener("click", () => {
    currentPosition -= 100;
    console.log("next currentPosition:", currentPosition);
    if (currentPosition < -100 * (carouselItems.length - 5)) {
      currentPosition = 0;
    }
    carouselContainer.style.transform = `translateX(${currentPosition}%)`;
  });
}
/* carousel .container-contacts__info-rect-carousel ends */
