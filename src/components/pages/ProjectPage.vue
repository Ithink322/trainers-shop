<template>
  <div class="container-project">
    <a href=""
      ><img
        src="/imgs_main_page/img-home-icon.svg"
        alt=""
        class="container-project__btn-home-icon"
    /></a>
    <a href="" class="container-project__text-home-icon">{{
      $route.params.projectNum
    }}</a>
    <h1 class="container-project__title">{{ $route.params.title }}</h1>
    <div class="container-project__border"></div>
    <a
      @click="$router.push('/OurProjectsPage')"
      class="container-project__btn-back-to-the-previous-page"
      >Назад</a
    >
    <div class="container-project__rect-project">
      <img
        :src="`/imgs_main_page/${$route.params.logoSrc}`"
        alt=""
        class="container-project__rect-project-logo"
      />
      <p class="container-project__rect-project-text">
        {{ $route.params.title }} — это торговая марка серии тренажеров для
        фитнеса. Компания, базирующаяся в Ванкувере, штат Вашингтон, продает
        свою продукцию через прямые, розничные и международные каналы. Первый
        продукт {{ $route.params.title }}, {{ $route.params.title }} 2000X, был
        создан в 1986 году.
      </p>
      <a href="" class="container-project__rect-project-link">www.site.com</a>
      <img
        :src="`/imgs_main_page/${$route.params.heroSrc}`"
        class="container-project__rect-project-img"
      />
      <img
        :src="`/imgs_main_page/${$route.params.heroSrcFrom1024px}`"
        class="container-project__rect-project-img-from1024px"
      />
    </div>
    <div class="container-project__grid-topics-border-top-topic-2"></div>
    <div class="container-project__grid-topics-border-bottom-topic-2"></div>
    <div class="container-project__grid-topics">
      <topic-1 class="container-project__grid-topics-topic-1"
        >Значимость этих проблем настолько очевидна, что рамки и место обучения
        кадров требуют от нас анализа существенных финансовых и административных
        условий. С другой стороны начало повседневной работы по формированию
        позиции влечет за собой процесс внедрения и модернизации направлений
        прогрессивного развития. Равным образом постоянный количественный рост и
        сфера нашей активности в значительной степени обуславливает создание
        позиций, занимаемых участниками в отношении поставленных задач. С другой
        стороны укрепление и развитие структуры играет важную роль в
        формировании системы обучения кадров, соответствует насущным
        потребностям.
      </topic-1>
      <rect-topic-2
        class="container-project__grid-topics-rect-topic-2"
      ></rect-topic-2>
      <topic-2 class="container-project__grid-topics-topic-2"
        >Значимость этих проблем настолько очевидна, что рамки и место обучения
        кадров требуют от нас анализа существенных финансовых и административных
        условий. С другой стороны начало повседневной работы по формированию
        позиции влечет за собой процесс внедрения и модернизации направлений
        прогрессивного развития. Равным образом постоянный количественный рост и
        сфера нашей активности в значительной степени обуславливает создание
        позиций, занимаемых участниками в отношении поставленных задач. С другой
        стороны укрепление и развитие структуры играет важную роль в
        формировании системы обучения кадров, соответствует насущным
        потребностям.
      </topic-2>
      <topic-3 class="container-project__grid-topics-topic-3"
        >Значимость этих проблем настолько очевидна, что рамки и место обучения
        кадров требуют от нас анализа существенных финансовых и административных
        условий. С другой стороны начало повседневной работы по формированию
        позиции влечет за собой процесс внедрения и модернизации направлений
        прогрессивного развития. Равным образом постоянный количественный рост и
        сфера нашей активности в значительной степени обуславливает создание
        позиций, занимаемых участниками в отношении поставленных задач. С другой
        стороны укрепление и развитие структуры играет важную роль в
        формировании системы обучения кадров, соответствует насущным
        потребностям.
      </topic-3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
};
</script>

