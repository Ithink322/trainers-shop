<template>
  <div class="container-our-team__border-from1440px"></div>
  <div class="container-our-team">
    <img
      src="imgs_main_page/img-home-icon.svg"
      alt=""
      class="container-our-team__img-home-icon"
    />
    <p class="container-our-team__text-home-icon">Наша команда</p>
    <h1 class="container-our-team__title">Наша команда</h1>
    <div class="container-our-team__border"></div>
    <a
      @click="goToAboutCompanyPage"
      class="container-our-team__link-about-us-from1440px"
      >О нас</a
    >
    <div class="container-our-team__border-link-about-us-from1440px"></div>
    <a class="container-our-team__link-our-team-from1440px">Наша команда</a>
    <div class="container-our-team__border-link-our-team-from1440px"></div>
    <a
      @click="goToOurProjectsPage"
      class="container-our-team__link-our-projects-from1440px"
      >Наши проекты</a
    >
    <div class="container-our-team__border-link-our-projects-from1440px"></div>
    <a
      @click="goToWhereToBuyPage"
      class="container-our-team__link-where-to-buy-from1440px"
      >Где купить</a
    >
    <div class="container-our-team__border-link-where-to-buy-from1440px"></div>
    <div class="container-our-team__border-huge-links"></div>
    <a @click="goToAboutCompanyPage"
      ><button class="container-our-team__btn-about-company">О нас</button></a
    ><a
      ><button class="container-our-team__btn-our-team">Наша команда</button></a
    ><a @click="goToOurProjectsPage"
      ><button class="container-our-team__btn-our-projects">
        Наши проекты
      </button></a
    ><a @click="goToWhereToBuyPage"
      ><button class="container-our-team__btn-where-to-buy">
        Где купить
      </button></a
    >
    <p class="container-our-team__we-are-today-title">Мы сегодня – это:</p>
    <p class="container-our-team__we-are-today-text">
      • слаженная команда людей, любящих спорт и здоровый образ жизни знающих
      свое дело и<br
        class="container-our-team__br-from1440px-we-are-today-text"
      />
      ориентирующихся во всех нюансах фитнес оборудования;<br
        class="container-our-team__br-we-are-today-text"
      />
      • широкая номенклатура качественной продукции ведущих мировых брендов с
      огромным<br class="container-our-team__br-from1440px-we-are-today-text" />
      выбором товаров в наличии;<br
        class="container-our-team__br-we-are-today-text"
      />
      • склад запчастей для обеспечения качественного сервиса и бесперебойной
      работы<br class="container-our-team__br-from1440px-we-are-today-text" />
      оборудования;<br class="container-our-team__br-we-are-today-text" />
      • полный послепродажный сервис с информационной и технической
      поддержкой;<br class="container-our-team__br-we-are-today-text" />
      • строгое соблюдение всех обязательств перед партнерами;<br
        class="container-our-team__br-we-are-today-text"
      />
      • отличные цены и эксклюзивные условия для постоянных партнеров.
    </p>
    <div class="container-our-team__grid-employee-border-1"></div>
    <div class="container-our-team__grid-employee-border-2"></div>
    <div class="container-our-team__grid-employee-border-3"></div>
    <div class="container-our-team__grid-employee">
      <div class="container-our-team__grid-employee-rect-1"></div>
      <div class="container-our-team__grid-employee-info-1">
        <span class="container-our-team__grid-employee-title"
          >Фамилия Имя Отчество</span
        ><br class="container-our-team__br-grid-employee-title" />
        <span class="container-our-team__grid-employee-subtitle">Должность</span
        ><br class="container-our-team__br-grid-employee-title" />
        <span class="container-our-team__grid-employee-text"
          >Повседневная практика показывает, что постоянное<br
            class="container-our-team__br-from1440px-grid-employee-text"
          />
          информационно-пропагандистское обеспечение нашей<br
            class="container-our-team__br-from1440px-grid-employee-text"
          />
          деятельности обеспечивает широкому кругу (специалистов)<br
            class="container-our-team__br-from1440px-grid-employee-text"
          />
          участие в формировании системы обучения кадров,<br
            class="container-our-team__br-from1440px-grid-employee-text"
          />
          соответствует насущным потребностям. </span
        ><br class="container-our-team__br-grid-employee-title" />
        <span class="container-our-team__grid-employee-number"
          >+7 900 000-00-00</span
        ><br class="container-our-team__br-grid-employee-title" />
        <a href="" class="container-our-team__grid-employee-website"
          >info@wellfitness.ru</a
        >
        <a href="" class="container-our-team__grid-employee-linkedin-icon"
          ><img
            class="container-our-team__grid-employee-linkedin-icon"
            src="imgs_main_page/linkedin-icon.svg"
            alt=""
        /></a>
        <a href="" class="container-our-team__grid-employee-linkedin-icon"
          ><img
            class="container-our-team__grid-employee-telegram-icon"
            src="imgs_main_page/telegram-icon.svg"
            alt=""
        /></a>
      </div>
      <div class="container-our-team__grid-employee-rect-2"></div>
      <div class="container-our-team__grid-employee-info-2">
        <span class="container-our-team__grid-employee-title"
          >Фамилия Имя Отчество</span
        ><br class="container-our-team__br-grid-employee-title" />
        <span class="container-our-team__grid-employee-subtitle">Должность</span
        ><br class="container-our-team__br-grid-employee-title" />
        <span class="container-our-team__grid-employee-text"
          >Повседневная практика показывает, что постоянное
          информационно-пропагандистское обеспечение нашей деятельности
          обеспечивает широкому кругу (специалистов) участие в формировании
          системы обучения кадров, соответствует насущным потребностям. </span
        ><br class="container-our-team__br-grid-employee-title" />
        <span class="container-our-team__grid-employee-number"
          >+7 900 000-00-00</span
        ><br class="container-our-team__br-grid-employee-title" />
        <a href="" class="container-our-team__grid-employee-website"
          >info@wellfitness.ru</a
        >
        <a href="" class="container-our-team__grid-employee-linkedin-icon"
          ><img
            class="container-our-team__grid-employee-linkedin-icon"
            src="imgs_main_page/linkedin-icon.svg"
            alt=""
        /></a>
        <a href="" class="container-our-team__grid-employee-linkedin-icon"
          ><img
            class="container-our-team__grid-employee-telegram-icon"
            src="imgs_main_page/telegram-icon.svg"
            alt=""
        /></a>
      </div>
      <div class="container-our-team__grid-employee-rect-3"></div>
      <div class="container-our-team__grid-employee-info-3">
        <span class="container-our-team__grid-employee-title"
          >Фамилия Имя Отчество</span
        ><br class="container-our-team__br-grid-employee-title" />
        <span class="container-our-team__grid-employee-subtitle">Должность</span
        ><br class="container-our-team__br-grid-employee-title" />
        <span class="container-our-team__grid-employee-text"
          >Повседневная практика показывает, что постоянное
          информационно-пропагандистское обеспечение нашей деятельности
          обеспечивает широкому кругу (специалистов) участие в формировании
          системы обучения кадров, соответствует насущным потребностям. </span
        ><br class="container-our-team__br-grid-employee-title" />
        <span class="container-our-team__grid-employee-number"
          >+7 900 000-00-00</span
        ><br class="container-our-team__br-grid-employee-title" />
        <a href="" class="container-our-team__grid-employee-website"
          >info@wellfitness.ru</a
        >
        <a href="" class="container-our-team__grid-employee-linkedin-icon"
          ><img
            class="container-our-team__grid-employee-linkedin-icon"
            src="imgs_main_page/linkedin-icon.svg"
            alt=""
        /></a>
        <a href="" class="container-our-team__grid-employee-linkedin-icon"
          ><img
            class="container-our-team__grid-employee-telegram-icon"
            src="imgs_main_page/telegram-icon.svg"
            alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurTeamPage",
  mounted() {
    /* change styles on hover at .container-our-team__btn-about-company, .container-our-team__btn-our-projects, .container-our-team__btn-where-to-buy starts */
    const btn_about_company = document.querySelector(
        ".container-our-team__btn-about-company"
      ),
      btn_our_projects = document.querySelector(
        ".container-our-team__btn-our-projects"
      ),
      btn_where_to_buy = document.querySelector(
        ".container-our-team__btn-where-to-buy"
      );
    btn_about_company.onmouseover = function () {
      btn_about_company.style.background = "#f53b49";
      btn_about_company.style.color = "#fff";
    };
    btn_about_company.onmouseout = function () {
      btn_about_company.style.background = "#fff";
      btn_about_company.style.color = "#000";
    };
    btn_our_projects.onmouseover = function () {
      btn_our_projects.style.background = "#f53b49";
      btn_our_projects.style.color = "#fff";
    };
    btn_our_projects.onmouseout = function () {
      btn_our_projects.style.background = "#fff";
      btn_our_projects.style.color = "#000";
    };
    btn_where_to_buy.onmouseover = function () {
      btn_where_to_buy.style.background = "#f53b49";
      btn_where_to_buy.style.color = "#fff";
    };
    btn_where_to_buy.onmouseout = function () {
      btn_where_to_buy.style.background = "#fff";
      btn_where_to_buy.style.color = "#000";
    };
    /* change styles on hover at .container-our-team__btn-about-company, .container-our-team__btn-our-projects, .container-our-team__btn-where-to-buy ends */
  },
  methods: {
    goToAboutCompanyPage() {
      this.$router.push("/AboutCompanyPage");
      window.scrollTo(0, 0);
    },
    goToOurProjectsPage() {
      this.$router.push("/OurProjectsPage");
      window.scrollTo(0, 0);
    },
    goToWhereToBuyPage() {
      this.$router.push("/WhereToBuyPage");
      window.scrollTo(0, 0);
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
.container-our-team__br-from1440px-we-are-today-text,
.container-our-team__br-from1440px-grid-employee-text,
.container-our-team__border-from1440px,
.container-our-team__link-about-us-from1440px,
.container-our-team__link-our-team-from1440px,
.container-our-team__link-our-projects-from1440px,
.container-our-team__link-where-to-buy-from1440px,
.container-our-team__border-link-about-us-from1440px,
.container-our-team__border-link-our-team-from1440px,
.container-our-team__border-link-our-projects-from1440px,
.container-our-team__border-link-where-to-buy-from1440px,
.container-our-team__border-huge-links {
  display: none;
}
.container-our-team {
  padding: 0.625rem 0.625rem 3.75rem 0.625rem;
}
.container-our-team__img-home-icon {
  cursor: pointer;
}
.container-our-team__text-home-icon {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  margin-top: -1.1rem;
  margin-left: 1.7rem;
  cursor: pointer;
}
.container-our-team__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 110%;
}
.container-our-team__border {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
  margin-top: -0.8rem;
}
.container-our-team__btn-about-company {
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
.container-our-team__btn-our-team {
  position: relative;
  width: 109px;
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
  cursor: pointer;
}
.container-our-team__btn-our-projects {
  position: relative;
  width: 110px;
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
  margin-right: 0.5rem;
  cursor: pointer;
}
.container-our-team__btn-where-to-buy {
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
.container-our-team__we-are-today-title {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  line-height: 110%;
  color: $dark-blue-col;
  margin-top: 3rem;
}
.container-our-team__we-are-today-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-blue-col;
}
.container-our-team__grid-employee-border-1 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.2);
  margin-top: 1.75rem;
}
.container-our-team__grid-employee-border-2 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.2);
  top: 39.2rem;
}
.container-our-team__grid-employee-border-3 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.2);
  top: 78.4rem;
}
.container-our-team__grid-employee {
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(6, 255px);
  grid-gap: 3.75rem;
  margin-top: 1.75rem;
}
.container-our-team__grid-employee-rect-1 {
  position: relative;
  grid-area: 1/1;
  background: #858fa4;
  border-radius: 6px;
}
.container-our-team__grid-employee-rect-2 {
  position: relative;
  grid-area: 3/1;
  background: #858fa4;
  border-radius: 6px;
}
.container-our-team__grid-employee-rect-3 {
  position: relative;
  grid-area: 5/1;
  background: #858fa4;
  border-radius: 6px;
}
.container-our-team__grid-employee-info-1 {
  position: relative;
  grid-area: 2/1;
  top: -1.2rem;
}
.container-our-team__grid-employee-info-2 {
  position: relative;
  grid-area: 4/1;
  top: -1.2rem;
}
.container-our-team__grid-employee-info-3 {
  position: relative;
  grid-area: 6/1;
  top: -1.2rem;
}
.container-our-team__grid-employee-title {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: $dark-blue-col;
  font-weight: 700;
  line-height: 150%;
}
.container-our-team__grid-employee-subtitle,
.container-our-team__grid-employee-text {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: $dark-blue-col;
  font-weight: 400;
  line-height: 150%;
  top: 0.4rem;
}
.container-our-team__grid-employee-text {
  top: 0.8rem;
}
.container-our-team__grid-employee-number {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: $dark-blue-col;
  font-weight: 700;
  line-height: 150%;
  top: 1.2rem;
}
.container-our-team__grid-employee-website {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: $dark-blue-col;
  font-weight: 500;
  line-height: 150%;
  top: 1.6rem;
}
.container-our-team__grid-employee-linkedin-icon {
  position: absolute;
  width: 32px;
  height: 32px;
  margin-left: 2rem;
  margin-top: 0.27rem;
}
.container-our-team__grid-employee-telegram-icon {
  position: absolute;
  width: 32px;
  height: 32px;
  margin-left: 4.4rem;
  margin-top: 0.27rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-our-team {
    padding: 2.5rem 2.5rem 3.75rem 2.5rem;
  }
  .container-our-team__title {
    font-size: 1.875rem;
    margin-top: 0rem;
  }
  .container-our-team__we-are-today-title {
    font-size: 1.25rem;
  }
  .container-our-team__we-are-today-text {
    font-size: 1rem;
  }
  .container-our-team__btn-about-company {
    font-size: 0.875rem;
    width: 60px;
    height: 34px;
    margin-top: 1.25rem;
  }
  .container-our-team__btn-our-team {
    font-size: 0.875rem;
    width: 124px;
    height: 34px;
    margin-left: 0.75rem;
  }
  .container-our-team__btn-our-projects {
    font-size: 0.875rem;
    width: 125px;
    height: 34px;
    margin-left: 0.75rem;
  }
  .container-our-team__btn-where-to-buy {
    font-size: 0.875rem;
    width: 99px;
    height: 34px;
    margin-left: 0.25rem;
  }
  .container-our-team__grid-employee-border-1 {
    margin-top: 1.75rem;
  }
  .container-our-team__grid-employee-border-2 {
    top: 24rem;
  }
  .container-our-team__grid-employee-border-3 {
    top: 48rem;
  }
  .container-our-team__grid-employee {
    grid-template-columns: repeat(1, 47.8%);
    grid-template-rows: repeat(3, 320px);
    grid-row-gap: 4.063rem;
    grid-column-gap: 1.875rem;
    margin-top: 1.75rem;
  }
  .container-our-team__grid-employee-rect-1 {
    grid-area: 1/1;
  }
  .container-our-team__grid-employee-rect-2 {
    grid-area: 2/1;
  }
  .container-our-team__grid-employee-rect-3 {
    grid-area: 3/1;
  }
  .container-our-team__grid-employee-info-1 {
    grid-area: 1/2;
    top: -1.2rem;
  }
  .container-our-team__grid-employee-info-2 {
    grid-area: 2/2;
    top: -1.2rem;
  }
  .container-our-team__grid-employee-info-3 {
    grid-area: 3/2;
    top: -1.2rem;
  }
  .container-our-team__grid-employee-title {
    font-size: 1.125rem;
  }
  .container-our-team__grid-employee-subtitle,
  .container-our-team__grid-employee-text,
  .container-our-team__grid-employee-number,
  .container-our-team__grid-employee-website {
    font-size: 1rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-our-team {
    padding: 3.75rem 10.313rem 7.5rem 10.313rem;
  }
  .container-our-team__title {
    font-size: 2.375rem;
    margin-top: 1.25rem;
  }
  .container-our-team__border,
  .container-our-team__btn-about-company,
  .container-our-team__btn-our-team,
  .container-our-team__btn-our-projects,
  .container-our-team__btn-where-to-buy {
    display: none;
  }
  .container-our-team__border-from1440px {
    display: block;
    position: absolute;
    width: 100%;
    border: 1px solid rgba(133, 143, 164, 0.15);
    margin-top: 12.8rem;
  }
  .container-our-team__border-link-where-to-buy-from1440px {
    display: block;
    width: 192px;
    border: 1px solid rgba(133, 143, 164, 0.15);
  }
  .container-our-team__link-about-us-from1440px,
  .container-our-team__link-our-team-from1440px,
  .container-our-team__link-our-projects-from1440px,
  .container-our-team__link-where-to-buy-from1440px {
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
  .container-our-team__link-our-team-from1440px {
    color: $red-col;
  }
  .container-our-team__link-about-us-from1440px:hover,
  .container-our-team__link-our-projects-from1440px:hover,
  .container-our-team__link-where-to-buy-from1440px:hover {
    color: $red-col;
  }
  .container-our-team__link-about-us-from1440px {
    margin-top: 5.28rem;
  }
  .container-our-team__border-link-about-us-from1440px,
  .container-our-team__border-link-our-team-from1440px,
  .container-our-team__border-link-our-projects-from1440px,
  .container-our-team__border-link-where-to-buy-from1440px {
    display: block;
    width: 192px;
    border: 1px solid rgba(133, 143, 164, 0.15);
  }
  .container-our-team__border-huge-links {
    display: block;
    position: absolute;
    width: 1px;
    height: 1800px;
    border: 1px solid rgba(133, 143, 164, 0.15);
    margin-left: 12rem;
    margin-top: -16.4rem;
  }
  .container-our-team__we-are-today-title {
    font-size: 1.25rem;
    margin-left: 15.75rem;
    margin-top: -15rem;
  }
  .container-our-team__br-from1440px-we-are-today-text,
  .container-our-team__br-from1440px-grid-employee-text {
    display: block;
  }
  .container-our-team__we-are-today-text {
    font-size: 1rem;
    margin-left: 15.75rem;
  }
  .container-our-team__border {
    margin-top: -1.4rem;
    margin-left: 15.75rem;
  }
  .container-our-team__grid-employee-border-1 {
    margin-top: 1.75rem;
    margin-left: 15.75rem;
  }
  .container-our-team__grid-employee-border-2 {
    top: 24rem;
    margin-left: 15.75rem;
  }
  .container-our-team__grid-employee-border-3 {
    top: 48rem;
    margin-left: 15.75rem;
  }
  .container-our-team__grid-employee {
    grid-template-columns: repeat(1, 47.8%);
    grid-template-rows: repeat(3, 320px);
    grid-row-gap: 4.063rem;
    grid-column-gap: 1.875rem;
    margin-top: 1.75rem;
    margin-left: 15.75rem;
  }
  .container-our-team__grid-employee-rect-1 {
    grid-area: 1/1;
  }
  .container-our-team__grid-employee-rect-2 {
    grid-area: 2/1;
  }
  .container-our-team__grid-employee-rect-3 {
    grid-area: 3/1;
  }
  .container-our-team__grid-employee-info-1 {
    grid-area: 1/2;
    top: -1.2rem;
  }
  .container-our-team__grid-employee-info-2 {
    grid-area: 2/2;
    top: -1.2rem;
  }
  .container-our-team__grid-employee-info-3 {
    grid-area: 3/2;
    top: -1.2rem;
  }
  .container-our-team__grid-employee-title {
    font-size: 1.125rem;
  }
  .container-our-team__grid-employee-subtitle,
  .container-our-team__grid-employee-text,
  .container-our-team__grid-employee-number,
  .container-our-team__grid-employee-website {
    font-size: 1rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-our-team {
    padding: 3.75rem 15.938rem 7.5rem 15.938rem;
  }
  .container-our-team__title {
    margin-top: 1.3rem;
  }
  .container-our-team__border-from1440px {
    margin-top: 12.8rem;
  }
  .container-our-team__link-about-us-from1440px,
  .container-our-team__link-our-team-from1440px,
  .container-our-team__link-our-projects-from1440px,
  .container-our-team__link-where-to-buy-from1440px {
    margin-right: 91%;
  }
  .container-our-team__link-about-us-from1440px {
    margin-top: 6.36rem;
  }
  .container-our-team__border-link-about-us-from1440px,
  .container-our-team__border-link-our-team-from1440px,
  .container-our-team__border-link-our-projects-from1440px,
  .container-our-team__border-link-where-to-buy-from1440px {
    width: 192px;
  }
  .container-our-team__border-huge-links {
    width: 1px;
    height: 1800px;
    margin-left: 12rem;
    margin-top: -17.52rem;
  }
  .container-our-team__we-are-today-title {
    margin-left: 15.75rem;
    margin-top: -15rem;
  }
  .container-our-team__we-are-today-text {
    font-size: 1.125rem;
    margin-left: 15.75rem;
  }
  .container-our-team__border {
    margin-top: -1.4rem;
    margin-left: 15.75rem;
  }
  .container-our-team__grid-employee-border-1 {
    margin-top: 1.75rem;
    margin-left: 15.75rem;
  }
  .container-our-team__grid-employee-border-2 {
    top: 24rem;
    margin-left: 15.75rem;
  }
  .container-our-team__grid-employee-border-3 {
    top: 48rem;
    margin-left: 15.75rem;
  }
  .container-our-team__grid-employee {
    grid-template-columns: repeat(1, 47.8%);
    grid-template-rows: repeat(3, 320px);
    grid-row-gap: 4.063rem;
    grid-column-gap: 1.875rem;
    margin-top: 1.75rem;
    margin-left: 15.75rem;
  }
  .container-our-team__grid-employee-rect-1 {
    grid-area: 1/1;
  }
  .container-our-team__grid-employee-rect-2 {
    grid-area: 2/1;
  }
  .container-our-team__grid-employee-rect-3 {
    grid-area: 3/1;
  }
  .container-our-team__grid-employee-info-1 {
    grid-area: 1/2;
    top: -1.2rem;
  }
  .container-our-team__grid-employee-info-2 {
    grid-area: 2/2;
    top: -1.2rem;
  }
  .container-our-team__grid-employee-info-3 {
    grid-area: 3/2;
    top: -1.2rem;
  }
  .container-our-team__grid-employee-title {
    font-size: 1.125rem;
  }
  .container-our-team__grid-employee-subtitle,
  .container-our-team__grid-employee-text,
  .container-our-team__grid-employee-number,
  .container-our-team__grid-employee-website {
    font-size: 1rem;
  }
}
</style>
