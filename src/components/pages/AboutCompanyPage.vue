<template>
  <div class="container-about-company__border-from1440px"></div>
  <div class="container-about-company">
    <img
      src="imgs_main_page/img-home-icon.svg"
      alt=""
      class="container-about-company__img-home-icon"
    />
    <p class="container-about-company__text-home-icon">О компании</p>
    <h1 class="container-about-company__title">О компании</h1>
    <div class="container-about-company__border"></div>
    <a
      ><button class="container-about-company__btn-about-company">
        О нас
      </button></a
    ><a @click="goToOurTeamPage"
      ><button class="container-about-company__btn-our-team">
        Наша команда
      </button></a
    ><a @click="goToOurProjectsPage"
      ><button class="container-about-company__btn-our-projects">
        Наши проекты
      </button></a
    ><a @click="goToWhereToBuyPage"
      ><button class="container-about-company__btn-where-to-buy">
        Где купить
      </button></a
    >
    <div class="container-about-company__advertise">
      <p class="container-about-company__advertise-text">
        <span class="container-about-company__span-advertise-text"
          >Well Fitness</span
        ><br class="container-about-company__br-span-advertise-text" />
        — надежный партнер<br
          class="container-about-company__br-span-advertise-text"
        />
        с 2005 года для сотен<br
          class="container-about-company__br-span-advertise-text"
        />
        компаний<br class="container-about-company__br-span-advertise-text" />
        от Калининграда<br
          class="container-about-company__br-span-advertise-text"
        />
        до Владивостока.
      </p>
      <img
        src="imgs_main_page/container-about-company__advertise-img-from320px.svg"
        alt=""
        class="container-about-company__advertise-img-from320px"
      />
      <img
        src="imgs_main_page/container-about-company__advertise-img-from1024px.svg"
        alt=""
        class="container-about-company__advertise-img-from1024px"
      />
      <img
        src="imgs_main_page/container-about-company__advertise-img-from1920px.svg"
        alt=""
        class="container-about-company__advertise-img-from1920px"
      />
    </div>
    <a class="container-about-company__link-about-us-from1440px">О нас</a>
    <div class="container-about-company__border-link-about-us-from1440px"></div>
    <a
      @click="goToOurTeamPage"
      class="container-about-company__link-our-team-from1440px"
      >Наша команда</a
    >
    <div class="container-about-company__border-link-our-team-from1440px"></div>
    <a
      @click="goToOurProjectsPage"
      class="container-about-company__link-our-projects-from1440px"
      >Наши проекты</a
    >
    <div
      class="container-about-company__border-link-our-projects-from1440px"
    ></div>
    <a
      @click="goToWhereToBuyPage"
      class="container-about-company__link-where-to-buy-from1440px"
      >Где купить</a
    >
    <div
      class="container-about-company__border-link-where-to-buy-from1440px"
    ></div>
    <div class="container-about-company__border-huge-links"></div>
    <p class="container-about-company__info-text">
      За годы успешного развития нам удалось консолидировать в своем
      ассортименте продукцию лучших мировых брендов, собрать команду
      профессионалов, завоевать доверие десятков тысяч лояльных покупателей и
      стать настоящим лидером рынка.
    </p>
    <div class="container-about-company__grid-info-border-1"></div>
    <div class="container-about-company__grid-info-border-2"></div>
    <div class="container-about-company__grid-info-border-3"></div>
    <div class="container-about-company__grid-info-border-4"></div>
    <div class="container-about-company__grid-info-border-5"></div>
    <div class="container-about-company__grid-info">
      <p class="container-about-company__grid-info-title-1">2005</p>
      <p class="container-about-company__grid-info-subtext-1">
        год появления на рынке
      </p>
      <p class="container-about-company__grid-info-title-2">10 000+</p>
      <p class="container-about-company__grid-info-subtext-2">
        складских помещений
      </p>
      <p class="container-about-company__grid-info-title-3">20+</p>
      <p class="container-about-company__grid-info-subtext-3">
        ведущих мировых брендов
      </p>
      <p class="container-about-company__grid-info-title-4">3000+</p>
      <p class="container-about-company__grid-info-subtext-4">SKU</p>
      <p class="container-about-company__grid-info-title-5">60+</p>
      <p class="container-about-company__grid-info-subtext-5">
        квалифицированных сотрудников
      </p>
    </div>
    <p class="container-about-company__we-are-today-title">Мы сегодня – это:</p>
    <p class="container-about-company__we-are-today-text">
      • слаженная команда людей, любящих спорт и здоровый образ жизни знающих
      свое дело и ориентирующихся во всех нюансах фитнес оборудования;<br
        class="container-about-company__br-we-are-today-text"
      />
      • широкая номенклатура качественной продукции ведущих мировых брендов с
      огромным выбором товаров в наличии;<br
        class="container-about-company__br-we-are-today-text"
      />
      • склад запчастей для обеспечения качественного сервиса и бесперебойной
      работы оборудования;<br
        class="container-about-company__br-we-are-today-text"
      />
      • полный послепродажный сервис с информационной и технической
      поддержкой;<br class="container-about-company__br-we-are-today-text" />
      • строгое соблюдение всех обязательств перед партнерами;<br
        class="container-about-company__br-we-are-today-text"
      />
      • отличные цены и эксклюзивные условия для постоянных партнеров.
    </p>
    <div class="container-about-company__grid-imgs">
      <div class="container-about-company__grid-rect-1"></div>
      <div class="container-about-company__grid-rect-2"></div>
      <div class="container-about-company__grid-rect-3"></div>
      <div class="container-about-company__grid-rect-4"></div>
    </div>
    <div class="container-about-company__topic-border"></div>
    <p class="container-about-company__topic-title">
      В чем причина нашего успеха?
    </p>
    <div class="container-about-company__topic-text-1">
      Во-первых, мы особенно дорожим своей безупречной репутацией и регулярно
      повышаем планку качества сервиса. Зная, насколько хрупким может оказаться
      доверие покупателя, специалисты Well Fitness всегда ориентируются на
      интересы клиентов.<br class="container-about-company__br-topic-text-1" />
      Во-вторых, мы поставляем только самую качественную и надежную продукцию.
      Перед выводом на российский рынок, мы тщательно тестируем каждую модель,
      поэтому все предлагаемое оборудование высоко ценится покупателями и имеет
      минимум сервисных проблем.<br
        class="container-about-company__br-topic-text-1"
      /><br class="container-about-company__br-topic-text-1" />
      На сегодняшний день в каталоге Well Fitness представлены лучшие мировые
      бренды спортивного оборудования, среди которых Sole Fitness, Nautilus
      Fitness, Bowflex, CardioPower, PROSKI Simulator, Eclipse и др. Продукция
      этих марок отличается безупречным балансом качества и функциональности,
      возглавляет ведущие мировых рейтингах и пользуется доверием покупателей по
      всему миру. Если вы ищете надежного поставщика спортивного оборудования -
      мы будем рады видеть вас в числе наших партнеров и готовы предложить
      лучшие условия для выгодного дилерского сотрудничества!
    </div>
    <div class="container-about-company__grid-topic">
      <div class="container-about-company__topic-rect-1"></div>
      <p class="container-about-company__topic-text-2">
        Значимость этих проблем настолько очевидна, что рамки и место обучения
        кадров требуют от нас анализа существенных финансовых и административных
        условий. С другой стороны начало повседневной работы по формированию
        позиции влечет за собой процесс внедрения и модернизации направлений
        прогрессивного развития.
      </p>
      <p class="container-about-company__topic-text-3">
        Значимость этих проблем настолько очевидна, что рамки и место обучения
        кадров требуют от нас анализа существенных финансовых и административных
        условий. С другой стороны начало повседневной работы по формированию
        позиции влечет за собой процесс внедрения и модернизации направлений
        прогрессивного развития.
      </p>
      <div class="container-about-company__topic-rect-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCompanyPage",
  mounted() {
    /* change styles on hover at .container-about-company__btn-our-team, .container-about-company__btn-our-projects, .container-about-company__btn-where-to-buy starts */
    const btn_our_team = document.querySelector(
        ".container-about-company__btn-our-team"
      ),
      btn_our_projects = document.querySelector(
        ".container-about-company__btn-our-projects"
      ),
      btn_where_to_buy = document.querySelector(
        ".container-about-company__btn-where-to-buy"
      );
    btn_our_team.onmouseover = function () {
      btn_our_team.style.background = "#f53b49";
      btn_our_team.style.color = "#fff";
    };
    btn_our_team.onmouseout = function () {
      btn_our_team.style.background = "#fff";
      btn_our_team.style.color = "#000";
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
    /* change styles on hover at .container-about-company__btn-our-team, .container-about-company__btn-our-projects, .container-about-company__btn-where-to-buy ends */
  },
  methods: {
    goToOurTeamPage() {
      this.$router.push("/OurTeamPage");
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
.container-about-company__advertise-img-from1024px,
.container-about-company__border-from1440px,
.container-about-company__link-about-us-from1440px,
.container-about-company__link-our-team-from1440px,
.container-about-company__link-our-projects-from1440px,
.container-about-company__link-where-to-buy-from1440px,
.container-about-company__border-link-about-us-from1440px,
.container-about-company__border-link-our-team-from1440px,
.container-about-company__border-link-our-projects-from1440px,
.container-about-company__border-link-where-to-buy-from1440px,
.container-about-company__border-huge-links,
.container-about-company__advertise-img-from1920px {
  display: none;
}
.container-about-company {
  padding: 0.625rem 0.625rem 0rem 0.625rem;
}
.container-about-company__img-home-icon {
  /* margin-top: 2.4rem; */
  cursor: pointer;
}
.container-about-company__text-home-icon {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  margin-top: -1.1rem;
  margin-left: 1.7rem;
  cursor: pointer;
}
.container-about-company__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 110%;
  margin: 0rem;
}
.container-about-company__border {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
  margin-top: 1rem;
}
.container-about-company__btn-about-company {
  position: relative;
  width: 54px;
  height: 32px;
  background: $red-col;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 8px 10px 9px 10px;
  color: $white-col;
  border: none;
  border-radius: 4px;
  margin-top: 1.25rem;
  cursor: pointer;
}
.container-about-company__btn-our-team {
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
.container-about-company__btn-our-projects {
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
.container-about-company__btn-where-to-buy {
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
.container-about-company__advertise {
  position: relative;
  width: 100%;
  height: 500px;
  background: $dark-col;
  border-radius: 6px;
  top: 1.75rem;
}
.container-about-company__advertise-text {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  margin: 2.625rem 1.875rem 0rem 1.875rem;
  font-weight: 400;
  line-height: 130%;
  color: $white-col;
}
.container-about-company__span-advertise-text {
  color: $red-col;
}
.container-about-company__advertise-img-from320px {
  display: block;
  position: absolute;
  width: 100%;
  margin-top: 16rem;
  border-radius: 0px 0px 6px 6px;
}
.container-about-company__advertise-img-from768px {
  display: none;
}
.container-about-company__advertise-img-from1920px {
  display: none;
}
.container-about-company__info-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-blue-col;
  margin-top: 10rem;
}
.container-about-company__grid-info {
  display: grid;
  grid-template-columns: repeat(2, 145px);
  grid-template-rows: repeat(3, 91px);
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.875rem;
  margin-top: 1rem;
}
.container-about-company__grid-info-title-1,
.container-about-company__grid-info-title-2,
.container-about-company__grid-info-title-3,
.container-about-company__grid-info-title-4,
.container-about-company__grid-info-title-5 {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 110%;
  color: $dark-blue-col;
  margin-top: 0.875rem;
}
.container-about-company__grid-info-title-1 {
  grid-area: 1 / 1;
}
.container-about-company__grid-info-title-2 {
  grid-area: 1 / 2;
}
.container-about-company__grid-info-title-3 {
  grid-area: 2 / 1;
}
.container-about-company__grid-info-title-4 {
  grid-area: 2 / 2;
}
.container-about-company__grid-info-title-5 {
  grid-area: 3 / 1;
}
.container-about-company__grid-info-border-1 {
  position: relative;
  width: 80px;
  border: 1px solid $red-col;
  top: 5.04rem;
  margin-left: 0rem;
}
.container-about-company__grid-info-border-2 {
  position: relative;
  width: 80px;
  border: 1px solid $red-col;
  top: 4.95rem;
  margin-left: 10.4rem;
}
.container-about-company__grid-info-border-3 {
  position: relative;
  width: 80px;
  border: 1px solid $red-col;
  top: 12.5rem;
}
.container-about-company__grid-info-border-4 {
  position: relative;
  width: 80px;
  border: 1px solid $red-col;
  top: 12.35rem;
  margin-left: 10.4rem;
}
.container-about-company__grid-info-border-5 {
  position: relative;
  width: 80px;
  border: 1px solid $red-col;
  top: 19.945rem;
}
.container-about-company__grid-info-subtext-1,
.container-about-company__grid-info-subtext-2,
.container-about-company__grid-info-subtext-3,
.container-about-company__grid-info-subtext-4,
.container-about-company__grid-info-subtext-5 {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-blue-col;
  top: 3rem;
}
.container-about-company__grid-info-subtext-1 {
  grid-area: 1 / 1;
}
.container-about-company__grid-info-subtext-2 {
  grid-area: 1 / 2;
}
.container-about-company__grid-info-subtext-3 {
  grid-area: 2 / 1;
}
.container-about-company__grid-info-subtext-4 {
  grid-area: 2 / 2;
}
.container-about-company__grid-info-subtext-5 {
  grid-area: 3 / 1;
}
.container-about-company__we-are-today-title {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  line-height: 110%;
  color: $dark-blue-col;
  margin-top: 5rem;
}
.container-about-company__we-are-today-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-blue-col;
}
.container-about-company__grid-imgs {
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(4, 240px);
  grid-gap: 1.25rem;
  margin-top: 1.75rem;
}
.container-about-company__grid-rect-1 {
  grid-area: 1 / 1;
  background: $gray-col;
  border-radius: 6px;
}
.container-about-company__grid-rect-2 {
  grid-area: 2 / 1;
  background: $gray-col;
  border-radius: 6px;
}
.container-about-company__grid-rect-3 {
  grid-area: 3 / 1;
  background: $gray-col;
  border-radius: 6px;
}
.container-about-company__grid-rect-4 {
  grid-area: 4 / 1;
  background: $gray-col;
  border-radius: 6px;
}
.container-about-company__topic-border {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
}
.container-about-company__topic-title {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  line-height: 110%;
  color: $dark-blue-col;
  margin-top: 3.3rem;
}
.container-about-company__topic-text-1 {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-blue-col;
}
.container-about-company__grid-topic {
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(4, 220px);
  grid-gap: 1.25rem;
  margin-top: 1.875rem;
}
.container-about-company__topic-rect-1 {
  position: relative;
  grid-area: 1/1;
  background: $gray-col;
  border-radius: 6px;
  margin-top: 0rem;
  height: 240px;
}
.container-about-company__topic-text-2 {
  position: relative;
  grid-area: 2/1;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-blue-col;
  margin-top: 1.25rem;
}
.container-about-company__topic-text-3 {
  position: relative;
  grid-area: 3/1;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-blue-col;
  margin-top: -1.9rem;
}
.container-about-company__topic-rect-2 {
  position: relative;
  grid-area: 4/1;
  background: $gray-col;
  border-radius: 6px;
  height: 240px;
  margin-top: -4.6rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-about-company {
    padding: 2.5rem 2.5rem 3.75rem 2.5rem;
  }
  .container-about-company__title {
    font-size: 1.875rem;
    margin-top: 0rem;
  }
  .container-about-company__border {
    width: 100%;
  }
  .container-about-company__btn-about-company {
    font-size: 0.875rem;
    width: 60px;
    height: 34px;
    margin-top: 1.25rem;
  }
  .container-about-company__btn-our-team {
    font-size: 0.875rem;
    width: 124px;
    height: 34px;
    margin-left: 0.75rem;
  }
  .container-about-company__btn-our-projects {
    font-size: 0.875rem;
    width: 125px;
    height: 34px;
    margin-left: 0.75rem;
  }
  .container-about-company__btn-where-to-buy {
    font-size: 0.875rem;
    width: 99px;
    height: 34px;
    margin-left: 0.25rem;
  }
  .container-about-company__advertise {
    height: 279px;
    border-radius: 8px 8px 8px 8px;
    top: 1.3rem;
  }
  .container-about-company__advertise-text {
    font-size: 1.5rem;
    margin: 2.625rem 0rem 0rem 2.5rem;
  }
  .container-about-company__advertise-img-from320px {
    position: absolute;
    width: 345px;
    height: 279px;
    right: 0rem;
    margin-top: 0rem;
    border-radius: 0px 8px 8px 0px;
  }
  .container-about-company__info-text {
    font-size: 1.125rem;
    margin-top: 3.3rem;
  }
  .container-about-company__grid-info {
    grid-template-columns: repeat(3, 210px);
    grid-template-rows: repeat(2, 113px);
    grid-gap: 1.875rem;
    margin-top: 1rem;
  }
  .container-about-company__grid-info-title-1,
  .container-about-company__grid-info-title-2,
  .container-about-company__grid-info-title-3,
  .container-about-company__grid-info-title-4,
  .container-about-company__grid-info-title-5 {
    font-size: 3rem;
  }
  .container-about-company__grid-info-title-1 {
    grid-area: 1 / 1;
  }
  .container-about-company__grid-info-title-2 {
    grid-area: 1 / 2;
  }
  .container-about-company__grid-info-title-3 {
    grid-area: 1 / 3;
  }
  .container-about-company__grid-info-title-4 {
    grid-area: 2 / 2;
  }
  .container-about-company__grid-info-title-5 {
    grid-area: 2 / 1;
  }
  .container-about-company__grid-info-border-1 {
    top: 6.9rem;
    border: 2px solid $red-col;
  }
  .container-about-company__grid-info-border-2 {
    top: 6.63rem;
    margin-left: 15.1rem;
    border: 2px solid $red-col;
  }
  .container-about-company__grid-info-border-3 {
    top: 6.41rem;
    margin-left: 30.1rem;
    border: 2px solid $red-col;
  }
  .container-about-company__grid-info-border-4 {
    top: 14.8rem;
    margin-left: 15.1rem;
    border: 2px solid $red-col;
  }
  .container-about-company__grid-info-border-5 {
    top: 15.1rem;
    margin-left: 0rem;
    border: 2px solid $red-col;
  }
  .container-about-company__grid-info-subtext-1,
  .container-about-company__grid-info-subtext-2,
  .container-about-company__grid-info-subtext-3,
  .container-about-company__grid-info-subtext-4,
  .container-about-company__grid-info-subtext-5 {
    font-size: 1rem;
    top: 4.65rem;
  }
  .container-about-company__grid-info-subtext-1 {
    grid-area: 1 / 1;
    padding-right: 2rem;
  }
  .container-about-company__grid-info-subtext-2 {
    grid-area: 1 / 2;
  }
  .container-about-company__grid-info-subtext-3 {
    grid-area: 1 / 3;
  }
  .container-about-company__grid-info-subtext-4 {
    grid-area: 2 / 2;
  }
  .container-about-company__grid-info-subtext-5 {
    grid-area: 2 / 1;
  }
  .container-about-company__we-are-today-title {
    font-size: 1.25rem;
    margin-top: 5rem;
  }
  .container-about-company__we-are-today-text {
    font-size: 1rem;
    line-height: 150%;
  }
  .container-about-company__grid-imgs {
    grid-template-columns: repeat(2, 47.8%);
    grid-template-rows: repeat(2, 320px);
    grid-row-gap: 1.25rem;
    grid-column-gap: 1.875rem;
    margin-top: 1.75rem;
  }
  .container-about-company__grid-rect-1 {
    grid-area: 1 / 1;
  }
  .container-about-company__grid-rect-2 {
    grid-area: 1 / 2;
  }
  .container-about-company__grid-rect-3 {
    grid-area: 2 / 1;
  }
  .container-about-company__grid-rect-4 {
    grid-area: 2 / 2;
  }
  .container-about-company__topic-title {
    font-size: 1.25rem;
  }
  .container-about-company__topic-text-1 {
    font-size: 1rem;
  }
  .container-about-company__grid-topic {
    grid-template-columns: repeat(2, 47.8%);
    grid-template-rows: repeat(2, 300px);
    grid-row-gap: 1.25rem;
    grid-column-gap: 1.875rem;
  }
  .container-about-company__topic-rect-1 {
    margin-top: 0rem;
    height: 300px;
  }
  .container-about-company__topic-text-2 {
    font-size: 1rem;
    grid-area: 1/2;
    margin-top: 2.3rem;
  }
  .container-about-company__topic-text-3 {
    font-size: 1rem;
    grid-area: 2/1;
    margin-top: 2.3rem;
  }
  .container-about-company__topic-rect-2 {
    height: 300px;
    grid-area: 2/2;
    margin-top: 0rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-about-company__advertise {
    height: 390px;
    top: 1.3rem;
  }
  .container-about-company__advertise-img-from320px {
    display: none;
  }
  .container-about-company__advertise-img-from1024px {
    display: block;
    position: absolute;
    height: 390px;
    right: 0rem;
    border-radius: 0px 8px 8px 0px;
  }
  .container-about-company__grid-info {
    margin-left: 7.7rem;
  }
  .container-about-company__grid-info-border-1 {
    margin-left: 7.9rem;
  }
  .container-about-company__grid-info-border-2 {
    margin-left: 23rem;
  }
  .container-about-company__grid-info-border-3 {
    margin-left: 38rem;
  }
  .container-about-company__grid-info-border-4 {
    margin-left: 23rem;
  }
  .container-about-company__grid-info-border-5 {
    margin-left: 7.9rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-about-company {
    padding: 3.75rem 10.313rem 7.5rem 10.313rem;
  }
  .container-about-company__title {
    font-size: 2.375rem;
    margin-top: 1.25rem;
  }
  .container-about-company__border {
    display: none;
  }
  .container-about-company__border-from1440px {
    display: block;
    position: absolute;
    width: 100%;
    border: 1px solid rgba(133, 143, 164, 0.15);
    margin-top: 11.7rem;
  }
  .container-about-company__link-about-us-from1440px,
  .container-about-company__link-our-team-from1440px,
  .container-about-company__link-our-projects-from1440px,
  .container-about-company__link-where-to-buy-from1440px {
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
  .container-about-company__link-about-us-from1440px {
    color: $red-col;
  }
  .container-about-company__link-about-us-from1440px:hover,
  .container-about-company__link-our-team-from1440px:hover,
  .container-about-company__link-our-projects-from1440px:hover,
  .container-about-company__link-where-to-buy-from1440px:hover {
    color: $red-col;
  }
  .container-about-company__link-about-us-from1440px {
    margin-top: 5.375rem;
  }
  .container-about-company__border-link-about-us-from1440px,
  .container-about-company__border-link-our-team-from1440px,
  .container-about-company__border-link-our-projects-from1440px,
  .container-about-company__border-link-where-to-buy-from1440px {
    display: block;
    width: 192px;
    border: 1px solid rgba(133, 143, 164, 0.15);
  }
  .container-about-company__border-huge-links {
    display: block;
    position: absolute;
    width: 1px;
    height: 2600px;
    border: 1px solid rgba(133, 143, 164, 0.15);
    margin-left: 12rem;
    margin-top: -16rem;
  }
  .container-about-company__btn-about-company,
  .container-about-company__btn-our-team,
  .container-about-company__btn-our-projects,
  .container-about-company__btn-where-to-buy {
    display: none;
  }
  .container-about-company__advertise {
    margin-top: 3.6rem;
  }
  .container-about-company__advertise-text {
    font-size: 1.875rem;
  }
  .container-about-company__advertise-img-from320px {
    width: 345px;
  }
  .container-about-company__info-text {
    margin-top: -16.3rem;
    margin-left: 15.75rem;
    margin-right: 4rem;
  }
  .container-about-company__grid-info {
    top: -20.5rem;
    margin-left: 15.75rem;
  }
  .container-about-company__grid-info-border-1 {
    top: 6.85rem;
    left: 7.9rem;
  }
  .container-about-company__grid-info-border-2 {
    top: 6.63rem;
    margin-left: 30.8rem;
  }
  .container-about-company__grid-info-border-3 {
    top: 6.41rem;
    margin-left: 45.9rem;
  }
  .container-about-company__grid-info-border-4 {
    top: 14.8rem;
    margin-left: 15.9rem;
  }
  .container-about-company__grid-info-border-5 {
    top: 14.55rem;
    margin-left: 30.8rem;
  }
  .container-about-company__we-are-today-title {
    margin-left: 15.75rem;
  }
  .container-about-company__we-are-today-text {
    font-size: 1rem;
    margin-left: 15.75rem;
  }
  .container-about-company__grid-imgs {
    grid-template-columns: repeat(2, 48.25%);
    grid-gap: 1.875rem;
    margin-left: 15.75rem;
  }
  .container-about-company__topic-border {
    width: 76.5%;
    margin-left: 15.75rem;
  }
  .container-about-company__topic-title,
  .container-about-company__topic-text-1 {
    margin-left: 15.75rem;
  }
  .container-about-company__grid-topic {
    grid-template-columns: repeat(2, 48.25%);
    grid-gap: 1.875rem;
    margin-left: 15.75rem;
  }
  .container-about-company__topic-text-2,
  .container-about-company__topic-text-3 {
    font-size: 1.125rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-about-company {
    padding: 3.75rem 15.938rem 7.5rem 15.938rem;
  }
  .container-about-company__title {
    font-size: 2.375rem;
    margin-top: 1.3rem;
  }
  .container-about-company__border-from1440px {
    top: 11.2rem;
  }
  .container-about-company__advertise {
    height: 500px;
    margin-top: 1.875rem;
  }
  .container-about-company__advertise-text {
    font-size: 2.125rem;
    margin: 3.75rem 0rem 0rem 3.75rem;
  }
  .container-about-company__advertise-img-from1024px {
    display: none;
  }
  .container-about-company__advertise-img-from1920px {
    display: block;
    position: absolute;
    height: 500px;
    right: 0rem;
    border-radius: 0px 8px 8px 0px;
  }
  .container-about-company__topic-border {
    width: 81.3%;
  }
  .container-about-company__topic-title,
  .container-about-company__topic-text-1 {
    margin-left: 15.75rem;
  }
  .container-about-company__grid-topic {
    grid-template-columns: repeat(2, 48.25%);
    grid-gap: 1.875rem;
    margin-left: 15.75rem;
  }
  .container-about-company__topic-text-2,
  .container-about-company__topic-text-3 {
    font-size: 1.125rem;
  }
}
</style>
