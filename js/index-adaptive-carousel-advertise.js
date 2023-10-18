/* carousel with arrows for .container-advertise__advertises-flex starts */
const carouselContainer = document.querySelector(
    ".container-advertise__advertises-flex"
  ),
  prevButton = document.querySelector(".advertise__back-arrow-left"),
  nextButton = document.querySelector(".advertise__back-arrow-right"),
  carouselItems = document.querySelectorAll(".advertise");
let currentPosition = 0;

prevButton.addEventListener("click", () => {
  currentPosition += 100;
  if (currentPosition > 0) {
    currentPosition = -100 * (carouselItems.length - 1);
  }
  carouselContainer.style.transform = `translateX(${currentPosition}%)`;
});

nextButton.addEventListener("click", () => {
  currentPosition -= 100;
  if (currentPosition < -100 * (carouselItems.length - 1)) {
    currentPosition = 0;
  }
  carouselContainer.style.transform = `translateX(${currentPosition}%)`;
});
/* carousel with arrows for .container-advertise__advertises-flex ends */
