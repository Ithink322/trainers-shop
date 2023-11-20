<template>
  <div class="back-ideas">
    <div class="back-ideas-flex">
      <h2 class="back-ideas__title">Идеи и подборки</h2>
      <div class="back-ideas__advertises-touch-circle"></div>
      <div class="back-ideas__advertises-overflow">
        <div class="back-ideas__advertises-flex">
          <div class="back-ideas__advertise-1 back-ideas__advertise-slide">
            <img
              src="/imgs_main_page/back-ideas__card-back-1-from320px.svg"
              alt=""
              class="back-ideas__card-back-from320px"
            />
            <img
              src="/imgs_main_page/back-ideas__card-back-1-from768px.svg"
              alt=""
              class="back-ideas__card-back-from768px back-ideas__style-card-back-from768px"
            />
            <p
              class="back-ideas__card-title back-stylefrom768px-ideas__card-title-bigger"
            >
              Лучшие тренажеры<br class="back-ideas__br-card-title" />
              для жиросжигания
            </p>
            <img
              src="/imgs_main_page/back-ideas__card-img.png"
              alt=""
              class="back-ideas__card-img"
            />
            <p class="back-ideas__card-text">
              Тренировка<br class="back-ideas__br-card-text" />всего<br
                class="back-ideas__br-card-text"
              /><span class="back-ideas__span-card-text">14 минут</span>
            </p>
            <img
              src="/imgs_main_page/max_trainers_sponsor.png"
              alt=""
              class="back-ideas__card-logo"
            />
          </div>
          <div class="back-ideas__advertise-2 back-ideas__advertise-slide">
            <img
              src="/imgs_main_page/back-ideas__card-back-2-from320px.svg"
              alt=""
              class="back-ideas__card-back-from320px"
            />
            <img
              src="/imgs_main_page/back-ideas__card-back-2-from768px.svg"
              alt=""
              class="back-ideas__card-back-from768px back-ideas__width-for-2-3-card-back-from1024px"
            />
            <p
              class="back-ideas__card-title-for-advertise-2 back-stylefrom768px-ideas__card-title-smaller"
            >
              Кардио-<br
                class="back-ideas__br-0-advertise-2-card-title-from320px"
              />
              силовая<br
                class="back-ideas__br-advertise-2-card-title-from320px"
              />
              тренировка<br
                class="back-ideas__br-advertise-2-card-title-from320px"
              />
            </p>
            <p class="back-ideas__advertise-2-card-subtitle">2 в 1</p>
          </div>
          <div class="back-ideas__advertise-3 back-ideas__advertise-slide">
            <img
              src="/imgs_main_page/back-ideas__card-back-3-from320px.svg"
              alt=""
              class="back-ideas__card-back-from320px"
            />
            <img
              src="/imgs_main_page/back-ideas__card-back-3-from768px.svg"
              alt=""
              class="back-ideas__card-back-from768px back-ideas__width-for-2-3-card-back-from1024px"
            />
            <p
              class="back-ideas__card-title-for-advertise-3 back-stylefrom768px-ideas__card-title-smaller"
            >
              <span class="back-ideas__span-advertise-3-card-title"
                >Беговая<br
                  class="back-ideas__br-advertise-3-card-title"
                />дорожка</span
              ><br class="back-ideas__br-advertise-3-card-title" />для
              подготовки<br
                class="back-ideas__br-advertise-3-card-title"
              />к марафону
            </p>
            <img
              src="/imgs_main_page/brand_img_10.png"
              alt=""
              class="back-ideas__card-logo-advertise-3"
            />
          </div>
        </div>
      </div>
      <button class="back-ideas__btn">Полная подборка</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ideas",
  mounted() {
    if (window.innerWidth >= 1024 && window.innerWidth < 1715) {
      /* touchscreen for .back-ideas__advertises-overflow starts */
      let slider = document.querySelector(".back-ideas__advertises-overflow"),
        sliderContainer = document.querySelector(
          ".back-ideas__advertises-flex"
        ),
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
          let x = event.touches[0].clientX - slider_backIdeas.left + 25;
          let y = event.touches[0].clientY - slider_backIdeas.top + 148;
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
          let x = e.touches[0].clientX - slider_backIdeas.left + 25;
          let y = e.touches[0].clientY - slider_backIdeas.top + 148;
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
          let x = event.touches[0].clientX - slider_backIdeas.left + 150;
          let y = event.touches[0].clientY - slider_backIdeas.top + 168;
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
          let x = e.touches[0].clientX - slider_backIdeas.left + 150;
          let y = e.touches[0].clientY - slider_backIdeas.top + 168;
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
  },
};
</script>

