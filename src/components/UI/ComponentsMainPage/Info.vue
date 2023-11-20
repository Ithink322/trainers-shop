<template>
  <div class="container-index__info-main-flex">
    <div class="container-index__info-rect-1">
      <div class="container-index__info-rect-flex">
        <img
          src="imgs_main_page/support_icon.png"
          alt=""
          class="container-index__info-img"
        />
        <div class="container-index__info-title-and-text-flex">
          <p class="container-index__info-title">Помощь покупателю</p>
          <p class="container-index__info-text">
            Узнайте как приобрести товар,<br
              class="container-index__br-info-text"
            />
            способы доставки и оплаты, а также<br
              class="container-index__br-info-text"
            />
            условия гарантии.
          </p>
        </div>
        <div class="container-index__info-arrow-and-text-more-flex">
          <p class="container-index__info-text-more">Подробнее</p>
          <img
            src="imgs_main_page/arrow_red.png"
            alt=""
            class="container-index__info-arrow"
          />
        </div>
      </div>
    </div>
    <div class="container-index__info-rect-2">
      <div class="container-index__info-rect-flex">
        <img
          src="imgs_main_page/telephone_icon.png"
          alt=""
          class="container-index__info-img"
        />
        <div class="container-index__info-title-and-text-flex">
          <p class="container-index__info-title">Заявка на сервис</p>
          <p class="container-index__info-text">
            Оставьте заявку на проведение<br
              class="container-index__br-info-text"
            />
            гарантийного и постгарантийного<br
              class="container-index__br-info-text"
            />
            ремонта.
          </p>
        </div>
        <div class="container-index__info-arrow-and-text-more-flex">
          <p class="container-index__info-text-more">Подробнее</p>
          <img
            src="imgs_main_page/arrow_red.png"
            alt=""
            class="container-index__info-arrow"
          />
        </div>
      </div>
    </div>
    <div class="container-index__info-rect-3">
      <div class="container-index__info-rect-3-flex">
        <img
          src="imgs_main_page/request_icon.png"
          alt=""
          class="container-index__info-img-rect-3"
        />
        <div class="container-index__info-title-and-text-flex">
          <p class="container-index__info-title-rect-3">
            Выставочный<br class="container-index__br-info-title-rect-3" />
            зал
          </p>
          <p class="container-index__info-text-rect-3">
            Оставьте заявку<br class="container-index__br0-info-text-rect-3" />
            на посещение<br class="container-index__br1-info-text-rect-3" />
            шоу-рума в Москве
          </p>
        </div>
        <div class="container-index__info-arrow-and-text-more-flex">
          <p class="container-index__info-text-more-rect-3">Подробнее</p>
          <img
            src="imgs_main_page/arrow_white.png"
            alt=""
            class="container-index__info-arrow-rect-3"
          />
        </div>
        <img
          src="imgs_main_page/hand_img.png"
          alt=""
          class="container-index__info-hero-rect-3"
        />
      </div>
    </div>
    <div class="container-index__info-rect-4">
      <div class="container-index__info-rect-flex">
        <img
          src="imgs_main_page/gym_icon.png"
          alt=""
          class="container-index__info-img"
        />
        <div class="container-index__info-title-and-text-flex">
          <p class="container-index__info-title">Выставочный зал</p>
          <p class="container-index__info-text">
            Оставьте заявку на посещение<br
              class="container-index__br-info-text"
            />
            шоу-рума в Москве
          </p>
        </div>
        <div class="container-index__info-arrow-and-text-more-flex">
          <p class="container-index__info-text-more">Подробнее</p>
          <img
            src="imgs_main_page/arrow_red.png"
            alt=""
            class="container-index__info-arrow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style lang="scss">
