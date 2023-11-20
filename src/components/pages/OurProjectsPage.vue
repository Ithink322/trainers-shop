<template>
  <div class="container-our-projects__border-from1440px"></div>
  <div class="container-our-projects">
    <img
      src="imgs_main_page/img-home-icon.svg"
      alt=""
      class="container-our-projects__img-home-icon"
    />
    <p class="container-our-projects__text-home-icon">Наши проекты</p>
    <h1 class="container-our-projects__title">Наши проекты</h1>
    <div class="container-our-projects__grid-projects-border"></div>
    <a
      @click="goToAboutCompanyPage"
      class="container-our-projects__link-about-us-from1440px"
      >О нас</a
    >
    <div class="container-our-projects__border-link-about-us-from1440px"></div>
    <a
      @click="goToOurTeamPage"
      class="container-our-projects__link-our-team-from1440px"
      >Наша команда</a
    >
    <div class="container-our-projects__border-link-our-team-from1440px"></div>
    <a class="container-our-projects__link-our-projects-from1440px"
      >Наши проекты</a
    >
    <div
      class="container-our-projects__border-link-our-projects-from1440px"
    ></div>
    <a
      @click="goToWhereToBuyPage"
      class="container-our-projects__link-where-to-buy-from1440px"
      >Где купить</a
    >
    <div
      class="container-our-projects__border-link-where-to-buy-from1440px"
    ></div>
    <div class="container-our-projects__border-huge-links"></div>
    <a @click="goToAboutCompanyPage"
      ><button class="container-our-projects__btn-about-company">
        О нас
      </button></a
    ><a @click="goToOurTeamPage"
      ><button class="container-our-projects__btn-our-team">
        Наша команда
      </button></a
    ><a
      ><button class="container-our-projects__btn-our-projects">
        Наши проекты
      </button></a
    ><a @click="goToWhereToBuyPage"
      ><button class="container-our-projects__btn-where-to-buy">
        Где купить
      </button></a
    >
    <div class="container-our-projects__grid-projects">
      <a
        @click="goToProject1Page"
        class="container-our-projects__grid-projects-img-1"
        ><img
          src="imgs_main_page/container-our-projects__grid-projects-img-1.svg"
          alt=""
          class="container-our-projects__grid-projects-img-1"
      /></a>
      <a
        @click="goToProject2Page"
        class="container-our-projects__grid-projects-img-2"
        ><img
          src="imgs_main_page/container-our-projects__grid-projects-img-2.svg"
          alt=""
          class="container-our-projects__grid-projects-img-2"
      /></a>
      <a
        @click="goToProject3Page"
        class="container-our-projects__grid-projects-img-3"
        ><img
          src="imgs_main_page/container-our-projects__grid-projects-img-3.svg"
          alt=""
          class="container-our-projects__grid-projects-img-3"
      /></a>
      <a
        @click="goToProject4Page"
        class="container-our-projects__grid-projects-img-4"
        ><img
          src="imgs_main_page/container-our-projects__grid-projects-img-4.svg"
          alt=""
          class="container-our-projects__grid-projects-img-4"
      /></a>
      <a
        @click="goToProject1Page"
        class="container-our-projects__grid-projects-info-1"
      >
        <span class="container-our-projects__grid-projects-title"
          >В продажу поступили тренажеры Nautilus</span
        ><br class="container-our-projects__br1440px-grid-projects-title" />
        <span class="container-our-projects__grid-projects-text"
          >Представляем тренажеры Nautilus 626 серии.</span
        >
      </a>
      <a
        @click="goToProject2Page"
        class="container-our-projects__grid-projects-info-2"
      >
        <span class="container-our-projects__grid-projects-title"
          >В продажу поступили тренажеры Nautilus</span
        ><br class="container-our-projects__br1440px-grid-projects-title" />
        <span class="container-our-projects__grid-projects-text"
          >Представляем тренажеры Nautilus 626 серии.</span
        >
      </a>
      <a
        @click="goToProject3Page"
        class="container-our-projects__grid-projects-info-3"
      >
        <span class="container-our-projects__grid-projects-title"
          >В продажу поступили тренажеры Nautilus</span
        ><br class="container-our-projects__br1440px-grid-projects-title" />
        <span class="container-our-projects__grid-projects-text"
          >Представляем тренажеры Nautilus 626 серии.</span
        >
      </a>
      <a
        @click="goToProject4Page"
        class="container-our-projects__grid-projects-info-4"
      >
        <span class="container-our-projects__grid-projects-title"
          >В продажу поступили тренажеры Nautilus</span
        ><br class="container-our-projects__br1440px-grid-projects-title" />
        <span class="container-our-projects__grid-projects-text"
          >Представляем тренажеры Nautilus 626 серии.</span
        >
      </a>
    </div>
  </div>
