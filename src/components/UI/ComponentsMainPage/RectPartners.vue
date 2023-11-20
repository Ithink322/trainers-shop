<template>
  <div class="container-index__rect-partners">
    <div class="container-index__rect-partners-text-and-btn-flex">
      <p class="container-index__rect-partners-text">
        Станьте нашим партнером
        <span class="container-index__span-rect-partners-text"
          >и получите возможность</span
        >
        представлять нашу продукцию в вашем регионе.
      </p>
      <button class="container-index__rect-partners-btn">
        Стать партнёром
      </button>
    </div>
    <div class="container-index__rect-partners-overlow-for-hero">
      <img
        src="imgs_main_page/be_our_partner_img.png"
        alt=""
        class="container-index__rect-partners-overflow-hero"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RectParters",
};
</script>

<style lang="scss">
$white-col: #ffffff;
$dark-col: #1a1a25;
$red-col: #f53b49;
$gray-col: #858fa4;
$dark-blue-col: #384255;
$blue: #4b7ee8;
.container-index__rect-partners__br-1-text {
  display: none;
}
.container-index__rect-partners {
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: 6px;
  background: $dark-col;
  padding: 4rem 2.563rem 0rem 1.75rem;
}
.container-index__rect-partners-text-and-btn-flex {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
}
.container-index__rect-partners p {
  margin: 0rem;
}
.container-index__rect-partners-text {
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 120%;
  color: $white-col;
  padding-right: 10%;
}
.container-index__span-rect-partners-text {
  color: $red-col;
}
.container-index__rect-partners-overlow-for-hero {
  display: block;
  position: absolute;
  overflow: hidden;
  width: 100%;
  margin-left: -1.75rem;
  bottom: -0.25rem;
}
.container-index__rect-partners-overflow-hero {
  width: 280px;
}
.container-index__rect-partners-btn {
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: transparent;
  padding: 0.75rem 1.25rem 0.8125rem 1.25rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: $white-col;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-index__rect-partners {
    height: 327px;
    padding: 2.5rem 2.5rem 0rem 2.5rem;
  }
  .container-index__rect-partners-text-and-btn-flex {
    margin-left: 19.4rem;
  }
  .container-index__rect-partners-text {
    font-size: 1.25rem;
    padding-right: 0rem;
  }
  .container-index__rect-partners-overlow-for-hero {
    width: 100%;
    margin-left: -1.75rem;
    bottom: -0.25rem;
  }
  .container-index__rect-partners-overflow-hero {
    width: 300px;
  }
  .container-index__rect-partners-btn {
    font-size: 0.875rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-index__rect-partners {
    height: 327px;
    padding: 2.5rem 2.5rem 0rem 2.5rem;
  }
  .container-index__rect-partners-text-and-btn-flex {
    margin-left: 19.4rem;
  }
  .container-index__rect-partners-text {
    font-size: 1.25rem;
    padding-right: 0rem;
  }
  .container-index__rect-partners-overlow-for-hero {
    width: 350px;
    margin-left: -1.75rem;
    bottom: -0.25rem;
  }
  .container-index__rect-partners-overflow-hero {
    width: 300px;
  }
  .container-index__rect-partners-btn {
    font-size: 0.875rem;
    z-index: 2;
  }
  .container-index__rect-partners {
    padding: 3.5rem 2.5rem 0rem 3.5rem;
  }
  .container-index__rect-partners-text-and-btn-flex {
    margin-left: 27rem;
  }
  .container-index__rect-partners-overflow-hero {
    width: 350px;
    height: 300px;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-index__rect-partners {
    height: 396px;
    padding: 4.75 6rem 0rem 7.19rem;
    margin-top: 5.1rem;
  }
  .container-index__rect-partners-text-and-btn-flex {
    margin-left: 33rem;
  }
  .container-index__rect-partners-text {
    font-size: 1.875rem;
  }
  .container-index__rect-partners-overlow-for-hero {
    width: 100%;
  }
  .container-index__rect-partners-overflow-hero {
    width: 460px;
    height: 362px;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-index__rect-partners-text-and-btn-flex {
    margin-left: 41.5rem;
    padding-right: 10rem;
  }
}
</style>
