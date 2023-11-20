<template>
  <div class="container-index__about-company">
    <div class="container-index__about-company-info-flex">
      <h2 class="container-index__about-company-info-title">О компании</h2>
      <div class="container-index__about-company-info-texts-flex">
        <p class="container-index__about-company-info-text-1">
          Надежный партнер с 2005 года для сотен компаний от Калининграда
          до Владивостока.
        </p>
        <p class="container-index__about-company-info-text-2">
          Оптима Импорт — один из самых крупных импортеров фитнес-оборудования,
          эксклюзивно представляет на российском рынке ведущих мировых
          производителей: Sole Fitness, Optima Fitness, Halley, Marcy, SKI
          Simulator и др.Мы предлагаем широкий спектр самой современной и
          качественной продукции как для домашнего, так и для коммерческого
          фитнеса.
        </p>
      </div>
      <div class="container-index__about-company-info-btn">
        Подробнее о компании
      </div>
    </div>
    <div class="container-index__about-company-overflow-for-map">
      <img
        src="imgs_main_page/map-overflow-from320px.svg"
        alt=""
        class="container-index__about-company-overflow-map-img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCompany",
};
</script>

<style lang="scss">
$white-col: #ffffff;
$dark-col: #1a1a25;
$red-col: #f53b49;
$gray-col: #858fa4;
$dark-blue-col: #384255;
$blue: #4b7ee8;
.container-index__about-company {
  margin-top: 5rem;
}
.container-index__about-company-info-flex {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.container-index__about-company-info-flex p,
.container-index__about-company-info-flex h2 {
  font-family: "Inter", sans-serif;
  margin: 0rem;
}
.container-index__about-company-info-texts-flex {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.container-index__about-company-info-title {
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 110%;
  color: $dark-col;
}
.container-index__about-company-info-text-1 {
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-blue-col;
  z-index: 2;
}
.container-index__about-company-info-text-2 {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-blue-col;
  z-index: 2;
}
.container-index__about-company-info-btn {
  display: flex;
  align-items: center;
  border: 1px solid $red-col;
  background: transparent;
  border-radius: 4px;
  padding: 0.75rem 1.25rem 0.8125rem 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: $red-col;
  width: fit-content;
  z-index: 2;
  cursor: pointer;
}
.container-index__about-company-overflow-for-map {
  overflow: hidden;
  margin-right: -0.625rem;
  margin-left: -0.3125rem;
  margin-top: -2.8rem;
}
.container-index__about-company-overflow-map-img {
  width: 100%;
  min-height: 220px;
  max-height: 980px;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .container-index__about-company {
    margin-top: 6.25rem;
  }
  .container-index__about-company-info-flex {
    flex-direction: column;
    gap: 1.25rem;
  }
  .container-index__about-company-info-title {
    font-size: 1.875rem;
  }
  .container-index__about-company-info-text-1 {
    font-size: 1.5rem;
  }
  .container-index__about-company-info-text-2 {
    font-size: 1.125rem;
  }
  .container-index__about-company-info-btn {
    font-size: 0.875rem;
  }
  .container-index__about-company-overflow-for-map {
    margin-right: -2.5rem;
    margin-left: -1.125rem;
    margin-top: -13rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-index__about-company-info-texts-flex {
    flex-flow: row nowrap;
  }
  .container-index__about-company-info-text-1,
  .container-index__about-company-info-text-2 {
    flex: 1;
  }
  .container-index__about-company-overflow-for-map {
    margin-right: -2.5rem;
    margin-left: 0rem;
    margin-top: -18rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-index__about-company-info-texts-flex {
    flex-direction: column;
    padding-right: 62%;
  }
  .container-index__about-company-overflow-for-map {
    margin-right: -8.5rem;
    margin-top: -33rem;
  }
  .container-index__about-company-overflow-map-img {
    width: 987.562px;
    height: 533.309px;
    margin-left: 17.8rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-index__about-company-overflow-for-map {
    margin-top: -30rem;
    margin-right: -10rem;
  }
  .container-index__about-company-overflow-map-img {
    margin-left: 38rem;
  }
}
</style>