</template>

<script>
import ProjectPage from "../pages/ProjectPage.vue";
export default {
  name: "OurProjects",
  components: { ProjectPage },
  mounted() {
    /* change styles on hover at .container-our-projects__btn-about-company, .container-about-projects__btn-our-team, .container-our-projects__btn-where-to-buy starts */
    const btn_about_company = document.querySelector(
        ".container-our-projects__btn-about-company"
      ),
      btn_our_team = document.querySelector(
        ".container-our-projects__btn-our-team"
      ),
      btn_where_to_buy = document.querySelector(
        ".container-our-projects__btn-where-to-buy"
      );
    btn_about_company.onmouseover = function () {
      this.style.background = "#f53b49";
      this.style.color = "#fff";
    };
    btn_about_company.onmouseout = function () {
      this.style.background = "#fff";
      this.style.color = "#000";
    };
    btn_our_team.onmouseover = function () {
      this.style.background = "#f53b49";
      this.style.color = "#fff";
    };
    btn_our_team.onmouseout = function () {
      this.style.background = "#fff";
      this.style.color = "#000";
    };
    btn_where_to_buy.onmouseover = function () {
      this.style.background = "#f53b49";
      this.style.color = "#fff";
    };
    btn_where_to_buy.onmouseout = function () {
      this.style.background = "#fff";
      this.style.color = "#000";
    };
    /* change styles on hover at .container-our-projects__btn-about-company, .container-about-projects__btn-our-team, .container-our-projects__btn-where-to-buy ends */
  },
  methods: {
    goToAboutCompanyPage() {
      this.$router.push("/AboutCompanyPage");
      window.scrollTo(0, 0);
    },
    goToOurTeamPage() {
      this.$router.push("/OurTeamPage");
      window.scrollTo(0, 0);
    },
    goToWhereToBuyPage() {
      this.$router.push("/WhereToBuyPage");
      window.scrollTo(0, 0);
    },
    goToProject1Page() {
      this.$router.push({
        name: "ProjectPage", // Имя маршрута BrandPage
        params: {
          projectNum: "project-1",
          title: "Crocus Fitness",
          logoSrc: "brand_img_8.png",
          heroSrc: "container-our-projects__grid-projects-img-1.svg",
          heroSrcFrom1024px: "container-our-projects__grid-projects-img-1.svg",
        },
      });
      window.scrollTo(0, 0); // Перемещение в начало страницы
    },
    goToProject2Page() {
      this.$router.push({
        name: "ProjectPage",
        params: {
          projectNum: "project-2",
          title: "Nautilus",
          logoSrc: "brand_img_10.png",
          heroSrc: "container-our-projects__grid-projects-img-2.svg",
          heroSrcFrom1024px:
            "container-our-projects__grid-projects-img-2-from1024px.svg",
        },
      });
      window.scrollTo(0, 0); // Перемещение в начало страницы
    },
    goToProject3Page() {
      this.$router.push({
        name: "ProjectPage",
        params: {
          projectNum: "project-3",
          title: "NeoFit",
          logoSrc: "container-project__rect-project-logo.svg",
          heroSrc: "container-our-projects__grid-projects-img-3.svg",
          heroSrcFrom1024px: "container-our-projects__grid-projects-img-3.svg",
        },
      });
      window.scrollTo(0, 0); // Перемещение в начало страницы
    },
    goToProject4Page() {
      this.$router.push({
        name: "ProjectPage",
        params: {
          projectNum: "project-4",
          title: "IDK",
          logoSrc: "brand_img_1.png",
          heroSrc: "container-our-projects__grid-projects-img-4.svg",
          heroSrcFrom1024px:
            "container-our-projects__grid-projects-img-4-from1024px.svg",
        },
      });
      window.scrollTo(0, 0); // Перемещение в начало страницы
    },
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
.container-our-projects__border-from1440px,
.container-our-projects__br1440px-grid-projects-title,
.container-our-projects__link-about-us-from1440px,
.container-our-projects__link-about-us-from1440px,
.container-our-projects__border-link-about-us-from1440px,
.container-our-projects__link-our-team-from1440px,
.container-our-projects__border-link-our-team-from1440px,
.container-our-projects__link-our-projects-from1440px,
.container-our-projects__border-link-our-projects-from1440px,
.container-our-projects__link-where-to-buy-from1440px,
.container-our-projects__border-link-where-to-buy-from1440px,
.container-our-projects__border-huge-links,
.container-our-projects__grid-projects {
  display: none;
}
.container-our-projects {
  padding: 0.625rem 0.625rem 0rem 0.625rem;
}
.container-our-projects__img-home-icon {
  cursor: pointer;
}
.container-our-projects__text-home-icon {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  margin-top: -1.1rem;
  margin-left: 1.7rem;
  cursor: pointer;
}
.container-our-projects__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 110%;
  margin-top: 1.4rem;
}
.container-our-projects__grid-projects-border {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
  margin-top: 0.8rem;
}
.container-our-projects__btn-about-company {
  position: relative;
  width: 54px;
  height: 32px;
  background: $white-col;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 8px 10px 9px 10px;
  color: #000;
  border: none;
  border-radius: 4px;
  margin-top: 1.25rem;
  cursor: pointer;
}
.container-our-projects__btn-our-team {
  position: relative;
  width: 109px;
  height: 32px;
  background: $white-col;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 8px 10px 9px 10px;
  color: #000;
  border: none;
  border-radius: 4px;
  margin-left: 0.5rem;
  cursor: pointer;
}
.container-our-projects__btn-our-projects {
  position: relative;
  width: 110px;
  height: 32px;
  background: $red-col;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 8px 10px 9px 10px;
  color: $white-col;
  border: none;
  border-radius: 4px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
}
.container-our-projects__btn-where-to-buy {
  position: relative;
  width: 90px;
  height: 32px;
  background: $white-col;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 8px 10px 9px 10px;
  color: #000;
  border: none;
  border-radius: 4px;
  margin-top: 0.5rem;
  cursor: pointer;
}
.container-our-projects__grid-projects {
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(4, 220px);
  grid-row-gap: 8.75rem;
  margin-top: 1.875rem;
  margin-bottom: 7.6rem;
}
.container-our-projects__grid-projects-img-1 {
  position: relative;
  grid-area: 1/1;
  width: 100%;
  height: 220px;
  object-fit: cover;
  cursor: pointer;
}
.container-our-projects__grid-projects-img-2 {
  position: relative;
  grid-area: 2/1;
  width: 100%;
  height: 220px;
  object-fit: cover;
  cursor: pointer;
}
.container-our-projects__grid-projects-img-3 {
  position: relative;
  grid-area: 3/1;
  width: 100%;
  height: 220px;
  object-fit: cover;
  cursor: pointer;
}
.container-our-projects__grid-projects-img-4 {
  position: relative;
  grid-area: 4/1;
  width: 100%;
  height: 220px;
  object-fit: cover;
  cursor: pointer;
}
.container-our-projects__grid-projects-info-1 {
  grid-area: 1/1;
  margin-top: 14.7rem;
  cursor: pointer;
}
.container-our-projects__grid-projects-info-2 {
  grid-area: 2/1;
  margin-top: 14.7rem;
  cursor: pointer;
}
.container-our-projects__grid-projects-info-3 {
  grid-area: 3/1;
  margin-top: 14.7rem;
  cursor: pointer;
}
.container-our-projects__grid-projects-info-4 {
  grid-area: 4/1;
  margin-top: 14.7rem;
  cursor: pointer;
}
.container-our-projects__grid-projects-title {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #384255;
  font-weight: 700;
  line-height: 150%;
}
.container-our-projects__grid-projects-text {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: #384255;
  font-weight: 400;
  line-height: 150%;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-our-projects {
    padding: 2.5rem 2.5rem 0rem 2.5rem;
  }
  .container-our-projects__title {
    font-size: 1.875rem;
    margin-top: 0rem;
  }
  .container-our-projects__grid-projects {
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(4, 280px);
    grid-row-gap: 5.9rem;
  }
  .container-our-projects__grid-projects-img-1,
  .container-our-projects__grid-projects-img-2,
  .container-our-projects__grid-projects-img-3,
  .container-our-projects__grid-projects-img-4 {
    height: 280px;
  }
  .container-our-projects__grid-projects-info-1,
  .container-our-projects__grid-projects-info-2,
  .container-our-projects__grid-projects-info-3,
  .container-our-projects__grid-projects-info-4 {
    margin-top: 18.4rem;
  }
  .container-our-projects__grid-projects-title,
  .container-our-projects__grid-projects-text {
    font-size: 1.125rem;
  }
  .container-our-projects__btn-about-company {
    font-size: 0.875rem;
    width: 60px;
    height: 34px;
    margin-top: 1.25rem;
  }
  .container-our-projects__btn-our-team {
    font-size: 0.875rem;
    width: 124px;
    height: 34px;
    margin-left: 0.75rem;
  }
  .container-our-projects__btn-our-projects {
    font-size: 0.875rem;
    width: 125px;
    height: 34px;
    margin-left: 0.75rem;
  }
  .container-our-projects__btn-where-to-buy {
    font-size: 0.875rem;
    width: 99px;
    height: 34px;
    margin-left: 0.25rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-our-projects__grid-projects {
    grid-template-columns: repeat(2, 48.4%);
    grid-template-rows: repeat(2, 306px);
    grid-row-gap: 5.9rem;
    grid-column-gap: 1.875rem;
  }
  .container-our-projects__grid-projects-img-1 {
    grid-area: 1/1;
    height: 306px;
  }
  .container-our-projects__grid-projects-img-2 {
    grid-area: 1/2;
    height: 306px;
  }
  .container-our-projects__grid-projects-img-3 {
    grid-area: 2/1;
    height: 306px;
  }
  .container-our-projects__grid-projects-img-4 {
    grid-area: 2/2;
    height: 306px;
  }
  .container-our-projects__grid-projects-info-1 {
    grid-area: 1/1;
    margin-top: 20rem;
  }
  .container-our-projects__grid-projects-info-2 {
    grid-area: 1/2;
    margin-top: 20rem;
  }
  .container-our-projects__grid-projects-info-3 {
    grid-area: 2/1;
    margin-top: 20rem;
  }
  .container-our-projects__grid-projects-info-4 {
    grid-area: 2/2;
    margin-top: 20rem;
  }
  .container-our-projects__grid-projects-title {
    font-size: 1.25rem;
  }
  .container-our-projects__grid-projects-text {
    font-size: 1rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-our-projects {
    padding: 3.75rem 10.313rem 0rem 10.313rem;
  }
  .container-our-projects__title {
    font-size: 2.375rem;
    margin-bottom: 2.8rem;
    margin-top: 1.25rem;
  }
  .container-our-projects__grid-projects-border,
  .container-our-projects__btn-about-company,
  .container-our-projects__btn-our-team,
  .container-our-projects__btn-our-projects,
  .container-our-projects__btn-where-to-buy {
    display: none;
  }
  .container-our-projects__border-from1440px {
    display: block;
    position: absolute;
    width: 100%;
    border: 1px solid rgba(133, 143, 164, 0.15);
    margin-top: 12.8rem;
  }
  .container-our-projects__link-about-us-from1440px,
  .container-our-projects__link-our-team-from1440px,
  .container-our-projects__link-our-projects-from1440px,
  .container-our-projects__link-where-to-buy-from1440px {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 150%;
    color: $dark-blue-col;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    margin-right: 89%;
    cursor: pointer;
  }
  .container-our-projects__link-about-us-from1440px {
    margin-top: 5.3rem;
  }
  .container-our-projects__link-our-projects-from1440px {
    color: $red-col;
  }
  .container-our-projects__link-our-team-from1440px:hover,
  .container-our-projects__link-about-us-from1440px:hover,
  .container-our-projects__link-where-to-buy-from1440px:hover {
    color: $red-col;
  }
  .container-our-projects__border-link-about-us-from1440px,
  .container-our-projects__border-link-our-team-from1440px,
  .container-our-projects__border-link-our-projects-from1440px {
    display: block;
    width: 192px;
    border: 1px solid rgba(133, 143, 164, 0.15);
  }
  .container-our-projects__border-huge-links {
    display: block;
    position: absolute;
    width: 1px;
    height: 1110px;
    border: 1px solid rgba(133, 143, 164, 0.15);
    margin-left: 12rem;
    margin-top: -16.3rem;
  }
  .container-our-projects__grid-projects {
    grid-template-columns: repeat(2, 48.15%);
    grid-template-rows: repeat(2, 320px);
    grid-column-gap: 1.875rem;
    margin-left: 15.75rem;
    margin-top: -14.7rem;
    margin-bottom: 12.5rem;
  }
  .container-our-projects__grid-projects-img-1,
  .container-our-projects__grid-projects-img-2,
  .container-our-projects__grid-projects-img-3,
  .container-our-projects__grid-projects-img-4 {
    height: 320px;
  }
  .container-our-projects__br1440px-grid-projects-title {
    display: block;
  }
  .container-our-projects__grid-projects-info-1,
  .container-our-projects__grid-projects-info-2,
  .container-our-projects__grid-projects-info-3,
  .container-our-projects__grid-projects-info-4 {
    margin-top: 20.9rem;
  }
  .container-our-projects__grid-projects-title {
    font-size: 1.125rem;
  }
  .container-our-projects__grid-projects-text {
    font-size: 1rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-our-projects {
    padding: 3.75rem 15.938rem 0rem 15.938rem;
  }
  .container-our-projects__border-huge-links {
    height: 1230px;
  }
  .container-our-projects__grid-projects {
    grid-template-columns: repeat(2, 48.65%);
    margin-bottom: 15.3rem;
  }
  .container-our-projects__grid-projects-title {
    font-size: 1.25rem;
  }
  .container-our-projects__grid-projects-text {
    font-size: 1.125rem;
  }
}
</style>
