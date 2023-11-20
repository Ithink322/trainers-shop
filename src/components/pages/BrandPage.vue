<template>
  <div class="container-rect-brand">
    <a href=""
      ><img
        src="/imgs_main_page/container-rect-brand__btn-home-icon.svg"
        alt=""
        class="container-rect-brand__btn-home-icon"
    /></a>
    <a href="" class="container-rect-brand__btn-brands">Бренды</a>
    <h1 class="container-rect-brand__title">{{ $route.params.title }}</h1>
    <div class="container-rect-brand__border"></div>
    <a
      @click="$router.push('/')"
      class="container-rect-brand__btn-back-to-previous-page"
      >Назад</a
    >
    <div class="container-rect-brand__rect-brand">
      <img
        :src="`/imgs_main_page/${$route.params.imgSource}`"
        alt=""
        class="container-rect-brand__rect-brand-logo"
      />
      <p class="container-rect-brand__rect-brand-text">
        {{ $route.params.title }} — это торговая марка серии тренажеров для
        фитнеса. Компания, базирующаяся в Ванкувере, штат Вашингтон, продает
        свою продукцию через прямые, розничные и международные каналы. Первый
        продукт {{ $route.params.title }},
        {{ $route.params.title }}
        2000X, был создан в 1986 году.
      </p>
      <a href="" class="container-rect-brand__rect-brand-link">www.site.com</a>
      <img
        src="/imgs_main_page/container-rect-brand__brand-hero-from320px.svg"
        class="container-rect-brand__brand-hero-from320px"
      />
      <img
        src="/imgs_main_page/container-rect-brand__brand-hero-from768px.svg"
        class="container-rect-brand__brand-hero-from768px"
      />
      <img
        src="/imgs_main_page/container-rect-brand__brand-hero-from1440px.svg"
        class="container-rect-brand__brand-hero-from1440px"
      />
    </div>
    <p class="container-rect-brand__text-1">
      Значимость этих проблем настолько очевидна, что рамки и место обучения
      кадров требуют от нас анализа существенных финансовых и административных
      условий. С другой стороны начало повседневной работы по формированию
      позиции влечет за собой процесс внедрения и модернизации направлений
      прогрессивного развития.<br class="container-rect-brand__br-text-1" /><br
        class="container-rect-brand__br-text-1"
      />
      Равным образом постоянный количественный рост и сфера нашей активности в
      значительной степени обуславливает создание позиций, занимаемых
      участниками в отношении поставленных задач. С другой стороны укрепление и
      развитие структуры играет важную роль в формировании системы обучения
      кадров, соответствует насущным потребностям.
    </p>
    <div class="container-rect-brand__unknown-rect-border-1"></div>
    <div class="container-rect-brand__unknown-rect"></div>
    <p class="container-rect-brand__text-2">
      Значимость этих проблем настолько очевидна, что рамки и место обучения
      кадров требуют от нас анализа существенных финансовых и административных
      условий. С другой стороны начало повседневной работы по формированию
      позиции влечет за собой процесс внедрения и модернизации направлений
      прогрессивного развития. Равным образом постоянный количественный рост и
      сфера нашей активности в значительной степени обуславливает создание
      позиций, занимаемых участниками в отношении поставленных задач. С другой
      стороны укрепление и развитие структуры играет важную роль в формировании
      системы обучения кадров, соответствует насущным потребностям.
    </p>
    <div class="container-rect-brand__unknown-rect-border-2"></div>
    <p class="container-rect-brand__text-3">
      Значимость этих проблем настолько очевидна, что рамки и место обучения
      кадров требуют от нас анализа существенных финансовых и административных
      условий. С другой стороны начало повседневной работы по формированию
      позиции влечет за собой процесс внедрения и модернизации направлений
      прогрессивного развития.<br class="container-rect-brand__br-text-2" /><br
        class="container-rect-brand__br-text-2"
      />
      Равным образом постоянный количественный рост и сфера нашей активности в
      значительной степени обуславливает создание позиций, занимаемых
      участниками в отношении поставленных задач. С другой стороны укрепление и
      развитие структуры играет важную роль в формировании системы обучения
      кадров, соответствует насущным потребностям.
    </p>
  </div>
  <ideas></ideas>
</template>

<script>
import { useRouter } from "vue-router";
import Ideas from "../UI/Ideas.vue";
export default {
  name: "BrandsPages",
  components: { Ideas },
};
</script>

