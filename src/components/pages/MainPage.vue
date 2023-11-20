<template>
  <div>
    <advertise-carousel></advertise-carousel>
    <ProductCards></ProductCards>
    <ideas></ideas>
    <brands></brands>
    <div class="container-index__info-border-top-from1440px"></div>
    <div class="container-index">
      <info></info>
      <about-company></about-company>
      <rect-partners></rect-partners>
      <news-blog-s-lider></news-blog-s-lider>
    </div>
  </div>
</template>

<script>
import AdvertiseCarousel from "../UI/ComponentsMainPage/AdvertiseCarousel.vue";
import ProductCards from "../UI/ComponentsMainPage/ProductCards.vue";
import Ideas from "../UI/Ideas.vue";
import Brands from "../UI/ComponentsMainPage/Brands.vue";
import Info from "../UI/ComponentsMainPage/Info.vue";
import AboutCompany from "../UI/ComponentsMainPage/AboutCompany.vue";
import RectPartners from "../UI/ComponentsMainPage/RectPartners.vue";
import NewsBlogSLider from "../UI/ComponentsMainPage/NewsBlogSlider.vue";
export default {
  name: "MainPage",
  components: {
    AdvertiseCarousel,
    ProductCards,
    Ideas,
    Brands,
    Info,
    AboutCompany,
    RectPartners,
    NewsBlogSLider,
  },
};
</script>

<style lang="scss">
.container-index {
  padding: 5rem 0.625rem 3.75rem 0.625rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-index {
    padding: 3.75rem 2.5rem 3.75rem 2.5rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-index__info-border-top-from1440px {
    border: 1px solid rgba(133, 143, 164, 0.2);
  }
  .container-index {
    padding: 6.25rem 10.313rem 3.75rem 10.313rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-index {
    padding: 6.25rem 15.938rem 3.75rem 15.938rem;
  }
}
</style>
