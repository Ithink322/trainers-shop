<template>
  <div class="container-brands">
    <div class="container-brands__main-flex">
      <h2 class="container-brands__title">Популярные бренды</h2>
      <div class="container-brands__subtitles-flex">
        <p class="container-brands__subtitle">Беговые дорожки</p>
        <p class="container-brands__subtitle">Эллиптические тренажеры</p>
        <p class="container-brands__subtitle">Велотренажеры</p>
        <p class="container-brands__subtitle">Силовые тренажеры</p>
        <p class="container-brands__subtitle">Батуты</p>
        <p class="container-brands__subtitle">Игровые столы</p>
      </div>
      <div class="container-brands__grid">
        <div class="container-brands__rect-brand-1">
          <img
            src="imgs_main_page/brand_img_1.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-2">
          <img
            src="imgs_main_page/brand_img_2.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-3">
          <img
            src="imgs_main_page/brand_img_3.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-4">
          <img
            src="imgs_main_page/brand_img_4.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-5">
          <img
            src="imgs_main_page/brand_img_5.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-6">
          <img
            src="imgs_main_page/brand_img_6.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-7">
          <img
            src="imgs_main_page/brand_img_7.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-8">
          <img
            src="imgs_main_page/brand_img_8.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-9">
          <img
            src="imgs_main_page/brand_img_9.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-10">
          <img
            src="imgs_main_page/brand_img_10.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-11">
          <img
            src="imgs_main_page/brand_img_11.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-12">
          <img
            src="imgs_main_page/brand_img_12.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-13">
          <img
            src="imgs_main_page/brand_img_13.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-14">
          <img
            src="imgs_main_page/brand_img_14.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
        <div class="container-brands__rect-brand-15">
          <img
            src="imgs_main_page/brand_img_15.png"
            alt=""
            class="container-brands__img-brand"
          />
        </div>
      </div>
      <button class="container-brands__btn">Все бренды</button>
    </div>
  </div>
</template>

<script>
import BrandPage from "../../pages/BrandPage.vue";
export default {
  name: "Brands",
  components: { BrandPage },
  /* data() {
    return {
      title: "",
      imgSource: "",
    };
  }, */
  mounted() {
    window.addEventListener("click", (event) => {
      if (event.target.closest(".container-brands__rect-brand-1")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Bowflex",
            imgSource: "brand_img_1.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-2")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Boxingbar",
            imgSource: "brand_img_2.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-3")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Double Fish",
            imgSource: "brand_img_3.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-4")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Cardio Power",
            imgSource: "brand_img_4.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-5")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Eclipse",
            imgSource: "brand_img_5.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-6")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "gym80",
            imgSource: "brand_img_6.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-7")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Hyfit",
            imgSource: "brand_img_7.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-8")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "kernel",
            imgSource: "brand_img_8.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-9")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Meridien",
            imgSource: "brand_img_9.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-10")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Nautilus",
            imgSource: "brand_img_10.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-11")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Octane",
            imgSource: "brand_img_11.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-12")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Optima",
            imgSource: "brand_img_12.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-13")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Original",
            imgSource: "brand_img_13.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-14")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "PRO SKI-SIMULATOR",
            imgSource: "brand_img_14.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
      if (event.target.closest(".container-brands__rect-brand-15")) {
        this.$router.push({
          name: "BrandPage", // Имя маршрута BrandPage
          params: {
            title: "Cardio Power Pro",
            imgSource: "brand_img_15.png",
          },
        });
        window.scrollTo(0, 0); // Перемещение в начало страницы
      }
    });
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
.container-brands {
  padding: 5rem 0.625rem 0rem 0.625rem;
}
.container-brands__main-flex {
  display: flex;
  flex-flow: column nowrap;
  gap: 1.25rem;
}
.container-brands__main-flex p,
.container-brands__main-flex h2 {
  margin: 0rem;
}
.container-brands__title {
  color: $dark-col;
  font-size: 1.375rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  line-height: 110%;
  white-space: nowrap;
}
.container-brands__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, auto);
}
.container-brands__subtitles-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 0.48rem;
}
.container-brands__subtitle {
  color: $dark-blue-col;
  font-size: 0.75rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}