<style lang="scss">
$white-col: #ffffff;
$dark-col: #1a1a25;
$red-col: #f53b49;
$gray-col: #858fa4;
$dark-blue-col: #384255;
$blue: #4b7ee8;
.container-rect-brand__brand-hero-from768px,
.container-rect-brand__brand-hero-from1920px,
.container-rect-brand__brand-hero-from1440px {
  display: none;
}
.container-rect-brand {
  padding: 0.625rem;
}
.container-rect-brand__btn-home-icon {
  width: 15px;
  height: 15px;
}
.container-rect-brand__btn-brands {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 140%;
  color: rgba(56, 66, 85, 0.6);
  margin-left: 0.5rem;
}
.container-rect-brand__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 110%;
}
.container-rect-brand__border {
  margin-top: -0.5rem;
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
}
.container-rect-brand__btn-back-to-previous-page {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: $blue;
  cursor: pointer;
  top: 1.5rem;
}
.container-rect-brand__rect-brand {
  position: relative;
  width: 100%;
  height: 690px;
  background: $white-col;
  border-radius: 6px;
  top: 2.8rem;
  padding: 2rem 1.375rem 0rem 1.375rem;
}
.container-rect-brand__rect-brand-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;
  color: $dark-col;
  margin-top: -0.4rem;
}
.container-rect-brand__rect-brand-link {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;
  color: $blue;
}
.container-rect-brand__brand-hero-from320px {
  position: absolute;
  border-radius: 0px 0px 6px 6px;
  width: 100%;
  margin-left: -8rem;
  margin-top: 3.8rem;
}
.container-rect-brand__text-1 {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  top: 6.2rem;
}
.container-rect-brand__unknown-rect-border-1 {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
  margin-top: 8.6rem;
}
.container-rect-brand__unknown-rect {
  height: 180px;
  width: 100%;
  border-radius: 6px;
  background: #e4e4e4;
  margin-top: 3rem;
}
.container-rect-brand__text-2 {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  margin-top: 1.5rem;
}
.container-rect-brand__unknown-rect-border-2 {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
  margin-top: 2.8rem;
}
.container-rect-brand__text-3 {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  margin-top: 1.8rem;
}
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
/* 768px = 48em */
@media (min-width: 48em) {
  .container-rect-brand {
    padding: 2.5rem;
  }
  .container-rect-brand__btn-brands {
    margin-left: 0.5rem;
  }
  .container-rect-brand__title {
    font-size: 1.875rem;
    margin-top: 1.35rem;
  }
  .container-rect-brand__rect-brand {
    height: 400px;
    padding: 1rem 1.375rem 0rem 1.375rem;
  }
  .container-rect-brand__rect-brand-logo {
    margin-top: -1rem;
  }
  .container-rect-brand__rect-brand-text {
    font-size: 1rem;
    margin-top: -1rem;
    padding-right: 27rem;
    margin-bottom: 0.2rem;
  }
  .container-rect-brand__brand-hero-from320px {
    display: none;
  }
  .container-rect-brand__brand-hero-from768px {
    display: block;
    position: absolute;
    top: 0rem;
    right: 0rem;
    height: 400px;
  }
  .container-rect-brand__unknown-rect {
    height: 380px;
    width: 350px;
    margin-top: 3rem;
    margin-left: 1.25rem;
  }
  .container-rect-brand__text-2 {
    position: absolute;
    font-size: 0.875rem;
    margin-top: -23.5rem;
    margin-left: 25rem;
    padding-right: 1.8rem;
  }
  .container-rect-brand__text-3 {
    font-size: 0.875rem;
    margin-top: 1.8rem;
  }
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
  .container-rect-brand__rect-brand {
    height: 320px;
  }
  .container-rect-brand__rect-brand-text {
    font-size: 1.125rem;
    margin-top: -0.2rem;
    margin-bottom: 1rem;
  }
  .container-rect-brand__brand-hero-from768px {
    height: 320px;
  }
  .container-rect-brand__unknown-rect {
    width: 435px;
  }
  .container-rect-brand__text-1,
  .container-rect-brand__text-3 {
    font-size: 1rem;
  }
  .container-rect-brand__text-2 {
    font-size: 1rem;
    margin-top: -20.8rem;
    margin-left: 30.2rem;
    padding-right: 2.2rem;
  }
  .back-ideas__top-for-brands-pages {
    margin-top: 16rem;
  }
  .back-ideas__grid-top-for-brands-pages {
    top: 16rem;
  }
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
  .container-rect-brand {
    padding: 3.75rem 10.313rem 0rem 10.313rem;
  }
  .container-rect-brand__title {
    font-size: 2.375rem;
  }
  .container-rect-brand__btn-brands {
    margin-left: 0.5rem;
  }
  .container-rect-brand__rect-brand {
    padding: 3rem 4rem 0rem 3rem;
    height: 400px;
  }
  .container-rect-brand__rect-brand-text {
    font-size: 1.125rem;
    margin-top: -0.4rem;
    padding-right: 41rem;
  }
  .container-rect-brand__brand-hero-from768px {
    display: none;
  }
  .container-rect-brand__brand-hero-from1440px {
    display: block;
    position: absolute;
    top: 0rem;
    right: 0rem;
    height: 400px;
    width: 700px;
  }
  .container-rect-brand__text-1 {
    font-size: 1.125rem;
    padding: 0rem 15rem 0rem 15rem;
  }
  .container-rect-brand__unknown-rect {
    width: 660px;
    height: 490px;
  }
  .container-rect-brand__text-2 {
    font-size: 1.125rem;
    margin-top: -31rem;
    padding-left: 16rem;
    padding-right: 10rem;
  }
  .container-rect-brand__text-3 {
    font-size: 1.125rem;
    padding: 0rem 15rem 0rem 15rem;
  }
  .back-ideas {
    padding: 7.5rem 10.313rem 6.25rem 10.313rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-rect-brand {
    padding: 3.75rem 15.938rem 0rem 15.938rem;
  }
  .container-rect-brand__text-2 {
    margin-top: -21.8rem;
    padding: 0rem 18.2rem 0rem 16rem;
  }
  .back-ideas {
    padding: 7.5rem 15.938rem 6.25rem 15.938rem;
  }
}
</style>
