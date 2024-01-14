<template>
  <body>
    <header class="header">
      <div class="header__back--dark">
        <img
          src="/imgs_main_page/logo-from320px.svg"
          alt=""
          class="header__logo-from320px"
        />
        <div class="header__back-flex">
          <div class="header__logo-and-city-flex">
            <img
              src="/imgs_main_page/logo-from768px.svg"
              alt=""
              class="header__logo-from768px"
            />
            <img
              src="/imgs_main_page/logo-from1440px.svg"
              alt=""
              class="header__logo-from1440px"
            />
            <div class="header__city-flex">
              <p class="header__city">Москва</p>
              <div class="header__city-triangle"></div>
            </div>
          </div>
          <div class="header__info-and-personal-cabinet-main-flex">
            <button class="header__btn-dilers">
              <p class="header__text-btn-dilers">Для дилеров</p>
            </button>
            <button class="header__btn-partners">
              <p class="header__text-btn-partners">Become a Partner</p>
            </button>
            <div class="header__border-0"></div>
            <div class="header__city-telephone-submain-flex">
              <p class="header__telephone">+7 (800) 000-00-00</p>
              <p class="header__text-city-telephone">МСК</p>
              <div class="header__city-telephone-triangle"></div>
            </div>
            <p class="header__text-order-a-call">Заказать звонок</p>
            <div class="header__border-order-a-call"></div>
            <div class="headear__personal-account-submain-flex">
              <p class="header__text-personal-account">Войти</p>
              <img
                src="/imgs_main_page/header__img-personal-account.png"
                alt=""
                class="header__img-personal-account"
              />
            </div>
          </div>
          <img
            src="/imgs_main_page/header__search-icon-from320px.svg"
            alt=""
            class="header__search-icon-from320px"
          />
          <img
            src="/imgs_main_page/header__search-icon-from768px.svg"
            alt=""
            class="header__search-icon-from768px"
          />
          <div class="header__border-1"></div>
          <div class="header__flex-icons">
            <img
              @click="goToComparisonPage"
              src="/imgs_main_page/comparison-icon.svg"
              alt=""
              class="header__comparison-icon"
            />
            <div
              @click="goToComparisonPage"
              class="header__comparison-amount-circle-and-text-div"
            >
              <div class="header__comparison-amount-circle-and-text-flex">
                <img
                  src="/imgs_main_page/amoun-circle-from768px.svg"
                  alt=""
                  class="header__comparison-amount-circle-from768px"
                />
                <span class="header__text-comparison-amount-circle">1</span>
              </div>
            </div>
            <img
              src="/imgs_main_page/heart-icon.svg"
              alt=""
              class="header__heart-icon"
              @click="goToFavouritesPage"
            />
            <div
              @click="goToFavouritesPage"
              class="header__heart-amount-circle-and-text-div"
            >
              <div class="header__heart-amount-circle-and-text-flex">
                <img
                  src="/imgs_main_page/header__amount-circle.svg"
                  alt=""
                  class="header__heart-amount-circle"
                />
                <img
                  src="/imgs_main_page/amoun-circle-from768px.svg"
                  alt=""
                  class="header__heart-amount-circle-from768px"
                />
                <span class="header__text-heart-amount-circle"></span>
              </div>
            </div>
            <img
              @click="goToCart"
              src="/imgs_main_page/header__cart-icon-from768px.svg"
              alt=""
              class="header__cart-icon-from768px"
            />
            <div
              @click="goToCart"
              class="header__cart-amount-circle-and-text-div"
            >
              <div class="header__cart-amount-circle-and-text-flex">
                <img
                  src="/imgs_main_page/header__amount-circle.svg"
                  alt=""
                  class="header__cart-amount-circle"
                />
                <img
                  src="/imgs_main_page/amoun-circle-from768px.svg"
                  alt=""
                  class="header__cart-amount-circle-from768px"
                />
                <span class="header__text-cart-amount-circle"></span>
              </div>
            </div>
          </div>
          <img
            @click="goToCart"
            src="/imgs_main_page/header__cart-icon-from320px.svg"
            alt=""
            class="header__cart-icon-from320px"
          />
          <img
            src="/imgs_main_page/header__burger-btn.svg"
            alt=""
            class="header__burger-btn"
          />
        </div>
        <div class="header__navigation-main-flex">
          <div class="header__directory-and-search-btns-submain-flex">
            <button class="header__btn-directory-from1440px">
              <img
                src="/imgs_main_page/Directory_btn.png"
                alt=""
                class="header__img-directory-from1440px"
              />
              <p class="header__text-btn-directory-from1440px">Каталог</p>
            </button>
            <img
              src="/imgs_main_page/header__search-icon-from768px.svg"
              alt=""
              class="header__search-icon-from1440px"
            />
            <div class="header__border-1-from1440px"></div>
          </div>
          <div class="header__titles-and-icons-flex-absolute">
            <div class="header__titles-submain-flex">
              <button @click="goToMainPage" class="header__title">
                Главная
              </button>
              <button
                @click="goToBrandsOnMainPage"
                class="header__title header__brands-title"
              >
                Бренды
              </button>
              <button @click="goToCatalogPage" class="header__title">
                Каталог
              </button>
              <button class="header__title header__support-title">
                Поддержка
              </button>
              <button
                @click="$router.push('/AboutCompanyPage')"
                class="header__title"
              >
                О компании
              </button>
              <button @click="$router.push('/BlogPage')" class="header__title">
                Блог
              </button>
              <button
                @click="$router.push('/WhereToBuyPage')"
                class="header__title"
              >
                Где купить
              </button>
              <button
                @click="$router.push('/ContactsPage')"
                class="header__title"
              >
                Контакты
              </button>
            </div>
            <div class="header__icons-from1440px-submain-flex">
              <img
                @click="goToComparisonPage"
                src="/imgs_main_page/comparison-icon.svg"
                alt=""
                class="header__comparison-icon-from1440px"
              />
              <div
                @click="goToComparisonPage"
                class="header__comparison-amount-circle-and-text-div-from1440px"
              >
                <div
                  class="header__comparison-amount-circle-and-text-flex-from1440px"
                >
                  <img
                    src="/imgs_main_page/amoun-circle-from768px.svg"
                    alt=""
                    class="header__comparison-amount-circle-from1440px"
                  />
                  <span class="header__text-comparison-amount-circle-from1440px"
                    >1</span
                  >
                </div>
              </div>
              <img
                src="/imgs_main_page/heart-icon.svg"
                alt=""
                class="header__heart-icon-from1440px"
                @click="goToFavouritesPage"
              />
              <div
                @click="goToFavouritesPage"
                class="header__heart-amount-circle-and-text-div-from1440px"
              >
                <div
                  class="header__heart-amount-circle-and-text-flex-from1440px"
                >
                  <img
                    src="/imgs_main_page/amoun-circle-from768px.svg"
                    alt=""
                    class="header__heart-amount-circle-from1440px"
                  />
                  <span class="header__text-heart-amount-circle-from1440px"
                    >1</span
                  >
                </div>
              </div>
              <img
                @click="goToCart"
                src="/imgs_main_page/header__cart-icon-from768px.svg"
                alt=""
                class="header__cart-icon-from1440px"
              />
              <div
                @click="goToCart"
                class="header__cart-amount-circle-and-text-div-from1440px"
              >
                <div
                  class="header__cart-amount-circle-and-text-flex-from1440px"
                >
                  <img
                    src="/imgs_main_page/amoun-circle-from768px.svg"
                    alt=""
                    class="header__cart-amount-circle-from1440px"
                  />
                  <span class="header__text-cart-amount-circle-from1440px"
                    >1</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header__border-wide"></div>
      <div class="header__back--dark-blue">
        <div class="header__back-main-flex">
          <div class="header__back-submain-flex-1">
            <p class="header__text-1">Для дома</p>
            <div class="header__triangle-1"></div>
          </div>
          <div class="header__border-2"></div>
          <div class="header__back-submain-flex-2">
            <p class="header__text-2">Для фитнес клуба</p>
            <div class="header__triangle-2"></div>
          </div>
        </div>
        <img
          src="/imgs_main_page/heart-icon.svg"
          alt=""
          class="header__favourites-icon-from320px"
          @click="goToFavouritesPage"
        />
        <div
          @click="goToFavouritesPage"
          class="header__heart-amount-circle-and-text-div-from320px"
        >
          <div class="header__heart-amount-circle-and-text-flex-from320px">
            <img
              src="/imgs_main_page/header__amount-circle.svg"
              alt=""
              class="header__heart-amount-circle-from320px"
            />
            <span class="header__text-heart-amount-circle-from320px"></span>
          </div>
        </div>
      </div>
      <ul class="header__dropdown-menu-for-home">
        <li @click="goToCatalogPage">Кардиотренажеры</li>
      </ul>
      <ul class="header__dropdown-menu-for-fitnes-club">
        <li @click="goToCatalogPage">Кардиотренажеры</li>
      </ul>
    </header>
  </body>
