<template>
  <div class="container-comparison">
    <div class="container-comparison__home-icon-and-home-title-flex">
      <img
        src="imgs_main_page/img-home-icon.svg"
        alt=""
        class="container-comparison__home-icon"
      />
      <span class="container-comparison__home-title">Сравнение</span>
    </div>
    <h1 class="container-comparison__title">Сравнение</h1>
    <div class="container-comparison__title-border"></div>
    <button
      v-if="comparisons.length > 0"
      class="container-comparison__arrow-next-btn"
    >
      <img
        src="imgs_main_page/arrow_red.png"
        alt=""
        class="container-comparison__arrow-next-btn-icon"
      />
    </button>
    <div
      class="container-comparison__container-items-flex"
      v-if="comparisons.length > 0"
    >
      <div class="container-comparison__container-btns-flex">
        <button
          class="container-comparison__container-btn container-comparison__container-treadmill-btn"
        >
          Беговые дорожки
        </button>
        <button
          class="container-comparison__container-btn container-comparison__container-ellipses-btn"
        >
          Эллиптические
        </button>
        <button
          class="container-comparison__container-btn container-comparison__container-bicycles-btn"
        >
          Велотренажеры
        </button>
      </div>
      <comparison-list
        :comparisons="comparisons"
        @remove-comparison="removeFromComparisons"
        ref="comparisonList"
      ></comparison-list>
      <div class="container-comparison__subtitles-flex">
        <span
          class="container-comparison__subtitle container-comparison__subtitle-treadmillType"
          >Тип дорожки:</span
        >
        <span
          class="container-comparison__subtitle container-comparison__subtitle-runnigTrack"
          >Беговое полотно (ДхШ):</span
        >
        <span
          class="container-comparison__subtitle container-comparison__subtitle-enginePower"
          >Мощность двигателя:</span
        >
        <span
          class="container-comparison__subtitle container-comparison__subtitle-manufacturer"
          >Производитель:</span
        >
        <span
          class="container-comparison__subtitle container-comparison__subtitle-engineType"
          >Тип двигателя:</span
        >
        <span
          class="container-comparison__subtitle container-comparison__subtitle-speedAdjustment"
          >Регулировка скорости:</span
        >
      </div>
    </div>
    <span
      class="container-comparison__text-empty"
      v-if="comparisons.length === 0"
      >Пока что вы ничего не добавили в меню сравнений.</span
    >
  </div>
</template>

<script>
import ComparisonList from "../UI/ComparisonList.vue";
import ComparisonItem from "../UI/ComparisonItem.vue";
export default {
  name: "ComparisonPage",
  components: { ComparisonList, ComparisonItem },
  data() {
    return {
      comparisons: [],
    };
  },
  mounted() {
    this.getComparisons();
    document.addEventListener("DOMContentLoaded", function () {
      const ellipsesBtn = document.querySelector(
          ".container-comparison__container-ellipses-btn"
        ),
        bicyclesBtn = document.querySelector(
          ".container-comparison__container-bicycles-btn"
        );
      const btnsArr = [ellipsesBtn, bicyclesBtn];
      btnsArr.forEach((btn) => {
        if (btn) {
          btn.addEventListener("mouseover", function () {
            btn.style.background = "#384255";
            btn.style.color = "#ffffff";
          });
          btn.addEventListener("mouseout", function () {
            btn.style.background = "rgba(144, 156, 181, 0.2)";
            btn.style.color = "#384255";
          });
        }
      });
    });
  },
  updated() {
    /* carosusel for .container-comparison__container-items-flex starts */
    let sliderContainer = this.$refs.comparisonList
        ? this.$refs.comparisonList.$refs.sliderContainer
        : null,
      slides = document.querySelectorAll(".container-comparison__item-title");
    const btnNext = document.querySelector(
      ".container-comparison__arrow-next-btn"
    );
    let currentPos = 0;
    document.addEventListener("click", function (event) {
      if (event.target.matches(".container-comparison__arrow-next-btn")) {
        let slideIndex = Math.floor(currentPos / -slides[0].offsetWidth);
        if (slideIndex < 0) {
          slideIndex = 0;
        } else if (slideIndex >= slides.length) {
          slideIndex = slides.length - 1;
        }
        let slideWidth = slides[slideIndex].offsetWidth + 20;
        currentPos -= slideWidth;
        if (currentPos < -slideWidth * (slides.length - 1)) {
          currentPos = 0;
        }
        sliderContainer.style.transform = "translateX(" + currentPos + "px)";
      }
    });
    /* carosusel for .container-comparison__container-items-flex ends */
  },
  methods: {
    getComparisons() {
      this.comparisons = JSON.parse(localStorage.getItem("comparisons"));
    },
    removeFromComparisons(comparison) {
      let comparisons = JSON.parse(localStorage.getItem("comparisons"));

      if (comparisons) {
        comparisons = comparisons.filter(
          (compar) => compar.id !== comparison.id
        );
        localStorage.setItem("comparisons", JSON.stringify(comparisons));
        this.comparisons = comparisons;
      }
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

/* 768px = 48em */
@media (min-width: 48em) {
  .container-comparison {
    padding: 2.5rem 2.5rem 3.75rem 2.5rem;
  }
  .container-comparison__home-icon-and-home-title-flex {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  .container-comparison__home-title {
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    color: #858fa4;
  }
  .container-comparison__title {
    font-family: "Inter", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: #1a1a25;
    margin-top: 1.87rem;
  }
  .container-comparison__title-border {
    width: 100%;
    border: 1px solid rgba(133, 143, 164, 0.2);
  }
  .container-comparison__arrow-next-btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $dark-col;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    z-index: 2;
    cursor: pointer;
    margin-top: 15rem;
    margin-left: 0.5rem;
  }
  .container-comparison__container-items-flex {
    position: relative;
    background: $white-col;
    margin-top: 1.25rem;
    height: 950px;
    overflow: hidden;
  }
  .container-comparison__container-btns-flex {
    position: absolute;
    display: flex;
    gap: 0.75rem;
    margin-top: 1.88rem;
    margin-left: 1.25rem;
  }
  .container-comparison__container-btn {
    border: none;
    background: rgba(144, 156, 181, 0.2);
    border-radius: 4px;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: $dark-blue-col;
  }
  .container-comparison__container-treadmill-btn {
    background: $dark-blue-col;
    color: $white-col;
  }
  .container-comparison__subtitles-flex {
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
    padding-top: 29rem;
    margin-left: 1.25rem;
  }
  .container-comparison__subtitle {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    color: $dark-col;
  }
  .container-comparison__text-empty {
    display: block;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #1a1a25;
    margin-top: 1.25rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-comparison__title {
    font-size: 1.875rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-comparison {
    padding: 3.75rem 10.313rem 7.5rem 10.313rem;
  }
  .container-comparison__container-items-flex {
    height: 980px;
  }
  .container-comparison__subtitles-flex {
    padding-top: 30rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-comparison {
    padding: 3.75rem 15.938rem 7.5rem 15.938rem;
  }
}
</style>