.container-brands__rect-brand-1,
.container-brands__rect-brand-2,
.container-brands__rect-brand-3,
.container-brands__rect-brand-4,
.container-brands__rect-brand-5,
.container-brands__rect-brand-6,
.container-brands__rect-brand-7,
.container-brands__rect-brand-8,
.container-brands__rect-brand-9,
.container-brands__rect-brand-10,
.container-brands__rect-brand-11,
.container-brands__rect-brand-12,
.container-brands__rect-brand-13,
.container-brands__rect-brand-14,
.container-brands__rect-brand-15 {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(133, 143, 164, 0.2);
  width: 100%;
  aspect-ratio: 3/2;
  background: $white-col;
  cursor: pointer;
}
.container-brands__rect-brand-1 {
  grid-area: 1/1;
  border-radius: 6px 0px 0px 0px;
}
.container-brands__rect-brand-2 {
  grid-area: 1/2;
}
.container-brands__rect-brand-3 {
  grid-area: 1/3;
  border-radius: 0px 6px 0px 0px;
}
.container-brands__rect-brand-4 {
  grid-area: 2/1;
}
.container-brands__rect-brand-5 {
  grid-area: 2/2;
}
.container-brands__rect-brand-6 {
  grid-area: 2/3;
}
.container-brands__rect-brand-7 {
  grid-area: 3/1;
}
.container-brands__rect-brand-8 {
  grid-area: 3/2;
}
.container-brands__rect-brand-9 {
  grid-area: 3/3;
}
.container-brands__rect-brand-10 {
  grid-area: 4/1;
}
.container-brands__rect-brand-11 {
  grid-area: 4/2;
}
.container-brands__rect-brand-12 {
  grid-area: 4/3;
}
.container-brands__rect-brand-13 {
  grid-area: 5/1;
  border-radius: 0px 0px 0px 6px;
}
.container-brands__rect-brand-14 {
  grid-area: 5/2;
}
.container-brands__rect-brand-15 {
  grid-area: 5/3;
  border-radius: 0px 0px 6px 0px;
}
.container-brands__img-brand {
  max-height: 64%;
  width: 80%;
}
.container-brands__btn {
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 4px;
  border: 1px solid $red-col;
  background: transparent;
  padding: 0.75rem 1.25rem 0.75rem 1.25rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: $red-col;
  white-space: nowrap;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-brands {
    padding: 6.25rem 2.5rem 0rem 2.5rem;
  }
  .container-brands__main-flex {
    gap: 1.88rem;
  }
  .container-brands__title {
    font-size: 1.875rem;
  }
  .container-brands__grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, auto);
  }
  .container-brands__subtitles-flex {
    gap: 1rem;
  }
  .container-brands__subtitle {
    font-size: 1rem;
  }
  .container-brands__rect-brand-1 {
    grid-area: 1/1;
  }
  .container-brands__rect-brand-2 {
    grid-area: 1/2;
  }
  .container-brands__rect-brand-3 {
    grid-area: 1/3;
  }
  .container-brands__rect-brand-4 {
    grid-area: 1/4;
  }
  .container-brands__rect-brand-5 {
    grid-area: 2/1;
  }
  .container-brands__rect-brand-6 {
    grid-area: 2/2;
  }
  .container-brands__rect-brand-7 {
    grid-area: 2/3;
  }
  .container-brands__rect-brand-8 {
    grid-area: 2/4;
  }
  .container-brands__rect-brand-9 {
    grid-area: 3/1;
  }
  .container-brands__rect-brand-10 {
    grid-area: 3/2;
  }
  .container-brands__rect-brand-11 {
    grid-area: 3/3;
  }
  .container-brands__rect-brand-12 {
    grid-area: 3/4;
  }
  .container-brands__rect-brand-13 {
    grid-area: 5/1;
  }
  .container-brands__rect-brand-14 {
    grid-area: 5/2;
  }
  .container-brands__rect-brand-15 {
    grid-area: 5/3;
  }
  .container-brands__btn {
    font-size: 0.875rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-brands__subtitles-flex {
    gap: 1.88rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-brands {
    padding: 6.25rem 10.313rem 1.88rem 10.313rem;
  }
  .container-brands__grid {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, auto);
  }
  .container-brands__rect-brand-1 {
    grid-area: 1/1;
  }
  .container-brands__rect-brand-2 {
    grid-area: 1/2;
  }
  .container-brands__rect-brand-3 {
    grid-area: 1/3;
  }
  .container-brands__rect-brand-4 {
    grid-area: 1/4;
  }
  .container-brands__rect-brand-5 {
    grid-area: 1/5;
  }
  .container-brands__rect-brand-6 {
    grid-area: 2/1;
  }
  .container-brands__rect-brand-7 {
    grid-area: 2/2;
  }
  .container-brands__rect-brand-8 {
    grid-area: 2/3;
  }
  .container-brands__rect-brand-9 {
    grid-area: 2/4;
  }
  .container-brands__rect-brand-10 {
    grid-area: 2/5;
  }
  .container-brands__rect-brand-11 {
    grid-area: 3/1;
  }
  .container-brands__rect-brand-12 {
    grid-area: 3/2;
  }
  .container-brands__rect-brand-13 {
    grid-area: 3/3;
  }
  .container-brands__rect-brand-14 {
    grid-area: 3/4;
  }
  .container-brands__rect-brand-15 {
    grid-area: 3/5;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-brands {
    padding: 6.25rem 15.938rem 3.75rem 15.938rem;
  }
}
</style>
