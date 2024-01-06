<template>
  <div class="container-cart__guarantee-at-certain-item-flex">
    <div class="container-cart__guarantee-at-certain-item-title-and-num-flex">
      <span class="container-cart__guarantee-at-certain-item-title"
        >Гарантия на {{ product.title }}</span
      >
      <span class="container-cart__guarantee-at-certain-item-num"
        >Артикул 12345678</span
      >
    </div>
    <div class="container-cart__guarantee-cost-and-counter-flex">
      <span class="container-cart__guarantee-cost">1 000 ₽ / 1 год</span>
      <div class="container-cart__guarantee-counter-flex">
        <button class="container-cart__guarantee-counter-minus-btn">
          <img src="imgs_main_page/gray-minus-btn.svg" alt="" />
        </button>
        <span class="container-cart__guarantee-counter-text">1</span>
        <button class="container-cart__guarantee-counter-plus-btn">
          <img src="imgs_main_page/gray-plus-btn.svg" alt="" />
        </button>
      </div>
    </div>
    <button @click="addGuarantee" class="container-cart__guarantee-add-btn">
      Добавить
    </button>
  </div>
  <div class="container-cart__guarantee-at-certain-item-border"></div>
</template>

<script>
export default {
  name: "GuaranteeItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      btnIsActivated:
        JSON.parse(localStorage.getItem("guaranteeActivated")) || [],
    };
  },
  mounted() {
    /* counter .container-cart__guarantee-counter-text starts */
    const minusBtn = document.querySelectorAll(
        ".container-cart__guarantee-counter-minus-btn"
      ),
      plusBtn = document.querySelectorAll(
        ".container-cart__guarantee-counter-plus-btn"
      );
    let counterText = document.querySelectorAll(
      ".container-cart__guarantee-counter-text"
    );
    let counts = Array.from(counterText).map(() => 1);

    minusBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        if (counts[index] > 1) {
          counts[index]--;
          counterText[index].innerText = counts[index];
        }
      });
    });

    plusBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        if (counts[index] < 5) {
          counts[index]++;
          counterText[index].innerText = counts[index];
        }
      });
    });
    /* counter .container-cart__guarantee-counter-text ends */
    this.addGuarantee();
  },
  methods: {
    addGuarantee() {
      let buttons = document.querySelectorAll(
        ".container-cart__guarantee-add-btn"
      );
      let counters = document.querySelectorAll(
        ".container-cart__guarantee-counter-text"
      );

      this.btnIsActivated =
        JSON.parse(localStorage.getItem("guaranteeActivated")) || [];

      buttons.forEach((btn, index) => {
        if (this.btnIsActivated.includes(index.toString())) {
          btn.style.background = "green";
          btn.innerText = "Добавлено";
        } else {
          btn.style.background = "transparent";
          btn.innerText = "Добавить";
        }

        btn.onclick = () => {
          if (btn.style.background === "green") {
            btn.style.background = "transparent";
            btn.innerText = "Добавить";
            this.btnIsActivated = this.btnIsActivated.filter(
              (item) => item !== index.toString()
            );
          } else {
            btn.style.background = "green";
            btn.innerText = "Добавлено";
            this.btnIsActivated.push(index.toString());
          }

          let currentCounters = this.btnIsActivated.map((activatedIndex) => {
            if (activatedIndex < counters.length) {
              return parseInt(counters[activatedIndex].innerText) * 1000;
            }
          });
          currentCounters = currentCounters.filter(
            (counter) => counter !== undefined
          );

          localStorage.setItem(
            "guaranteeActivated",
            JSON.stringify(this.btnIsActivated)
          );
          localStorage.setItem(
            "currentCounters",
            JSON.stringify(currentCounters)
          );
        };
      });
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
.container-cart__guarantee-at-certain-item-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.container-cart__guarantee-at-certain-item-title-and-num-flex {
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
}
.container-cart__guarantee-at-certain-item-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $white-col;
}
.container-cart__guarantee-at-certain-item-num {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
}
.container-cart__guarantee-cost-and-counter-flex {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.container-cart__guarantee-cost {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #909cb5;
}
.container-cart__guarantee-counter-flex {
  display: flex;
  align-items: center;
  gap: 0.38rem;
}
.container-cart__guarantee-counter-minus-btn,
.container-cart__guarantee-counter-plus-btn {
  border: none;
  background: transparent;
  cursor: pointer;
}
.container-cart__guarantee-counter-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #909cb5;
  margin-top: -0.25rem;
}
.container-cart__guarantee-add-btn {
  border: 1px solid rgba(246, 246, 246, 0.5);
  border-radius: 4px;
  background: transparent;
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $white-col;
}
.container-cart__guarantee-at-certain-item-border {
  width: 100%;
  border: 1px solid rgba(144, 156, 181, 0.5);
}
/* 768px = 48em */
@media (min-width: 48em) {
}

/* 1024px = 64em */
@media (min-width: 64em) {
}

/* 1440px = 90em */
@media (min-width: 90em) {
}

/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
