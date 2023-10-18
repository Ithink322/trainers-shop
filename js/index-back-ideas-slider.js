document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 1715) {
    /* touchscreen for .back-ideas__advertises-overflow starts */
    let slider = document.querySelector(".back-ideas__advertises-overflow"),
      sliderContainer = document.querySelector(".back-ideas__advertises-flex"),
      slides = document.querySelectorAll(".back-ideas__advertise-slide");
    let gap = window.getComputedStyle(
      document.querySelector(".back-ideas__advertises-flex")
    );
    let flex_gap = parseInt(gap.getPropertyValue("gap"));
    let slideWidth = slides[0].offsetWidth + flex_gap;
    let currentIndex = 0;
    sliderContainer.style.transform = "translateX(0)";

    slider.addEventListener("touchstart", handleTouchStart, false);
    slider.addEventListener("touchmove", handleTouchMove, false);

    let startX = null;

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
      if (!startX) {
        return;
      }

      let currentX = event.touches[0].clientX;
      let diffX = startX - currentX;

      if (diffX > 0 && currentIndex < slides.length - 2) {
        currentIndex++;
        startX = null;
        moveSlider();
      } else if (diffX < 0 && currentIndex > 0) {
        currentIndex--;
        startX = null;
        moveSlider();
      }
    }

    function moveSlider() {
      let translateX = -currentIndex * slideWidth;
      sliderContainer.style.transform = "translateX(" + translateX + "px)";
    }
    /* touchscreen for .back-ideas__advertises-overflow ends */
    if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
      /* The appearance of .back-ideas__advertises-touch-circle from 1024px starts */
      let backIdeas_circle = document.querySelector(
        ".back-ideas__advertises-touch-circle"
      );
      slider.addEventListener("touchstart", function (event) {
        let slider_backIdeas = slider.getBoundingClientRect();
        x = event.touches[0].clientX - slider_backIdeas.left + 25;
        y = event.touches[0].clientY - slider_backIdeas.top + 148;
        backIdeas_circle.style.left = x + "px";
        backIdeas_circle.style.top = y + "px";
        backIdeas_circle.style.transform = "scale(1)";
        backIdeas_circle.style.display = "block";

        setTimeout(function () {
          backIdeas_circle.style.transform = "scale(2)"; // Увеличиваем размер круга
          backIdeas_circle.style.opacity = "80%"; // Устанавливаем прозрачность круга
        }, 10);
      });
      slider.addEventListener("touchmove", function (e) {
        let slider_backIdeas = slider.getBoundingClientRect();
        x = e.touches[0].clientX - slider_backIdeas.left + 25;
        y = e.touches[0].clientY - slider_backIdeas.top + 148;
        backIdeas_circle.style.left = x + "px";
        backIdeas_circle.style.top = y + "px";
        backIdeas_circle.style.transform = "scale(1)";
      });
      slider.addEventListener("touchend", function () {
        backIdeas_circle.style.transform = "scale(0.9)";
        backIdeas_circle.style.display = "none";
      });
      /* The appearance of .back-ideas__advertises-touch-circle from 1024px ends */
    }
    if (window.innerWidth >= 1440 && window.innerWidth < 1715) {
      /* The appearance of .back-ideas__advertises-touch-circle from 1440px starts */
      let backIdeas_circle = document.querySelector(
        ".back-ideas__advertises-touch-circle"
      );
      slider.addEventListener("touchstart", function (event) {
        let slider_backIdeas = slider.getBoundingClientRect();
        x = event.touches[0].clientX - slider_backIdeas.left + 150;
        y = event.touches[0].clientY - slider_backIdeas.top + 168;
        backIdeas_circle.style.left = x + "px";
        backIdeas_circle.style.top = y + "px";
        backIdeas_circle.style.transform = "scale(1)";
        backIdeas_circle.style.display = "block";

        setTimeout(function () {
          backIdeas_circle.style.transform = "scale(2)"; // Увеличиваем размер круга
          backIdeas_circle.style.opacity = "80%"; // Устанавливаем прозрачность круга
        }, 10);
      });
      slider.addEventListener("touchmove", function (e) {
        let slider_backIdeas = slider.getBoundingClientRect();
        x = e.touches[0].clientX - slider_backIdeas.left + 150;
        y = e.touches[0].clientY - slider_backIdeas.top + 168;
        backIdeas_circle.style.left = x + "px";
        backIdeas_circle.style.top = y + "px";
        backIdeas_circle.style.transform = "scale(1)";
      });
      slider.addEventListener("touchend", function () {
        backIdeas_circle.style.transform = "scale(0.9)";
        backIdeas_circle.style.display = "none";
      });
      /* The appearance of .back-ideas__advertises-touch-circle from 1440px ends */
    }
  }
});