<style lang="scss">
$white-col: #ffffff;
$dark-col: #1a1a25;
$red-col: #f53b49;
$gray-col: #858fa4;
$dark-blue-col: #384255;
$blue: #4b7ee8;
.back-ideas__card-back-from768px {
  display: none;
}
.back-ideas {
  position: relative;
  background: $dark-col;
  width: 100%;
  padding: 5rem 0.625rem 3.75rem 0.625rem;
}
.back-ideas-flex {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
}
.back-ideas__title {
  font-family: "Inter", sans-serif;
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 110%;
  color: $white-col;
  margin: 0rem;
}
.back-ideas__advertises-flex {
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
}
.back-ideas__advertise-1,
.back-ideas__advertise-2,
.back-ideas__advertise-3 {
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 160px;
  max-height: 399px;
  cursor: pointer;
}
.back-ideas__card-back-from320px {
  width: 100%;
  min-height: 140px;
  max-height: 400px;
}
.back-ideas__card-title {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 110%;
  color: $white-col;
  margin-left: 1rem;
  margin-bottom: 0rem;
}
.back-ideas__span-card-title {
  color: $red-col;
  text-transform: uppercase;
}
.back-ideas__card-img {
  position: absolute;
  width: 49px;
  height: 49px;
  margin-top: 3.7rem;
  margin-left: 1rem;
}
.back-ideas__card-text {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 0.658rem;
  font-weight: 400;
  line-height: 114.937%;
  margin-top: 4.2rem;
  margin-left: 4.3rem;
  margin-bottom: 0rem;
  color: $dark-col;
}
.back-ideas__card-title-for-advertise-2 {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  line-height: 110%;
  margin-top: 1.44rem;
  margin-left: 1.31rem;
  margin-bottom: 0rem;
  color: $dark-col;
}
.back-ideas__advertise-2-card-subtitle {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 110%;
  margin-top: 4.9rem;
  margin-left: 1.31rem;
  margin-bottom: 0rem;
  color: $red-col;
}
.back-ideas__card-title-for-advertise-3 {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  line-height: 110%;
  margin-left: 1rem;
  color: $dark-col;
}
.back-ideas__span-advertise-3-card-title {
  font-size: 1rem;
  color: $red-col;
}
.back-ideas__span-advertise-2-card-title {
  font-size: 1rem;
  color: $red-col;
}
.back-ideas__span-card-text {
  font-weight: 700;
}
.back-ideas__card-logo {
  position: absolute;
  width: 87px;
  height: 34px;
  margin-top: 7.2rem;
  margin-left: 1rem;
}
.back-ideas__card-logo-advertise-3 {
  position: absolute;
  width: 87px;
  height: 34px;
  margin-top: 7.2rem;
  margin-left: 0.2rem;
}
.back-ideas__btn {
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(245, 59, 73, 0);
  width: fit-content;
  padding: 0.75rem 1.25rem 0.8125rem 1.25rem;
  cursor: pointer;
  font-size: 0.75rem;
  color: $white-col;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  white-space: nowrap;
}
.back-ideas__advertises-touch-circle {
  display: none;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: $dark-col;
  transform: scale(0);
  transition: transform 0.2s ease-out; /* Добавляем плавный переход */
  z-index: 2;
}
.back-ideas__top-for-brands-pages {
  margin-top: 5rem;
}
.back-ideas__grid-top-for-brands-pages {
  top: 5rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .back-ideas {
    padding: 6.25rem 2.5rem 3.75rem 2.5rem;
  }
  .back-ideas-flex {
    gap: 1.875rem;
  }
  .back-ideas__title {
    font-size: 1.875rem;
  }
  .back-ideas__advertises-flex {
    flex-flow: row wrap;
    gap: 1.88rem;
  }
  .back-ideas__advertise-1 {
    width: 100%;
  }
  .back-ideas__advertise-2,
  .back-ideas__advertise-3 {
    width: 47.81%;
    flex-grow: 1;
  }
  .back-ideas__card-back-from320px {
    display: none;
  }
  .back-ideas__card-back-from768px {
    display: block;
    border-radius: 6px;
    width: 100%;
    min-height: 353px;
    max-height: 400px;
    object-fit: cover;
  }
  .back-ideas__card-title {
    font-size: 1.625rem;
    margin-left: 1.438rem;
  }
  .back-ideas__card-img {
    width: 98px;
    height: 98px;
    margin-top: 7rem;
    margin-left: 1.438rem;
  }
  .back-ideas__card-text {
    font-size: 1.25rem;
    margin-top: 8rem;
    margin-left: 8rem;
  }
  .back-ideas__card-title-for-advertise-2 {
    font-size: 1.25rem;
    margin-top: 1rem;
    margin-left: 1.438rem;
  }
  .back-ideas__card-title-for-advertise-3 {
    font-size: 1.25rem;
    margin-left: 1.438rem;
  }
  .back-ideas__advertise-2-card-subtitle {
    font-size: 1.875rem;
    margin-top: 5.4rem;
    margin-left: 1.438rem;
  }
  .back-ideas__span-card-title-for-advertise-3 {
    font-size: 1.25rem;
  }
  .back-ideas__card-logo {
    width: 165px;
    height: 63px;
    margin-top: 15.5rem;
    margin-left: 1.438rem;
  }
  .back-ideas__card-logo-advertise-3 {
    width: 110px;
    height: 47px;
    margin-top: 8rem;
    margin-left: 0.4rem;
  }
  .back-ideas__btn {
    font-size: 0.875rem;
  }
  .back-ideas__top-for-brands-pages {
    margin-top: 5rem;
  }
  .back-ideas__grid-top-for-brands-pages {
    top: 5rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .back-ideas__advertises-overflow {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .back-ideas__advertises-flex {
    flex-flow: row nowrap;
    transition: transform 0.5s ease-in-out;
  }
  .back-ideas__advertise-1,
  .back-ideas__style-card-back-from768px {
    width: 660px;
    height: 400px;
  }
  .back-ideas__advertise-2,
  .back-ideas__advertise-3,
  .back-ideas__width-for-2-3-card-back-from1024px {
    width: 330px;
    height: 400px;
    flex: 0;
  }
  .back-ideas__card-title {
    font-size: 1.875rem;
    margin-left: 1.88rem;
  }
  .back-ideas__card-img {
    margin-top: 8rem;
    margin-left: 1.73rem;
  }
  .back-ideas__card-text {
    margin-top: 9rem;
    margin-left: 9rem;
  }
  .back-ideas__card-logo {
    margin-top: 19rem;
    margin-left: 1.88rem;
  }
  .back-ideas__card-title-for-advertise-2,
  .back-ideas__card-title-for-advertise-3 {
    text-transform: uppercase;
    font-size: 1.25rem;
    margin-top: 1.88rem;
    margin-left: 1.88rem;
    line-height: 110%;
  }
  .back-ideas__card-title-for-advertise-3 {
    font-size: 1rem;
    line-height: 130%;
  }
  .back-ideas__br-0-advertise-2-card-title-from320px {
    display: none;
  }
  .back-ideas__advertise-2-card-subtitle {
    font-size: 2.25rem;
    margin-left: 1.88rem;
    margin-top: 5rem;
  }
  .back-ideas__span-advertise-3-card-title {
    font-size: 1.25rem;
  }
  .back-ideas__card-logo-advertise-3 {
    width: 132px;
    height: 62px;
    margin-top: 10rem;
    margin-left: 0.625rem;
  }
  .back-ideas__top-for-brands-pages {
    margin-top: 16rem;
  }
  .back-ideas__grid-top-for-brands-pages {
    top: 16rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .back-ideas {
    padding: 7.5rem 10.313rem 6.25rem 10.313rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .back-ideas {
    padding: 7.5rem 15.938rem 6.25rem 15.938rem;
  }
}
</style>
