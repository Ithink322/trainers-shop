<template>
  <div class="container-catalog__card-item">
    <div class="container-catalog__card-item-comparison-and-favourites-flex">
      <img
        src="/imgs_main_page/card-item-comparison-icon.svg"
        alt=""
        class="container-catalog__card-item-comparison-icon"
        @click="addToComparisons(item)"
      />
      <img
        :src="currentIcon"
        alt=""
        class="container-catalog__card-item-favourites-icon"
        @click="toggleIconAndAddToFavorites(item)"
      />
    </div>
    <div @click="goToCurrentItem" class="container-catalog__card-item-card">
      <div class="container-catalog__card-item-hero-and-recomendations-flex">
        <img
          src="/imgs_main_page/card-item-hero-from320px.svg"
          alt=""
          class="container-catalog__card-item-hero-from320px"
        />
        <img
          src="/imgs_main_page/card-item-hero-from1440px.svg"
          alt=""
          class="container-catalog__card-item-hero-from1440px"
        />
        <img
          src="/imgs_main_page/card-item-recomendations-icons.svg"
          alt=""
          class="container-catalog__card-item-recomendations"
        />
      </div>
      <div class="container-catalog__card-item-info-flex">
        <div
          class="container-catalog__card-item-availability-and-show-room-text-flex"
        >
          <div class="container-catalog__card-item-availability-flex">
            <p class="container-catalog__card-item-availability-text">
              В наличии
            </p>
            <div class="container-catalog__card-item-availability-circles-flex">
              <div
                class="container-catalog__card-item-availability-circle"
              ></div>
              <div
                class="container-catalog__card-item-availability-circle"
              ></div>
              <div
                class="container-catalog__card-item-availability-circle"
              ></div>
            </div>
          </div>
          <p class="container-catalog__card-item-show-room-text">
            Есть в шоу-руме
          </p>
        </div>
        <p class="container-catalog__card-item-title">
          {{ item.title }}
        </p>
        <div class="container-catalog__card-item-specificatinons-flex">
          <span class="container-catalog__card-item-specificatinon-title"
            >Тип дорожки:
            <span
              class="container-catalog__card-item-specificatinon-desctiption"
              >{{ item.treadmillType }}</span
            >
          </span>
          <span class="container-catalog__card-item-specificatinon-title"
            >Беговое полотно:
            <span
              class="container-catalog__card-item-specificatinon-desctiption"
              >{{ item.runnigTrack }}</span
            >
          </span>
          <span class="container-catalog__card-item-specificatinon-title"
            >Мощность двигателя:
            <span
              class="container-catalog__card-item-specificatinon-desctiption"
              >{{ item.enginePower }}</span
            >
          </span>
          <span class="container-catalog__card-item-specificatinon-title"
            >Производитель:
            <span
              class="container-catalog__card-item-specificatinon-desctiption"
              >{{ item.manufacturer }}</span
            >
          </span>
        </div>
        <div class="container-catalog__card-item-rating-main-flex">
          <label class="container-catalog__card-item-rating-text"
            >Рейтинг</label
          >
          <div class="container-catalog__card-item-rating-flex">
            <img
              src="/imgs_main_page/card-item-star-icon.svg"
              alt=""
              class="container-catalog__card-item-rating-star-icon"
            />
            <img
              src="/imgs_main_page/card-item-star-icon.svg"
              alt=""
              class="container-catalog__card-item-rating-star-icon"
            />
            <img
              src="/imgs_main_page/card-item-star-icon.svg"
              alt=""
              class="container-catalog__card-item-rating-star-icon"
            />
            <img
              src="/imgs_main_page/card-item-star-icon.svg"
              alt=""
              class="container-catalog__card-item-rating-star-icon"
            />
            <img
              src="/imgs_main_page/card-item-star-icon.svg"
              alt=""
              class="container-catalog__card-item-rating-star-icon"
            />
          </div>
        </div>
        <div class="container-catalog__card-item-prices-flex">
          <p class="container-catalog__card-item-current-price">
            {{ item.currentPrice }} ₽
          </p>
          <p class="container-catalog__card-item-previous-price">
            {{ item.previousPrice }} ₽
          </p>
        </div>
      </div>
    </div>
    <button
      @click="addToCart(item)"
      class="container-catalog__card-item-btn-add-to-cart"
      :data-productId="item.id"
    >
      <div class="container-catalog__card-item-btn-add-to-cart-non-active">
        <img src="imgs_main_page/thick-cart-icon.svg" alt="" /> Купить
      </div>
      <span class="container-catalog__card-item-btn-add-to-cart-active">
        В корзине
      </span>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CatalogItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      favouriteIconDisabled: "/imgs_main_page/card-item-favourite-icon.svg",
      favouriteIconActivated:
        "/imgs_main_page/card-item-favourite-icon-activated.svg",
      currentIcon: "/imgs_main_page/card-item-favourite-icon.svg",
    };
  },
  methods: {
    addToCart(item) {
      let cart = localStorage.getItem("cart");

      let newItem = [
        {
          id: item.id,
          title: item.title,
          currentPrice: item.currentPrice,
          previousPrice: item.previousPrice,
          qty: 1,
          treadmillType: item.treadmillType,
          runnigTrack: item.runnigTrack,
          enginePower: item.enginePower,
          manufacturer: item.manufacturer,
          brandLogoSrc: item.brandLogoSrc,
          engineType: item.engineType,
          speedAdjustment: item.speedAdjustment,
          qtyoflayersrunnigTrack: item.qtyoflayersrunnigTrack,
          MP3: item.MP3,
          console: item.console,
        },
      ];
      if (!cart) {
        localStorage.setItem("cart", JSON.stringify(newItem));
      } else {
        cart = JSON.parse(cart);

        cart.forEach((itemInCart) => {
          if (itemInCart.id === item.id) {
            itemInCart.qty = Number(itemInCart.qty) + Number(1);
            newItem = null;
          }
        });

        Array.prototype.push.apply(cart, newItem);

        localStorage.setItem("cart", JSON.stringify(cart));
      }
      this.updateTotalQty();
      this.updateAddToCartButtons();
    },
    updateAddToCartButtons() {
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      let cartItemIds = cartItems.map((product) => product.id);
      let addToCartBtns = document.querySelectorAll(
        ".container-catalog__card-item-btn-add-to-cart"
      );

      addToCartBtns.forEach((addToCartBtn) => {
        let card = addToCartBtn.closest(".container-catalog__card-item");
        let activeBtn = card.querySelector(
          ".container-catalog__card-item-btn-add-to-cart-active"
        );
        let nonActiveBtn = card.querySelector(
          ".container-catalog__card-item-btn-add-to-cart-non-active"
        );

        let productId = addToCartBtn.getAttribute("data-productId");
        if (cartItemIds.includes(parseInt(productId))) {
          activeBtn.style.display = "block";
          nonActiveBtn.style.display = "none";
          addToCartBtn.style.color = "#f53b49";
          addToCartBtn.style.background = "transparent";
          addToCartBtn.style.border = "1px solid #f53b49";
        } else {
          activeBtn.style.display = "none";
          nonActiveBtn.style.display = "flex";
          addToCartBtn.style.color = "#fff";
          addToCartBtn.style.background = "#f53b49";
        }
      });
    },
    toggleIconAndAddToFavorites(item) {
      if (this.currentIcon === this.favouriteIconDisabled) {
        let favorites = localStorage.getItem("favorites");

        let newFavorite = [
          {
            id: item.id,
            title: item.title,
            currentPrice: item.currentPrice,
            previousPrice: item.previousPrice,
            treadmillType: item.treadmillType,
            runnigTrack: item.runnigTrack,
            enginePower: item.enginePower,
            manufacturer: item.manufacturer,
            brandLogoSrc: item.brandLogoSrc,
            engineType: item.engineType,
            speedAdjustment: item.speedAdjustment,
            qtyoflayersrunnigTrack: item.qtyoflayersrunnigTrack,
            MP3: item.MP3,
            console: item.console,
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

        this.removeFromFavorites(item);
        this.updateTotalOfFavorites();
      }
    },
    removeFromFavorites(item) {
      let favorites = localStorage.getItem("favorites");

      if (favorites) {
        favorites = JSON.parse(favorites);
        favorites = favorites.filter((favorite) => favorite.id !== item.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
      this.$emit("remove-from-favorites", this.item);
    },
    updateTotalOfFavorites() {
      let totalQty = JSON.parse(localStorage.getItem("favorites"));
      if (totalQty !== null) {
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
        if (window.innerWidth >= 768 && window.innerWidth < 1440) {
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
    checkFavoriteHeartStatus(item) {
      let favorites = localStorage.getItem("favorites");
      if (favorites) {
        favorites = JSON.parse(favorites);
        return favorites.some((favorite) => favorite.id === item.id);
      }
      return false;
    },
    updateFavoriteHeartStatus(item) {
      this.currentIcon = this.checkFavoriteHeartStatus(item)
        ? this.favouriteIconActivated
        : this.favouriteIconDisabled;
    },
    ...mapActions(["selectItem"]),
    goToCurrentItem() {
      this.selectItem(this.item);
      this.$router.push("/CurrentItem");
      window.scrollTo(0, 0); // Перемещение в начало страницы
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
    addToComparisons(item) {
      let comparisons = localStorage.getItem("comparisons");

      let newComparison = [
        {
          id: item.id,
          title: item.title,
          currentPrice: item.currentPrice,
          previousPrice: item.previousPrice,
          treadmillType: item.treadmillType,
          runnigTrack: item.runnigTrack,
          enginePower: item.enginePower,
          manufacturer: item.manufacturer,
          brandLogoSrc: item.brandLogoSrc,
          engineType: item.engineType,
          speedAdjustment: item.speedAdjustment,
          qtyoflayersrunnigTrack: item.qtyoflayersrunnigTrack,
          MP3: item.MP3,
          console: item.console,
        },
      ];

      if (!comparisons) {
        localStorage.setItem("comparisons", JSON.stringify(newComparison));
      } else {
        comparisons = JSON.parse(comparisons);

        if (
          !comparisons.some(
            (comparison) => comparison.id === newComparison[0].id
          )
        ) {
          comparisons.push(newComparison[0]);
          localStorage.setItem("comparisons", JSON.stringify(comparisons));
        }
      }
      this.updateTotalOfComparisons();
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
    removeFromComparisons(item) {
      let comparisons = localStorage.getItem("comparisons");

      if (comparisons) {
        comparisons = JSON.parse(comparisons);
        comparisons = comparisons.filter(
          (comparison) => comparison.id !== item.id
        );
        localStorage.setItem("comparisons", JSON.stringify(comparisons));
      }
      this.$emit("remove-from-comparisons", this.item);
    },
  },
  created() {
    this.updateFavoriteHeartStatus(this.item);
  },
  mounted() {
    this.updateTotalOfFavorites();
    this.updateTotalQty();
    this.updateAddToCartButtons();
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

.container-catalog__card-item {
  position: relative;
  display: grid;
  background: $white-col;
  border-radius: 6px;
  width: 48.34%;
  cursor: pointer;
}
.container-catalog__card-item-hero-and-recomendations-flex {
  display: flex;
  flex-direction: column;
}
.container-catalog__card-item-hero-from1440px {
  display: none;
}
.container-catalog__card-item-hero-from320px {
  width: 100%;
  max-height: 100.03%;
  object-fit: cover;
  border-radius: 6px 6px 0px 0px;
}
.container-catalog__card-item-recomendations {
  height: 22px;
  width: 50px;
  margin-left: 0.62rem;
  margin-top: -1.875rem;
}
.container-catalog__card-item-comparison-and-favourites-flex {
  position: absolute;
  display: flex;
  gap: 0.39rem;
  right: 0.47rem;
  top: 0.62rem;
}
.container-catalog__card-item-comparison-icon {
  cursor: pointer;
}
.container-catalog__card-item-favourites-icon {
  width: 21px;
  cursor: pointer;
}
.container-catalog__card-item-info-flex p {
  margin: 0rem;
}
.container-catalog__card-item-info-flex {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.62rem;
  margin-bottom: 0rem;
  align-self: end;
}
.container-catalog__card-item-availability-flex {
  display: flex;
  align-items: center;
  gap: 0.38rem;
}
.container-catalog__card-item-availability-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 2rem;
  color: #2fc509;
}
.container-catalog__card-item-availability-circles-flex {
  display: flex;
  gap: 0.12rem;
}
.container-catalog__card-item-availability-circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2fc509;
}
.container-catalog__card-item-show-room-text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #4b7ee8;
}
.container-catalog__card-item-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $dark-col;
}
.container-catalog__card-item-specificatinons-flex,
.container-catalog__card-item-rating-text {
  display: none;
}
.container-catalog__card-item-rating-flex {
  display: flex;
  gap: 0.12rem;
}
.container-catalog__card-item-prices-flex {
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
}
.container-catalog__card-item-current-price {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
}
.container-catalog__card-item-previous-price {
  font-size: 0.75rem;
  font-weight: 400;
  color: #858fa4;
  text-decoration: line-through;
}
.container-catalog__card-item-btn-add-to-cart {
  display: none;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .container-catalog__card-item {
    width: 31.397%;
  }
  .container-catalog__card-item-hero-from320px {
    max-height: 102.5%;
  }
  .container-catalog__card-item-recomendations {
    position: absolute;
    height: 26px;
    width: 68px;
    margin-left: 0.62rem;
    margin-top: 0.5rem;
  }
  .container-catalog__card-item-info-flex {
    gap: 0.5rem;
    padding: 0rem 1rem 1.25rem 1rem;
  }
  .container-catalog__card-item-availability-text,
  .container-catalog__card-item-show-room-text {
    font-size: 0.875rem;
  }
  .container-catalog__card-item-title {
    font-size: 1rem;
  }
  .container-catalog__card-item-rating-main-flex {
    display: flex;
    align-items: center;
    gap: 0.38rem;
  }
  .container-catalog__card-item-rating-text {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    color: #909cb5;
  }
  .container-catalog__card-item-prices-flex {
    flex-direction: row;
    gap: 1.69rem;
  }
  .container-catalog__card-item-current-price {
    font-size: 1rem;
  }
  .container-catalog__card-item-previous-price {
    font-size: 0.875rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-catalog__card-item {
    width: 31.77%;
  }
  .container-catalog__card-item-hero-from320px {
    display: none;
  }
  .container-catalog__card-item-hero-from1440px {
    display: block;
    width: 100%;
    max-height: 102.5%;
    object-fit: cover;
    border-radius: 6px 6px 0px 0px;
  }
  .container-catalog__card-item-recomendations {
    height: 32px;
    width: 84px;
    margin-top: 0.62rem;
  }
  .container-catalog__card-item-comparison-and-favourites-flex {
    top: 1.25rem;
    right: 0.66rem;
  }
  .container-catalog__card-item-availability-and-show-room-text-flex {
    display: flex;
    gap: 0.75rem;
  }
  .container-catalog__card-item-specificatinons-flex {
    display: block;
  }
  .container-catalog__card-item-specificatinons-flex {
    display: flex;
    flex-direction: column;
  }
  .container-catalog__card-item-specificatinon-title {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    color: #909cb5;
  }
  .container-catalog__card-item-specificatinon-desctiption {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    color: $dark-blue-col;
  }
  .container-catalog__card-item-prices-flex {
    flex-direction: column;
    gap: 0.25rem;
  }
  .container-catalog__card-item-btn-add-to-cart {
    position: absolute;
    display: flex;
    border: none;
    background: $red-col;
    padding: 0.75rem;
    width: fit-content;
    border-radius: 4px;
    right: 1rem;
    bottom: 1.25rem;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: $white-col;
  }
  .container-catalog__card-item-btn-add-to-cart-non-active {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
  .container-catalog__card-item-btn-add-to-cart-active {
    display: none;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-catalog__card-item {
    width: 23.7%;
  }
  .container-catalog__card-item-hero-from320px {
    display: none;
  }
  .container-catalog__card-item-hero-from1440px {
    display: block;
    width: 100%;
    max-height: 102.5%;
    object-fit: cover;
    border-radius: 6px 6px 0px 0px;
  }
  .container-catalog__card-item-recomendations {
    height: 32px;
    width: 84px;
    margin-top: 0.62rem;
  }
  .container-catalog__card-item-comparison-and-favourites-flex {
    top: 1.25rem;
    right: 0.66rem;
  }
  .container-catalog__card-item-availability-and-show-room-text-flex {
    display: flex;
    gap: 0.75rem;
  }
  .container-catalog__card-item-specificatinons-flex {
    display: block;
  }
  .container-catalog__card-item-specificatinons-flex {
    display: flex;
    flex-direction: column;
  }
  .container-catalog__card-item-specificatinon-title {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    color: #909cb5;
  }
  .container-catalog__card-item-specificatinon-desctiption {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    color: $dark-blue-col;
  }
}
</style>