</template>

<script>
export default {
  name: "my-header",
  methods: {
    goToBrandsOnMainPage() {
      this.$router.push("/");
      setTimeout(() => {
        const containerBrands = document.querySelector(".container-brands");
        containerBrands.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    goToMainPage() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    goToCatalogPage() {
      this.$router.push("/CatalogPage");
      window.scrollTo(0, 0);
      document
        .querySelector(".header__dropdown-menu-for-home")
        .classList.remove("header__show-for-dropdown-menus");
      document
        .querySelector(".header__dropdown-menu-for-fitnes-club")
        .classList.remove("header__show-for-dropdown-menus");
    },
    goToCart() {
      this.$router.push("/Cart");
      window.scrollTo(0, 0);
    },
    goToFavouritesPage() {
      this.$router.push("/FavoritesPage");
      window.scrollTo(0, 0);
    },
    goToComparisonPage() {
      this.$router.push("/ComparisonPage");
      window.scrollTo(0, 0);
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
  },
  mounted() {
    /* show and hide border-bottom .header__text-1 and .header__text-2 due to hover on .header__triangle-1 and .header__triangle-2 starts */
    const text_1 = document.querySelector(".header__text-1"),
      text_2 = document.querySelector(".header__text-2"),
      flex_1 = document.querySelector(".header__back-submain-flex-1"),
      flex_2 = document.querySelector(".header__back-submain-flex-2"),
      dropdownMenuHome = document.querySelector(
        ".header__dropdown-menu-for-home"
      ),
      dropdownMenuClub = document.querySelector(
        ".header__dropdown-menu-for-fitnes-club"
      );
    flex_1.onmouseover = function () {
      text_1.style.borderBottom = "3px solid #f53b49";
    };
    flex_1.onmouseout = function () {
      text_1.style.borderBottom = "3px solid #2a2c38";
    };
    flex_2.onmouseover = function () {
      text_2.style.borderBottom = "3px solid #f53b49";
    };
    flex_2.onmouseout = function () {
      text_2.style.borderBottom = "3px solid #2a2c38";
    };
    flex_1.onclick = function () {
      dropdownMenuHome.classList.toggle("header__show-for-dropdown-menus");
    };
    flex_2.onclick = function () {
      dropdownMenuClub.classList.toggle("header__show-for-dropdown-menus");
    };
    /* show and hide border-bottom .header__text-1 and .header__text-2 due to hover on .header__triangle-1 and .header__triangle-2 ends */

    /* change styles for .header__btn-dilers and .header__btn-partners starts */
    const dilers_btn = document.querySelector(".header__btn-dilers"),
      partners_btn = document.querySelector(".header__btn-partners");
    let dilers_text = document.querySelector(".header__text-btn-dilers"),
      partners_text = document.querySelector(".header__text-btn-partners");
    dilers_btn.onmouseover = function () {
      dilers_btn.style.background = "#384255";
      dilers_text.style.color = "#ffffff"; /* "#858fa4" */
      partners_btn.style.background = "transparent";
      partners_text.style.color = "#858fa4";
    };
    dilers_btn.onmouseout = function () {
      dilers_btn.style.background = "transparent";
      dilers_text.style.color = "#858fa4";
      partners_btn.style.background = "#384255";
      partners_text.style.color = "#ffffff";
    };
    partners_btn.onmouseover = function () {
      partners_btn.style.background = "#384255";
      partners_text.style.color = "#ffffff";
    };
    /* change styles for .header__btn-dilers and .header__btn-partners ends */
    this.updateTotalQty();
    this.updateTotalOfFavorites();
    this.updateTotalOfComparisons();
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
html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
  /* outline: solid 1px red; */
}
body {
  min-width: 20em;
  background-color: #f6f6f6;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-family: "Inter", sans-serif;
  font-family: "Raleway", sans-serif;
}
.header {
  position: relative;
}
.header__back--dark {
  position: relative;
  width: 100%;
  height: 66px;
  padding: 1rem 0.625rem 0.625rem 0.625rem; /* Сверху | Справа | Снизу | Слева */
  background: $dark-col;
}
.header__back-flex {
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
}
.header__logo-from320px {
  position: absolute;
  margin-left: 0rem;
  margin-top: 0.688rem;
}
.header__search-icon-from320px {
  cursor: pointer;
}
.header__border-1 {
  width: 2px;
  height: 40px;
  border-radius: 1px;
  background: rgba(133, 143, 164, 0.15);
}
.header__border-2 {
  width: 1px;
  height: 30px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.15);
}
.header__heart-amount-circle-and-text-div-from320px {
  position: absolute;
  display: none;
  right: 1.7rem;
  margin-top: -1.95rem;
}
.header__heart-amount-circle-and-text-flex-from320px {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__cart-icon-from320px {
  cursor: pointer;
}
.header__cart-amount-circle-and-text-div {
  display: none;
}
.header__cart-amount-circle-and-text-flex {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.8rem;
  margin-top: -0.27rem;
}
.header__cart-amount-circle {
  position: absolute;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.header__text-heart-amount-circle-from320px,
.header__text-cart-amount-circle {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 0.625rem;
  font-weight: 400;
  color: $white-col;
}
.header__burger-btn {
  height: 17px;
  width: 28px;
  cursor: pointer;
}
.header__back--dark-blue {
  position: relative;
  width: 100%;
  height: 38px;
  padding: 0.25rem 0.625rem;
  background: #2a2c38;
}
.header__back-main-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  height: 30px;
  max-width: max-content;
}
.header__back-submain-flex-1,
.header__back-submain-flex-2 {
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  height: 125%;
  cursor: pointer;
}
.header__text-1,
.header__text-2 {
  font-size: 0.75rem;
  color: $white-col;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  line-height: 2.45rem;
  margin: 0rem;
}
.header__triangle-1,
.header__triangle-2 {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid $white-col;
  margin-top: 1.0625rem;
}
.header__favourites-icon-from320px {
  position: absolute;
  right: 0.25rem;
  margin-top: -2rem;
  cursor: pointer;
}
.header__dropdown-menu-for-home,
.header__dropdown-menu-for-fitnes-club {
  position: absolute;
  list-style: none;
  font-size: 0.875rem;
  padding: 1.1rem 1rem 1.1rem 1rem;
  width: 100%;
  margin-top: 0rem;
  line-height: 1.8rem;
  color: $white-col;
  z-index: 2;
  display: none;
}
.header__dropdown-menu-for-home {
  background: #72226b;
}
.header__dropdown-menu-for-fitnes-club {
  background: #312272;
}
.header__dropdown-menu-for-home li,
.header__dropdown-menu-for-fitnes-club li {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}
.header__show-for-dropdown-menus {
  display: block;
}
.header__city-flex,
.header__comparison-icon,
.header__heart-icon,
.header__comparison-amount-circle,
.header__heart-amount-circle,
.header__text-comparison-amount-circle,
.header__text-heart-amount-circle,
.header__btn-dilers,
.header__btn-partners,
.header__border-0,
.header__telephone,
.header__text-city-telephone,
.header__city-telephone-triangle,
.header__text-order-a-call,
.header__border-order-a-call,
.header__text-personal-account,
.header__img-personal-account,
.header__border-wide,
.header__btn-directory-from1440px,
.header__titles-subsubmain-flex,
.header__logo-from768px,
.header__search-icon-from768px,
.header__cart-icon-from768px,
.header__logo-from1440px,
.header__titles-submain-flex,
.header__directory-and-search-btns-submain-flex,
.header__icons-from1440px-submain-flex,
.header__comparison-amount-circle-from768px,
.header__heart-amount-circle-from768px,
.header__cart-amount-circle-from768px {
  display: none;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .header__back--dark {
    padding: 1rem 2.5rem 1rem 2.5rem;
    height: 72px;
  }
  .header__back-flex {
    gap: 1.875rem;
  }
  .header__favourites-icon-from320px {
    display: none;
  }
  .header__dropdown-menu-for-home,
  .header__dropdown-menu-for-fitnes-club {
    padding: 1.1rem 3rem 1.1rem 3rem;
  }
  .header__logo-and-city-flex {
    position: absolute;
    display: flex;
    gap: 1.875rem;
    left: 0rem;
    padding-left: 2.5rem;
  }
  .header__logo-from768px {
    display: block;
  }
  .header__city-flex {
    display: flex;
    gap: 0.625rem;
    cursor: pointer;
  }
  .header__city {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    color: $gray-col;
    font-weight: 400;
    line-height: 140%;
    margin: 0rem;
    cursor: pointer;
  }
  .header__city-triangle {
    display: block;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid $gray-col;
    margin-top: 0.5rem;
    cursor: pointer;
  }
  .header__flex-icons {
    display: flex;
    gap: 1.25rem;
  }
  .header__comparison-icon {
    display: block;
    cursor: pointer;
  }
  .header__heart-icon {
    display: block;
    cursor: pointer;
  }
  .header__heart-amount-circle-and-text-div-from320px {
    display: none;
  }
  .header__cart-amount-circle {
    display: none;
  }
  .header__comparison-amount-circle-and-text-div {
    position: absolute;
    display: none;
    margin-top: 0.635rem;
    margin-left: 1.5rem;
  }
  .header__heart-amount-circle-and-text-div {
    position: absolute;
    display: none;
    margin-top: 0.635rem;
    margin-left: 5.5rem;
  }
  .header__comparison-amount-circle-and-text-flex,
  .header__heart-amount-circle-and-text-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header__cart-amount-circle-and-text-div {
    position: absolute;
    display: none;
    margin-top: 0.875rem;
    margin-left: 7.3rem;
  }
  .header__comparison-amount-circle-from768px,
  .header__heart-amount-circle-from768px,
  .header__cart-amount-circle-from768px {
    display: block;
    position: absolute;
    cursor: pointer;
  }
  .header__text-comparison-amount-circle,
  .header__text-heart-amount-circle,
  .header__text-cart-amount-circle {
    display: block;
    position: absolute;
    font-family: "Inter", sans-serif;
    font-size: 0.625rem;
    font-weight: 400;
    color: $white-col;
    top: 0.909rem;
  }
  .header__text-comparison-amount-circle,
  .header__text-heart-amount-circle,
  .header__text-cart-amount-circle {
    margin-top: -1.3rem;
  }
  .header__search-icon {
    top: 1.6rem;
    right: 20.9rem;
    width: 20px;
    height: 20px;
  }
  .header__logo-from320px,
  .header__search-icon-from320px,
  .header__cart-icon-from320px {
    display: none;
  }
  .header__search-icon-from768px {
    display: block;
    cursor: pointer;
  }
  .header__cart-icon-from768px {
    display: block;
    cursor: pointer;
  }
  .header__border-1 {
    margin-left: -1rem;
  }
  .header__burger-btn {
    top: 1.62rem;
    right: 2.5rem;
  }
  .header__back--dark-blue {
    padding: 0.5rem 2.5rem 0.5rem 2.5rem;
    height: 42px;
  }
  .header__text-1,
  .header__text-2 {
    font-size: 0.875rem;
    line-height: 2.2rem;
  }
  .header__text-1:hover,
  .header__text-2:hover {
    border-bottom: 3px solid $red-col;
  }
  .header__triangle-1,
  .header__triangle-2 {
    margin-top: 0.9rem;
  }

  /* 1024px = 64em */
  @media (min-width: 64em) {
    .header__search-icon {
      height: 21px;
    }
  }

  /* 1440px = 90em */
  @media (min-width: 90em) {
    .header__back--dark {
      height: 163px;
      padding: 1.5rem 2.5rem 1rem 2.5rem;
    }
    .header__back-flex {
      flex-flow: row wrap;
    }
    .header__logo-from768px {
      display: none;
    }
    .header__logo-from1440px,
    .header__btn-dilers,
    .header__btn-partners,
    .header__border-0,
    .header__telephone,
    .header__text-city-telephone,
    .header__city-telephone-triangle,
    .header__text-order-a-call,
    .header__border-order-a-call,
    .header__text-personal-account,
    .header__img-personal-account,
    .header__border-wide,
    .header__btn-directory-from1440px,
    .header__titles-submain-flex {
      display: block;
    }
    .header__logo-and-city-flex {
      gap: 3.125rem;
      height: 37px;
    }
    .header__info-and-personal-cabinet-main-flex {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      height: 37px;
    }
    .header__btn-dilers {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.675rem;
      border-radius: 6px;
      border: none;
      background: transparent;
      cursor: pointer;
    }
    .header__text-btn-dilers {
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 700;
      margin: 0rem;
      color: #909cb5;
    }
    .header__btn-partners {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.675rem;
      border-radius: 6px;
      background: #384255;
      border: none;
      cursor: pointer;
    }
    .header__text-btn-partners {
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 700;
      margin: 0rem;
      color: $white-col;
    }
    .header__border-0 {
      width: 1px;
      height: 30px;
      background: rgba(133, 143, 164, 0.15);
    }
    .header__city-telephone-submain-flex {
      display: flex;
      gap: 0.25rem;
      align-items: center;
    }
    .header__telephone {
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      color: $white-col;
    }
    .header__text-city-telephone {
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: $gray-col;
      cursor: pointer;
    }
    .header__city-telephone-triangle {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid $gray-col;
      cursor: pointer;
    }
    .header__text-order-a-call {
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: $red-col;
      cursor: pointer;
    }
    .header__border-order-a-call {
      width: 1px;
      height: 30px;
      background: rgba(133, 143, 164, 0.15);
    }
    .headear__personal-account-submain-flex {
      display: flex;
      gap: 0.875rem;
      align-items: center;
      cursor: pointer;
    }
    .header__text-personal-account {
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: $white-col;
    }
    .header__img-personal-account {
      width: 20px;
      height: 20px;
    }
    .header__border-wide {
      position: absolute;
      width: 100%;
      border: 1px solid rgba(133, 143, 164, 0.15);
      margin-top: -5.2rem;
    }
    .header__navigation-main-flex {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding: 1rem 0rem 1rem 0rem;
      margin-top: 1.1rem;
      max-width: max-content;
    }
    .header__directory-and-search-btns-submain-flex {
      display: flex;
      justify-content: space-between;
    }
    .header__btn-directory-from1440px {
      position: relative;
      border-radius: 4px;
      background: $red-col;
      border: none;
      padding: 0.75rem 1.25rem 0.813rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.375rem;
      cursor: pointer;
    }
    .header__img-directory-from1440px {
      padding: 0.25rem;
    }
    .header__text-btn-directory-from1440px {
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      margin: 0rem;
      color: $white-col;
    }
    .header__search-icon-from1440px {
      margin-left: 3.125rem;
      margin-right: 1.125rem;
      cursor: pointer;
    }
    .header__border-1-from1440px {
      width: 2px;
      height: 40px;
      border-radius: 1px;
      background: rgba(133, 143, 164, 0.15);
    }
    .header__titles-and-icons-flex-absolute {
      position: absolute;
      display: flex;
      gap: 6.1rem;
      right: 0rem;
      padding-right: 2.5rem;
    }
    .header__titles-submain-flex {
      display: block;
    }
    .header__titles-submain-flex {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .header__title {
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      color: $white-col;
      font-weight: 400;
      line-height: 140%;
      padding: 0.75rem 0.875rem 0.813rem 0.875rem;
      gap: 0.5rem;
      border: none;
      background: transparent;
      cursor: pointer;
    }
    .header__title:hover {
      display: flex;
      padding: 12px 14px 13px 14px;
      border-radius: 5px;
      background: rgba(133, 143, 164, 0.15);
    }
    .header__search-icon-from768px,
    .header__border-1,
    .header__flex-icons {
      display: none;
    }
    .header__icons-from1440px-submain-flex {
      display: block;
    }
    .header__icons-from1440px-submain-flex {
      display: flex;
      gap: 1.25rem;
    }
    .header__comparison-icon-from1440px,
    .header__heart-icon-from1440px,
    .header__cart-icon-from1440px {
      cursor: pointer;
    }
    .header__comparison-amount-circle-and-text-div-from1440px {
      position: absolute;
      display: none;
      margin-left: 1.5rem;
      margin-top: 0.92rem;
    }
    .header__heart-amount-circle-and-text-div-from1440px {
      position: absolute;
      display: none;
      margin-left: 5.4rem;
      margin-top: 0.92rem;
    }
    .header__cart-amount-circle-and-text-div-from1440px {
      position: absolute;
      display: none;
      margin-left: 9rem;
      margin-top: 0.92rem;
    }
    .header__comparison-amount-circle-and-text-flex-from1440px,
    .header__heart-amount-circle-and-text-flex-from1440px,
    .header__cart-amount-circle-and-text-flex-from1440px {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header__comparison-amount-circle-from1440px,
    .header__heart-amount-circle-from1440px,
    .header__cart-amount-circle-from1440px {
      position: absolute;
      cursor: pointer;
    }
    .header__text-comparison-amount-circle-from1440px,
    .header__text-heart-amount-circle-from1440px,
    .header__text-cart-amount-circle-from1440px {
      position: absolute;
      font-family: "Inter", sans-serif;
      font-size: 0.625rem;
      font-weight: 400;
      color: $white-col;
    }
    .header__back--dark-blue {
      padding: 0.6125rem 2.5rem 0.5rem 2.5rem;
      height: 44px;
    }
    .header__text-1,
    .header__text-2 {
      line-height: 2.1rem;
    }
    .header__burger-btn {
      display: none;
    }
  }
  /* 1920px = 120em */
  @media (min-width: 120em) {
    .header__back--dark {
      padding: 1.5rem 15.938rem 1rem 15.938rem;
    }
    .header__back-flex {
      padding-left: 15.938rem;
    }
    .header__dropdown-menu-for-home,
    .header__dropdown-menu-for-fitnes-club {
      padding: 1.1rem 17.2rem 1.1rem 17.2rem;
    }
    .header__logo-and-city-flex {
      padding-left: 15.938rem;
    }
    .header__info-and-personal-cabinet-main-flex {
      gap: 1.875rem;
    }
    .header__titles-and-icons-flex-absolute {
      gap: 8.1rem;
      padding-right: 15.938rem;
    }
    .header__icons-from1440px-submain-flex {
      gap: 1.875rem;
    }
    .header__heart-amount-circle-and-text-div-from1440px {
      margin-left: 6.2rem;
    }
    .header__cart-amount-circle-and-text-div-from1440px {
      margin-left: 10.28rem;
    }
    .header__back--dark-blue {
      padding: 0.6125rem 15.938rem 0.5rem 15.938rem;
      height: 44px;
    }
    .header__text-1,
    .header__text-2 {
      line-height: 2.1rem;
    }
  }
}
</style>
