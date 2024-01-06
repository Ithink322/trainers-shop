<template>
  <div class="container-comparison__item" ref="slide">
    <img
      src="/imgs_main_page/card-item-hero-from320px.svg"
      alt=""
      class="container-comparison__item-hero"
    />
    <div class="container-comparison__item-title-and-price-and-btns-flex">
      <div class="container-comparison__item-title-and-price-flex">
        <span class="container-comparison__item-title">{{
          comparison.title
        }}</span>
        <span class="container-comparison__item-price"
          >{{ comparison.currentPrice }} ₽</span
        >
      </div>
      <div class="container-comparison__item-btns-flex">
        <button
          class="container-comparison__item-buy-btn"
          @click="addToCart(comparison)"
        >
          <img
            src="imgs_main_page/thick-cart-icon.svg"
            alt=""
            class="container-comparison__item-buy-btn-icon"
          />
          Купить
        </button>
        <button
          class="container-comparison__item-close-btn"
          @click="removeFromComparisons(comparison)"
        >
          <img
            src="imgs_main_page/x-icon-in-circle.svg"
            alt=""
            class="container-comparison__item-close-btn-icon"
          />
        </button>
      </div>
    </div>
    <div class="container-comparison__item-subtitles-item-and-borders-flex">
      <div class="container-comparison__item-subtitle-item-and-border-flex">
        <span class="container-comparison__item-subtitle-item">{{
          comparison.treadmillType
        }}</span>
        <div class="container-comparison__item-subtitle-item-border"></div>
      </div>
      <div class="container-comparison__item-subtitle-item-and-border-flex">
        <span class="container-comparison__item-subtitle-item">{{
          comparison.runnigTrack
        }}</span>
        <div class="container-comparison__item-subtitle-item-border"></div>
      </div>
      <div class="container-comparison__item-subtitle-item-and-border-flex">
        <span class="container-comparison__item-subtitle-item">{{
          comparison.enginePower
        }}</span>
        <div class="container-comparison__item-subtitle-item-border"></div>
      </div>
      <div class="container-comparison__item-subtitle-item-and-border-flex">
        <span class="container-comparison__item-subtitle-item">{{
          comparison.manufacturer
        }}</span>
        <div class="container-comparison__item-subtitle-item-border"></div>
      </div>
      <div class="container-comparison__item-subtitle-item-and-border-flex">
        <span class="container-comparison__item-subtitle-item">{{
          comparison.engineType
        }}</span>
        <div class="container-comparison__item-subtitle-item-border"></div>
      </div>
      <div class="container-comparison__item-subtitle-item-and-border-flex">
        <span class="container-comparison__item-subtitle-item">{{
          comparison.speedAdjustment
        }}</span>
        <div class="container-comparison__item-subtitle-item-border"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComparisonItem",
  props: {
    comparisons: {
      type: Array,
      required: true,
    },
    comparison: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(comparison) {
      let cart = localStorage.getItem("cart");

      let newItem = [
        {
          id: comparison.id,
          title: comparison.title,
          currentPrice: comparison.currentPrice,
          previousPrice: comparison.previousPrice,
          qty: 1,
          treadmillType: comparison.treadmillType,
          runnigTrack: comparison.runnigTrack,
          enginePower: comparison.enginePower,
          manufacturer: comparison.manufacturer,
          brandLogoSrc: comparison.brandLogoSrc,
          engineType: comparison.engineType,
          speedAdjustment: comparison.speedAdjustment,
          qtyoflayersrunnigTrack: comparison.qtyoflayersrunnigTrack,
          MP3: comparison.MP3,
          console: comparison.console,
        },
      ];
      if (!cart) {
        localStorage.setItem("cart", JSON.stringify(newItem));
      } else {
        cart = JSON.parse(cart);

        cart.forEach((itemInCart) => {
          if (itemInCart.id === comparison.id) {
            itemInCart.qty = Number(itemInCart.qty) + Number(1);
            newItem = null;
          }
        });

        Array.prototype.push.apply(cart, newItem);

        localStorage.setItem("cart", JSON.stringify(cart));
      }
      this.updateTotalQty();
    },
    updateTotalQty() {
      let totalQty = 0;
      let products = JSON.parse(localStorage.getItem("cart"));
      if (products !== null) {
        products.forEach((product) => {
          totalQty += Number(product.qty);
        });
        localStorage.setItem("totalQtyOfProducts", totalQty.toString());
      }
      let divAmountOfProducts = document.querySelector(
          ".header__cart-amount-circle-and-text-div"
        ),
        textAmountOfProducts = document.querySelector(
          ".header__text-cart-amount-circle"
        ),
        divAmountOfProductsFrom1440px = document.querySelector(
          ".header__cart-amount-circle-and-text-div-from1440px"
        ),
        textAmountOfProductsFrom1440px = document.querySelector(
          ".header__text-cart-amount-circle-from1440px"
        );
      if (totalQty > 0) {
        if (window.innerWidth < 1440) {
          divAmountOfProducts.style.display = "block";
        }
        if (window.innerWidth >= 1440) {
          divAmountOfProductsFrom1440px.style.display = "block";
        }
        textAmountOfProducts.textContent = totalQty.toString();
        textAmountOfProductsFrom1440px.textContent = totalQty.toString();
      } else {
        divAmountOfProducts.style.display = "none";
        divAmountOfProductsFrom1440px.style.display = "none";
      }
    },
    updateTotalOfComparisons() {
      let totalQty = JSON.parse(localStorage.getItem("comparisons"));
      if (totalQty) {
        totalQty = totalQty.length;
      }

      let divAmountOfComparisonsFrom768px = document.querySelector(
          ".header__comparison-amount-circle-and-text-div"
        ),
        textAmountOfComparisonsFrom768px = document.querySelector(
          ".header__text-comparison-amount-circle"
        ),
        divAmountOfComparisonsFrom1440px = document.querySelector(
          ".header__comparison-amount-circle-and-text-div-from1440px"
        ),
        textAmountOfComparisonsFrom1440px = document.querySelector(
          ".header__text-comparison-amount-circle-from1440px"
        );
      if (totalQty > 0) {
        if (window.innerWidth >= 768 && window.innerWidth < 1440) {
          divAmountOfComparisonsFrom768px.style.display = "block";
          textAmountOfComparisonsFrom768px.textContent = totalQty.toString();
        }
        if (window.innerWidth >= 1440) {
          divAmountOfComparisonsFrom1440px.style.display = "block";
          textAmountOfComparisonsFrom1440px.textContent = totalQty.toString();
        }
      } else {
        divAmountOfComparisonsFrom768px.style.display = "none";
        divAmountOfComparisonsFrom1440px.style.display = "none";
      }
    },
    removeFromComparisons() {
      this.$emit("remove-comparison", this.comparison);
      this.updateTotalOfComparisons();
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
  .container-comparison__item-hero {
    min-width: 210px;
    height: 210px;
  }
  .container-comparison__item-title {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: $dark-col;
    white-space: nowrap;
  }
  .container-comparison__item-title-and-price-and-btns-flex {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .container-comparison__item-title-and-price-flex {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .container-comparison__item-price {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: $dark-col;
  }
  .container-comparison__item-btns-flex {
    display: flex;
    gap: 1.88rem;
  }
  .container-comparison__item-buy-btn {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    border: none;
    background: #f53b49;
    padding: 0.75rem;
    width: fit-content;
    border-radius: 4px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: #ffffff;
  }
  .container-comparison__item-close-btn {
    border: none;
    background: none;
    cursor: pointer;
  }
  .container-comparison__item-subtitles-item-and-borders-flex {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 2.69rem;
    margin-top: 4rem;
  }
  .container-comparison__item-subtitle-item-and-border-flex {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .container-comparison__item-subtitle-item {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: $dark-col;
  }
  .container-comparison__item-subtitle-item-border {
    width: 210px;
    border: 1px solid rgba(133, 143, 164, 0.2);
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-comparison__item-subtitles-item-and-borders-flex {
    margin-top: 5rem;
  }
}
</style>
