<template>
  <div class="container-advertise">
    <div class="container-advertise__carousel">
      <div class="container-advertise__advertises-flex">
        <div class="advertise">
          <div class="advertise__info-flex">
            <p class="advertise__title">ZERO RUNNER</p>
            <p class="advertise__text">
              Бег с нулевой<br class="advertise__br-text" />
              ударной<br class="advertise__br-text" />
              нагрузкой<br class="advertise__text-br" /><span
                class="advertise__text-span"
                >на суставы</span
              >
            </p>
            <button class="advertise__btn">Узнать больше</button>
          </div>
          <img
            src="imgs_main_page/advertise__hero-from320px.png"
            alt=""
            class="advertise__hero-from320px"
          />
          <img
            src="imgs_main_page/advertise__hero-from768px.png"
            alt=""
            class="advertise__hero-from768px"
          />
          <img
            src="imgs_main_page/red-triangle-from320px.svg"
            alt=""
            class="advertise__triangle-from320px"
          />
          <img
            src="imgs_main_page/advertise__triangle-from768px.svg"
            alt=""
            class="advertise__triangle-from768px"
          />
        </div>
        <div class="advertise">
          <div class="advertise__info-flex">
            <p class="advertise__title">ZERO RUNNER</p>
            <p class="advertise__text">
              Бег с нулевой<br class="advertise__br-text" />
              ударной<br class="advertise__br-text" />
              нагрузкой<br class="advertise__text-br" /><span
                class="advertise__text-span"
                >на суставы</span
              >
            </p>
            <button class="advertise__btn">Узнать больше</button>
          </div>
          <img
            src="imgs_main_page/advertise__hero-from320px.png"
            alt=""
            class="advertise__hero-from320px"
          />
          <img
            src="imgs_main_page/advertise__hero-from768px.png"
            alt=""
            class="advertise__hero-from768px"
          />
          <img
            src="imgs_main_page/red-triangle-from320px.svg"
            alt=""
            class="advertise__triangle-from320px"
          />
          <img
            src="imgs_main_page/advertise__triangle-from768px.svg"
            alt=""
            class="advertise__triangle-from768px"
          />
        </div>
        <div class="advertise">
          <div class="advertise__info-flex">
            <p class="advertise__title">ZERO RUNNER</p>
            <p class="advertise__text">
              Бег с нулевой<br class="advertise__br-text" />
              ударной<br class="advertise__br-text" />
              нагрузкой<br class="advertise__text-br" /><span
                class="advertise__text-span"
                >на суставы</span
              >
            </p>
            <button class="advertise__btn">Узнать больше</button>
          </div>
          <img
            src="imgs_main_page/advertise__hero-from320px.png"
            alt=""
            class="advertise__hero-from320px"
          />
          <img
            src="imgs_main_page/advertise__hero-from768px.png"
            alt=""
            class="advertise__hero-from768px"
          />
          <img
            src="imgs_main_page/red-triangle-from320px.svg"
            alt=""
            class="advertise__triangle-from320px"
          />
          <img
            src="imgs_main_page/advertise__triangle-from768px.svg"
            alt=""
            class="advertise__triangle-from768px"
          />
        </div>
        <div class="advertise">
          <div class="advertise__info-flex">
            <p class="advertise__title">ZERO RUNNER</p>
            <p class="advertise__text">
              Бег с нулевой<br class="advertise__br-text" />
              ударной<br class="advertise__br-text" />
              нагрузкой<br class="advertise__text-br" /><span
                class="advertise__text-span"
                >на суставы</span
              >
            </p>
            <button class="advertise__btn">Узнать больше</button>
          </div>
          <img
            src="imgs_main_page/advertise__hero-from320px.png"
            alt=""
            class="advertise__hero-from320px"
          />
          <img
            src="imgs_main_page/advertise__hero-from768px.png"
            alt=""
            class="advertise__hero-from768px"
          />
          <img
            src="imgs_main_page/red-triangle-from320px.svg"
            alt=""
            class="advertise__triangle-from320px"
          />
          <img
            src="imgs_main_page/advertise__triangle-from768px.svg"
            alt=""
            class="advertise__triangle-from768px"
          />
        </div>
      </div>
      <div class="advertise__arrows-flex">
        <button class="advertise__back-arrow-left">
          <img
            src="imgs_main_page/arrow_red.png"
            alt=""
            class="advertise__arrow-left"
          />
        </button>
        <button class="advertise__back-arrow-right">
          <img
            src="imgs_main_page/arrow_red.png"
            alt=""
            class="advertise__arrow-right"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvertiseCarousel",
  mounted() {
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
.advertise__hero-from768px,
.advertise__triangle-from768px,
.advertise__triangle-from1024px,
.advertise__triangle-from1440px,
.advertise__triangle-from1920px {
  display: none;
}
.container-advertise {
  position: relative;
  padding: 1.25rem 0.625rem 0rem 0.625rem;
}
.container-advertise__carousel {
  overflow: hidden;
  border-radius: 5.282px;
}
.container-advertise__advertises-flex {
  display: flex;
  transition: transform 0.67s ease;
}
.advertise {
  position: relative;
  background: #e6e8ed;
  padding: 1.875rem 1.25rem 0rem 1.25rem; // это св-во смещает hero наверх
  height: fit-content;
  flex: 0 0 100%;
}
.advertise p {
  margin: 0rem;
  font-family: "Inter", sans-serif;
}
.advertise__info-flex {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: max-content;
}
.advertise__title {
  font-size: 0.875rem;
  font-weight: 900;
  line-height: 110%;
  color: $red-col;
}
.advertise__text {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 110%;
  text-transform: uppercase;
  color: $dark-col;
}
.advertise__text-span {
  font-weight: 400;
}
.advertise__btn {
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid $red-col;
  background: rgba(245, 59, 73, 0);
  padding: 0.75rem 1.25rem 0.75rem 1.25rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  color: $red-col;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
  width: fit-content;
}
.advertise__triangle-from320px {
  display: block;
  position: absolute;
  opacity: 74%;
  width: 93%;
  max-height: 5.15%;
  padding-right: 1.25rem;
  bottom: 0rem;
}
.advertise__hero-from320px {
  width: 100%;
  max-height: 53%;
  padding-left: 0rem;
  margin-bottom: -0.25rem;
}
.advertise__arrows-flex {
  position: absolute;
  display: flex;
  gap: 0.625rem;
  padding-right: 0.625rem;
  right: 0.94rem;
  bottom: 1.25rem;
}
.advertise__back-arrow-left,
.advertise__back-arrow-right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: $white-col;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}
.advertise__arrow-right {
  rotate: 180deg;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .container-advertise {
    padding: 1.25rem 1rem 0rem 1rem;
  }
  .container-advertise__advertises-flex {
    transition: transform 0.95s ease;
  }
  .advertise {
    height: 320px;
    padding: 3.4rem 1.87rem 0rem 2.23rem;
    background: linear-gradient(180deg, #dedfe7 0%, rgba(233, 234, 239, 0) 100%),
      #e9eaef;
  }
  .advertise__info-flex {
    gap: 0.78rem;
  }
  .advertise__text {
    font-size: 1.625rem;
  }
  .advertise__btn {
    font-size: 0.875rem;
  }
  .advertise__hero-from320px,
  .advertise__triangle-from320px {
    display: none;
  }
  .advertise__hero-from768px {
    display: block;
    position: absolute;
    bottom: 0rem;
    right: 6rem;
    height: 97%;
    width: 44%;
  }
  .advertise__triangle-from768px {
    display: block;
    position: absolute;
    opacity: 74%;
    width: 72.4%;
    max-height: 59px;
    left: 0rem;
    bottom: -0.04rem;
  }
  .advertise__arrows-flex {
    right: 1.87rem;
    bottom: 1.88rem;
  }
  /* 1024px = 64em */
  @media (min-width: 64em) {
    .container-advertise__advertises-flex {
      transition: transform 1.15s ease;
    }
    .advertise__hero-from768px {
      right: 10rem;
      width: 36%;
    }
  }

  /* 1440px = 90em */
  @media (min-width: 90em) {
    .container-advertise {
      padding: 1.25rem 2.5rem 0rem 2.5rem;
    }
    .container-advertise__carousel {
      border-radius: 10px;
    }
    .advertise {
      height: 500px;
      padding: 5.19rem 10.313rem 0rem 10.313rem;
    }
    .advertise__hero-from768px {
      width: 42%;
    }
    .advertise__triangle-from768px {
      bottom: -0.05rem;
    }
    .advertise__info-flex {
      gap: 1.25rem;
    }
    .advertise__title {
      font-size: 1.125rem;
    }
    .advertise__text {
      font-size: 2.25rem;
    }
    .advertise__arrows-flex {
      right: 10.313rem;
    }
  }

  /* 1920px = 120em */
  @media (min-width: 120em) {
    .container-advertise {
      padding: 1.25rem 3.75rem 0rem 3.75rem;
    }
    .container-advertise__advertises-flex {
      transition: transform 1.275s ease;
    }
    .advertise {
      height: 500px;
      padding: 5.19rem 12.69rem 0rem 12.69rem;
    }
    .advertise__hero-from768px {
      width: 30%;
      right: 24rem;
    }
    .advertise__triangle-from768px {
      max-height: 92px;
    }
    .advertise__info-flex {
      gap: 1.5rem;
    }
    .advertise__title {
      font-size: 1.5rem;
    }
    .advertise__text {
      font-size: 3rem;
    }
    .advertise__arrows-flex {
      right: 12.19rem;
    }
  }
}
</style>