<style lang="scss">
$white-col: #ffffff;
$dark-col: #1a1a25;
$red-col: #f53b49;
$gray-col: #858fa4;
$dark-blue-col: #384255;
$blue: #4b7ee8;
.container-project__rect-project-img-from1024px {
  display: none;
}
.container-project {
  padding: 0.625rem 0.625rem 3.75rem 0.625rem;
}
.container-project__text-home-icon {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 140%;
  color: rgba(56, 66, 85, 0.6);
  margin-left: 0.45rem;
}
.container-project__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 110%;
}
.container-project__border {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
}
.container-project__btn-back-to-the-previous-page {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: $blue;
  cursor: pointer;
  top: 1.5rem;
}
.container-project__rect-project {
  position: relative;
  width: 100%;
  height: 670px;
  background: $white-col;
  border-radius: 6px;
  top: 2.8rem;
  padding: 2rem 1.375rem 0rem 1.375rem;
}
.container-project__rect-project-logo {
  width: 184px;
  height: 80px;
}
.container-project__rect-project-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;
  color: $dark-col;
  margin-top: -0.4rem;
}
.container-project__rect-project-link {
  color: $blue;
}
.container-project__rect-project-img {
  position: absolute;
  width: 100%;
  height: 269px;
  object-fit: cover;
  bottom: 0rem;
  left: 0rem;
  border-radius: 0px 0px 6px 6px;
}
.container-project__grid-topics {
  display: grid;
  grid-template-areas:
    "topic-1"
    "rect-topic-2"
    "topic-2"
    "topic-3";
  grid-template-rows: 370px 220px 370px 370px;
  grid-template-columns: 100%;
  grid-row-gap: 3.813rem;
  margin-top: -69.7rem;
}
.container-project__grid-topics-topic-1 {
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-col;
  grid-area: 1/1;
  margin-top: 0rem;
}
.container-project__grid-topics-border-top-topic-2 {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.5);
  margin-top: 29.4rem;
}
.container-project__grid-topics-rect-topic-2 {
  position: relative;
  grid-area: 2/1;
  width: 100%;
  background: $dark-blue-col;
  border-radius: 6px;
}
.container-project__grid-topics-topic-2 {
  position: relative;
  grid-area: 3/1;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-col;
  margin-top: 0rem;
}
.container-project__grid-topics-border-bottom-topic-2 {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.5);
  margin-top: 44.4rem;
}
.container-project__grid-topics-topic-3 {
  position: relative;
  grid-area: 4/1;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $dark-col;
  margin-top: 0rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-project {
    padding: 2.5rem 2.5rem 3.75rem 2.5rem;
  }
  .container-project__title {
    font-size: 1.875rem;
    margin-top: 1.35rem;
  }
  .container-project__rect-project {
    height: 590px;
    border-radius: 8px;
  }
  .container-project__rect-project-img {
    height: 320px;
    border-radius: 0px 0px 8px 8px;
  }
  .container-project__grid-topics {
    width: 100%;
    grid-template-areas:
      "topic-1 topic-1"
      "rect-topic-2 topic-2"
      "topic-3 topic-3";
    grid-template-rows: 160px 320px 160px;
    grid-template-columns: 47.4% 49.4%;
    grid-row-gap: 3.813rem;
    grid-column-gap: 1.25rem;
    margin-top: -35.75rem;
  }
  .container-project__grid-topics > topic-1 {
    font-size: 0.875rem;
    grid-area: topic-1;
    margin-top: 0rem;
  }
  .container-project__grid-topics-border-top-topic-2 {
    margin-top: 16.2rem;
  }
  .container-project__grid-topics > rect-topic-2 {
    grid-area: rect-topic-2;
    border-radius: 8px;
  }
  .container-project__grid-topics > topic-2 {
    grid-area: topic-2;
    font-size: 0.875rem;
    margin-top: 0rem;
  }
  .container-project__grid-topics-border-bottom-topic-2 {
    margin-top: 23.8rem;
  }
  .container-project__grid-topics > topic-3 {
    grid-area: topic-3;
    font-size: 0.875rem;
    margin-top: 0rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-project__rect-project {
    height: 360px;
    border-radius: 8px;
  }
  .container-project__rect-project-text {
    font-size: 1.125rem;
    padding-right: 55%;
  }
  .container-project__rect-project-img {
    display: none;
  }
  .container-project__rect-project-img-from1024px {
    position: absolute;
    display: block;
    width: 50.8%;
    height: 360px;
    border-radius: 0px 8px 8px 0px;
    object-fit: none;
    top: 0rem;
    right: 0rem;
  }
  .container-project__grid-topics > topic-1,
  .container-project__grid-topics > topic-2,
  .container-project__grid-topics > topic-3 {
    font-size: 1rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-project {
    padding: 3.75rem 10.313rem 7.5rem 10.313rem;
  }
  .container-project__rect-project {
    padding: 3rem 4rem 0rem 3rem;
  }
  .container-project__rect-project-img-from1024px {
    width: 600px;
  }
  .container-project__grid-topics > topic-1,
  .container-project__grid-topics > topic-2,
  .container-project__grid-topics > topic-3 {
    font-size: 1.125rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-project {
    padding: 3.75rem 15.938rem 7.5rem 15.938rem;
  }
  .container-project__rect-project-text {
    padding-right: 60%;
  }
  .container-project__rect-project-img-from1024px {
    width: 691px;
  }
}
</style>