$white-col: #ffffff;
$dark-col: #1a1a25;
$red-col: #f53b49;
$gray-col: #858fa4;
$dark-blue-col: #384255;
$blue: #4b7ee8;
.container-index__info-main-flex {
  display: flex;
  flex-flow: column nowrap;
  gap: 0.62rem;
}
.container-index__info-main-flex p {
  margin: 0rem;
}
.container-index__info-main-flex * {
  padding: 0rem;
  margin-right: 0rem;
}
.container-index__info-rect-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.62rem;
}
.container-index__info-rect-1 {
  position: relative;
  width: 100%;
  background: $white-col;
  border-radius: 6px 6px 0px 0px;
  border: 1px solid rgba(133, 143, 164, 0.2);
  padding: 1.25rem;
}
.container-index__info-rect-2 {
  position: relative;
  width: 100%;
  background: $white-col;
  border: 1px solid rgba(133, 143, 164, 0.2);
  padding: 1.25rem;
}
.container-index__info-rect-3-flex {
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
}
.container-index__info-rect-3 {
  position: relative;
  width: 100%;
  background: $red-col;
  border: 1px solid rgba(133, 143, 164, 0.2);
  padding: 1.25rem;
}
.container-index__info-rect-4 {
  position: relative;
  width: 100%;
  background: $white-col;
  border-radius: 0px 0px 6px 6px;
  border: 1px solid rgba(133, 143, 164, 0.2);
  padding: 1.25rem;
}
.container-index__info-img {
  width: 60px;
  height: 60px;
}
.container-index__info-title-and-text-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container-index__info-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  line-height: 110%;
  text-align: center;
  white-space: nowrap;
}
.container-index__info-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  text-align: center;
}
.container-index__info-arrow-and-text-more-flex {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.container-index__info-text-more {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  color: $red-col;
}
.container-index__info-arrow {
  rotate: 180deg;
  width: 11px;
  height: 10px;
}
.container-index__info-title-rect-3 {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  line-height: 110%;
  color: $white-col;
}
.container-index__info-img-rect-3 {
  width: 60px;
  height: 60px;
}
.container-index__info-text-rect-3 {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $white-col;
}
.container-index__info-text-more-rect-3 {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: $white-col;
}
.container-index__info-hero-rect-3 {
  position: absolute;
  width: 110px;
  height: 156px;
  right: -0.05rem;
  bottom: -0.05rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-index__info-main-flex {
    flex-flow: row wrap;
    gap: 0rem;
  }
  .container-index__info-rect-1,
  .container-index__info-rect-2,
  .container-index__info-rect-3,
  .container-index__info-rect-4 {
    width: 50%;
  }
  .container-index__info-rect-flex {
    gap: 1.25rem;
  }
  .container-index__info-img {
    width: 60px;
    height: 60px;
  }
  .container-index__info-title-and-text-flex {
    gap: 0.62rem;
  }
  .container-index__info-title {
    font-size: 1.25rem;
  }
  .container-index__info-text {
    font-size: 1rem;
  }
  .container-index__info-title-rect-3 {
    font-size: 1.25rem;
    white-space: nowrap;
  }
  .container-index__info-img-rect-3 {
    width: 60px;
    height: 60px;
  }
  .container-index__info-text-rect-3 {
    font-size: 1rem;
  }
  .container-index__info-hero-rect-3 {
    width: 125px;
    height: 166px;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-index__info-rect-1 {
    border-radius: 6px 0px 0px 0px;
  }
  .container-index__info-rect-2 {
    border-radius: 0px 6px 0px 0px;
  }
  .container-index__info-rect-3 {
    padding: 1.88rem 2.5rem 2.5rem 2.5rem;
    border-radius: 0px 0px 0px 6px;
  }
  .container-index__info-rect-4 {
    border-radius: 0px 0px 6px 0px;
  }
  .container-index__info-hero-rect-3 {
    width: 142px;
    height: 185px;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-index__info-border-top-from1440px {
    border: 1px solid rgba(133, 143, 164, 0.2);
  }
  .container-index__info-main-flex {
    flex-flow: row nowrap;
    margin-top: 1.688rem;
    margin-bottom: 10rem;
  }
  .container-index__info-rect-1 {
    border-radius: 6px 0px 0px 6px;
    height: 305px;
  }
  .container-index__info-rect-2 {
    border-radius: 0px 0px 0px 0px;
    height: 305px;
  }
  .container-index__info-rect-3 {
    padding: 1.88rem 2.5rem 1.88rem 2.5rem;
    border-radius: 6px 6px 0px 0px;
    height: 330px;
    margin-top: -1.55rem;
  }
  .container-index__info-rect-4 {
    border-radius: 0px 6px 6px 0px;
    height: 305px;
  }
  .container-index__info-hero-rect-3 {
    width: 90px;
    height: 135px;
  }
}
</style>
