<template>
  <div class="container-cart__item">
    <img
      src="imgs_main_page/card-item-hero-from320px.svg"
      alt=""
      class="container-cart__item-hero"
    />
    <div class="container-cart__item-info-and-specs-and-btns-main-flex">
      <div class="container-cart__item-info-main-flex">
        <div
          class="container-cart__item-title-and-rating-and-quantity-at-storage-and-showroom-text-flex"
        >
          <span class="container-cart__item-title">{{ product.title }}</span>
          <div class="container-cart__item-rating-text-and-stars-flex">
            <span class="container-cart__item-rating-text">Рейтинг</span>
            <div class="container-cart__item-rating-flex">
              <img
                src="imgs_main_page/card-item-star-icon.svg"
                alt=""
                class="container-cart__item-star"
              />
              <img
                src="imgs_main_page/card-item-star-icon.svg"
                alt=""
                class="container-cart__item-star"
              />
              <img
                src="imgs_main_page/card-item-star-icon.svg"
                alt=""
                class="container-cart__item-star"
              />
              <img
                src="imgs_main_page/card-item-star-icon.svg"
                alt=""
                class="container-cart__item-star"
              />
              <img
                src="imgs_main_page/card-item-star-icon.svg"
                alt=""
                class="container-cart__item-star"
              />
            </div>
          </div>
          <div class="container-cart__item-quantity-at-storage-flex">
            <span class="container-cart__item-quantity-at-storage-text"
              >Осталось мало</span
            >
            <div class="container-cart__item-quantity-at-storage-circles-flex">
              <div
                class="container-cart__item-quantity-at-storage-circle"
              ></div>
              <div
                class="container-cart__item-quantity-at-storage-circle-border"
              ></div>
              <div
                class="container-cart__item-quantity-at-storage-circle-border"
              ></div>
            </div>
          </div>
          <span class="container-cart__item-showroom-text"
            >Есть в шоу-руме</span
          >
        </div>
        <div class="container-cart__item-counter-and-prices-flex">
          <div class="container-cart__item-counter-btns-flex">
            <button
              @click="decreaseQty(product)"
              class="container-cart__item-minus-btn"
            >
              <img src="imgs_main_page/minus-btn.svg" alt="" />
            </button>
            <span class="container-cart__item-counter-text">{{
              product.qty
            }}</span>
            <button
              @click="increaseQty(product)"
              class="container-cart__item-plus-btn"
            >
              <img src="imgs_main_page/plus-btn.svg" alt="" />
            </button>
          </div>
          <div class="container-cart__item-prices-flex">
            <span class="container-cart__item-current-price"
              >{{
                (
                  parseInt(product.currentPrice.replace(/\s/g, "")) *
                  product.qty
                ).toLocaleString()
              }}₽</span
            >
            <span class="container-cart__item-previous-price"
              >{{
                (
                  parseInt(product.previousPrice.replace(/\s/g, "")) *
                  product.qty
                ).toLocaleString()
              }}₽</span
            >
          </div>
        </div>
      </div>
      <div class="container-cart__item-border"></div>
      <div class="container-cart__item-specs-main-flex">
        <div class="container-cart__item-specs-flex">
          <span class="container-cart__item-specs-title">Размер, см</span>
          <button class="container-cart__item-specs-btn">
            {{ selectedCharacteristics.characteristic1 }}
          </button>
        </div>
        <div class="container-cart__item-specs-flex">
          <span class="container-cart__item-specs-title">Вес стека, г</span>
          <button class="container-cart__item-specs-btn">
            {{ selectedCharacteristics.characteristic2 }}
          </button>
        </div>
        <div class="container-cart__item-specs-flex">
          <span class="container-cart__item-specs-title">Цвет</span>
          <button class="container-cart__item-specs-btn">
            <div
              class="container-cart__item-specs-btn-circle"
              :style="{
                background: getCircleColor(
                  selectedCharacteristics.characteristic3
                ).color,
                border: getCircleColor(selectedCharacteristics.characteristic3)
                  .border,
              }"
            ></div>
            {{ selectedCharacteristics.characteristic3 }}
          </button>
        </div>
        <div class="container-cart__item-specs-flex">
          <span class="container-cart__item-specs-title">Цвет рамы</span>
          <button class="container-cart__item-specs-btn">
            <div
              class="container-cart__item-specs-btn-circle"
              :style="{
                background: getCircleColor(
                  selectedCharacteristics.characteristic4
                ).color,
                border: getCircleColor(selectedCharacteristics.characteristic4)
                  .border,
              }"
            ></div>
            {{ selectedCharacteristics.characteristic4 }}
          </button>
        </div>
        <div class="container-cart__item-specs-flex">
          <span class="container-cart__item-specs-title">Цвет обивки</span>
          <button class="container-cart__item-specs-btn">
            <div
              class="container-cart__item-specs-btn-circle"
              :style="{
                background: getCircleColor(
                  selectedCharacteristics.characteristic5
                ).color,
                border: getCircleColor(selectedCharacteristics.characteristic5)
                  .border,
              }"
            ></div>
            {{ selectedCharacteristics.characteristic5 }}
          </button>
        </div>
      </div>
      <div
        class="container-cart__item-add-to-favorites-and-delete-from-the-cart-flex"
      >
        <button
          @click="addToFavorites(product)"
          class="container-cart__item-add-to-favorites"
        >
          <img
            class="container-cart__item-add-to-favorites-icon"
            :src="currentIcon"
            alt=""
          />
          В избранное
        </button>
        <button
          @click="removeProduct(product.id)"
          class="container-cart__item-delete-from-the-cart"
        >
          <img
            class="container-cart__item-delete-from-the-cart-icon"
            src="imgs_main_page/x-menus.svg"
            alt=""
          />
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    removeProduct: {
      type: Function,
      required: true,
    },
    calculateTotalPrice: {
      type: Function,
      required: true,
    },
    updateTotalQty: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      favouriteIconDisabled: "imgs_main_page/heart-iconn.svg",
      favouriteIconActivated:
        "/imgs_main_page/card-item-favourite-icon-activated.svg",
      currentIcon: "imgs_main_page/heart-iconn.svg",
      selectedCharacteristics: {},
      pricesInCharacteristics: 0,
      currentCounters: [],
    };
  },
  methods: {
    /* counter .container-cart__item-counter-text starts */
    decreaseQty(product) {
      if (product.qty > 1) {
        product.qty--;
      }
      localStorage.setItem("cart", JSON.stringify(this.products));
      this.calculateTotalPrice();
      this.updateTotalQty();
    },
    increaseQty(product) {
      product.qty++;
      localStorage.setItem("cart", JSON.stringify(this.products));
      this.calculateTotalPrice();
      this.updateTotalQty();
    },
    /* counter .container-cart__item-counter-text ends */
    removeProduct(id) {
      this.removeProduct(id);
      this.$emit("productRemoved", id);
      this.calculateTotalPrice();
      localStorage.removeItem(`selectedCharacteristics_${id}`);
    },
    getCircleColor(colorName) {
      const savedCharacteristics = localStorage.getItem(
        `selectedCharacteristics_${this.product.id}`
      );
      if (savedCharacteristics) {
        const cleanColorName = colorName.split("\n")[0];
        const colorMappings = {
          Чёрный: { color: "#000", border: "none" },
          Белый: { color: "#fff", border: "1px solid #909cb5" },
          Графит: { color: "#505050", border: "none" },
          Красный: { color: "#f53b49", border: "none" },
        };

        return (
          colorMappings[cleanColorName] || { color: "black", border: "none" }
        );
      } else {
        return { color: "black", border: "none" };
      }
    },
    addToFavorites(product) {
      if (this.currentIcon === this.favouriteIconDisabled) {
        let favorites = localStorage.getItem("favorites");

        let newFavorite = [
          {
            id: product.id,
            title: product.title,
            currentPrice: product.currentPrice,
            previousPrice: product.previousPrice,
            treadmillType: product.treadmillType,
            runnigTrack: product.runnigTrack,
            enginePower: product.enginePower,
            manufacturer: product.manufacturer,
            brandLogoSrc: product.brandLogoSrc,
            engineType: product.engineType,
            speedAdjustment: product.speedAdjustment,
            qtyoflayersrunnigTrack: product.qtyoflayersrunnigTrack,
            MP3: product.MP3,
            console: product.console,
          },
        ];

        if (!favorites) {
          localStorage.setItem("favorites", JSON.stringify(newFavorite));
        } else {
          favorites = JSON.parse(favorites);

          if (
            !favorites.some((favorite) => favorite.id === newFavorite[0].id)
          ) {
            favorites.push(newFavorite[0]);
            localStorage.setItem("favorites", JSON.stringify(favorites));
          }
        }

        this.currentIcon = this.favouriteIconActivated;
        this.updateTotalOfFavorites();
      } else {
        this.currentIcon = this.favouriteIconDisabled;

        this.removeFromFavorites(product);
        this.updateTotalOfFavorites();
      }
    },
    removeFromFavorites(product) {
      let favorites = localStorage.getItem("favorites");

      if (favorites) {
        favorites = JSON.parse(favorites);
        favorites = favorites.filter((favorite) => favorite.id !== product.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    },
    checkFavoriteHeartStatus(product) {
      let favorites = localStorage.getItem("favorites");
      if (favorites) {
        favorites = JSON.parse(favorites);
        return favorites.some((favorite) => favorite.id === product.id);
      }
      return false;
    },
    updateFavoriteHeartStatus(product) {
      this.currentIcon = this.checkFavoriteHeartStatus(product)
        ? this.favouriteIconActivated
        : this.favouriteIconDisabled;
    },
    updateTotalOfFavorites() {
      let totalQty = JSON.parse(localStorage.getItem("favorites"));
      if (totalQty) {
        totalQty = totalQty.length;
      }

      let divAmountOfFavoritesFrom320px = document.querySelector(
          ".header__heart-amount-circle-and-text-div-from320px"
        ),
        textAmountOfFavoritesFrom320px = document.querySelector(
          ".header__text-heart-amount-circle-from320px"
        ),
        divAmountOfFavoritesFrom768px = document.querySelector(
          ".header__heart-amount-circle-and-text-div"
        ),
        textAmountOfFavoritesFrom768px = document.querySelector(
          ".header__text-heart-amount-circle"
        ),
        divAmountOfFavoritesFrom1440px = document.querySelector(
          ".header__heart-amount-circle-and-text-div-from1440px"
        ),
        textAmountOfFavoritesFrom1440px = document.querySelector(
          ".header__text-heart-amount-circle-from1440px"
        );
      if (totalQty > 0) {
        if (window.innerWidth < 768) {
          divAmountOfFavoritesFrom320px.style.display = "block";
        }
        if (window.innerWidth > 768 && window.innerWidth < 1440) {
          divAmountOfFavoritesFrom768px.style.display = "block";
        }
        if (window.innerWidth >= 1440) {
          divAmountOfFavoritesFrom1440px.style.display = "block";
        }
        textAmountOfFavoritesFrom320px.textContent = totalQty.toString();
        textAmountOfFavoritesFrom768px.textContent = totalQty.toString();
        textAmountOfFavoritesFrom1440px.textContent = totalQty.toString();
      } else {
        divAmountOfFavoritesFrom320px.style.display = "none";
        divAmountOfFavoritesFrom768px.style.display = "none";
        divAmountOfFavoritesFrom1440px.style.display = "none";
      }
    },
  },
  created() {
    this.updateFavoriteHeartStatus(this.product);
    const storedCharacteristics = localStorage.getItem(
      `selectedCharacteristics_${this.product.id}`
    );
    if (storedCharacteristics) {
      this.selectedCharacteristics = JSON.parse(storedCharacteristics);
    }
  },
  mounted() {
    this.calculateTotalPrice();
    this.updateTotalOfFavorites();
    this.currentCounters = JSON.parse(localStorage.getItem("currentCounters"));
    // console.log("this.currentCounters:", this.currentCounters);
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
.container-cart__item {
  position: relative;
  background: $white-col;
  border-radius: 6px;
}
.container-cart__item-hero {
  position: absolute;
  width: 80px;
  height: 80px;
  margin-top: 2.5rem;
  right: 1.25rem;
}
.container-cart__item-info-and-specs-and-btns-main-flex {
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  padding: 1.25rem;
}
.container-cart__item-info-main-flex {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.container-cart__item-title-and-rating-and-quantity-at-storage-and-showroom-text-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container-cart__item-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $dark-col;
}
.container-cart__item-rating-text-and-stars-flex {
  display: flex;
  gap: 0.38rem;
}
.container-cart__item-rating-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #909cb5;
}
.container-cart__item-rating-flex {
  display: flex;
  gap: 0.12rem;
}
.container-cart__item-quantity-at-storage-flex {
  display: flex;
  gap: 0.38rem;
}
.container-cart__item-quantity-at-storage-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #f99808;
}
.container-cart__item-quantity-at-storage-circles-flex {
  display: flex;
  align-items: center;
  gap: 0.12rem;
}
.container-cart__item-quantity-at-storage-circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f99808;
}
.container-cart__item-quantity-at-storage-circle-border {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #f99808;
}
.container-cart__item-showroom-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #4b7ee8;
}
.container-cart__item-counter-and-prices-flex {
  display: flex;
  gap: 1.88rem;
}
.container-cart__item-counter-btns-flex {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.container-cart__item-minus-btn,
.container-cart__item-plus-btn {
  border: none;
  background: transparent;
  padding: 0rem;
  cursor: pointer;
}
.container-cart__item-counter-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-top: -0.25rem;
  color: #858fa4;
}
.container-cart__item-prices-flex {
  display: flex;
  flex-direction: column;
}
.container-cart__item-current-price {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: $dark-col;
}
.container-cart__item-previous-price {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: line-through;
  color: #858fa4;
}
.container-cart__item-border {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.2);
}
.container-cart__item-specs-main-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.container-cart__item-specs-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container-cart__item-specs-title {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: $dark-blue-col;
}
.container-cart__item-specs-btn {
  display: flex;
  align-items: center;
  gap: 0.38rem;
  border: 1px solid rgba(144, 156, 181, 0.5);
  border-radius: 4px;
  background: #fff;
  padding: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: $dark-blue-col;
}
.container-cart__item-specs-btn-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
.black {
  background: #000;
}
.graphit {
  background: #505050;
}
.red {
  background: #f53b49;
}
.white {
  background: #ffffff;
}
.container-cart__item-add-to-favorites-and-delete-from-the-cart-flex {
  display: flex;
  gap: 0.62rem;
  margin-left: auto;
}
.container-cart__item-add-to-favorites,
.container-cart__item-delete-from-the-cart {
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #909cb5;
}
.container-cart__item-add-to-favorites-icon {
  width: 16px;
  height: 14px;
}
.container-cart__item-delete-from-the-cart-icon {
  width: 9px;
  height: 9px;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .container-cart__item-hero {
    width: 160px;
    height: 160px;
    margin-top: 0rem;
    left: 0rem;
    border-radius: 6px 0px 0px 0px;
  }
  .container-cart__item-info-and-specs-and-btns-main-flex {
    gap: 0.62rem;
    padding: 1.25rem 1.25rem 1.25rem 11.25rem;
  }
  .container-cart__item-info-main-flex {
    flex-direction: row;
    align-items: center;
    gap: 0.875rem;
  }
  .container-cart__item-counter-and-prices-flex {
    align-items: flex-start;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-cart__item-title {
    font-size: 1.125rem;
  }
  .container-cart__item-specs-main-flex {
    gap: 1.25rem;
  }
  .container-cart__item-specs-title {
    font-size: 0.875rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-cart__item-hero {
    width: 237.75px;
    height: auto;
    object-fit: cover;
  }
  .container-cart__item-info-and-specs-and-btns-main-flex {
    padding: 1.25rem 1.25rem 1.25rem 16.25rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
