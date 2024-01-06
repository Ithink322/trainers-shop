<template>
  <div class="background">
    <div class="container-current-item">
      <div class="container-current-item__home-icon-and-home-title-flex">
        <img
          src="imgs_main_page/img-home-icon.svg"
          alt=""
          class="container-current-item__home-icon"
        />
        <span class="container-current-item__home-title">Продукт</span>
      </div>
      <h1 class="container-current-item__title">{{ item.title }}</h1>
      <div class="container-current-item__title-border"></div>
      <div class="container-current-item__container-carousel">
        <div class="container-current-item__container-carousel-flex">
          <img
            src="imgs_main_page/currentItem-carousel-hero-1.svg"
            alt=""
            class="container-current-item__container-carousel-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-2.svg"
            alt=""
            class="container-current-item__container-carousel-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-3.svg"
            alt=""
            class="container-current-item__container-carousel-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-4.svg"
            alt=""
            class="container-current-item__container-carousel-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-5.svg"
            alt=""
            class="container-current-item__container-carousel-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-5.svg"
            alt=""
            class="container-current-item__container-carousel-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-5.svg"
            alt=""
            class="container-current-item__container-carousel-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-5.svg"
            alt=""
            class="container-current-item__container-carousel-hero"
          />
        </div>
      </div>
      <div class="container-current-item__container-carousel-mini">
        <button
          class="container-current-item__container-carousel-mini-btn-prev"
        >
          <img src="imgs_main_page/currentItem-btn-prev.svg" alt="" />
        </button>
        <div class="container-current-item__container-carousel-mini-flex">
          <img
            src="imgs_main_page/currentItem-carousel-hero-1.svg"
            alt=""
            class="container-current-item__container-carousel-mini-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-2.svg"
            alt=""
            class="container-current-item__container-carousel-mini-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-3.svg"
            alt=""
            class="container-current-item__container-carousel-mini-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-4.svg"
            alt=""
            class="container-current-item__container-carousel-mini-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-5.svg"
            alt=""
            class="container-current-item__container-carousel-mini-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-5.svg"
            alt=""
            class="container-current-item__container-carousel-mini-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-5.svg"
            alt=""
            class="container-current-item__container-carousel-mini-hero"
          />
          <img
            src="imgs_main_page/currentItem-carousel-hero-5.svg"
            alt=""
            class="container-current-item__container-carousel-mini-hero"
          />
        </div>
        <button
          class="container-current-item__container-carousel-mini-btn-next"
        >
          <img src="imgs_main_page/currentItem-btn-next.svg" alt="" />
        </button>
      </div>
      <div class="container-current-item__info">
        <div class="container-current-item__info-logo-and-recomendations-flex">
          <img
            :src="item.brandLogoSrc"
            alt=""
            class="container-current-item__info-logo"
          />
          <div class="container-current-item__info-recomendations-flex">
            <div class="container-current-item__info-recomendation-flex">
              <img
                src="imgs_main_page/recomendation-icon-1.svg"
                alt=""
                class="container-current-item__info-recomendation-icon"
              />
              <span class="container-current-item__info-recomendation-text"
                >Выгодно</span
              >
            </div>
            <div class="container-current-item__info-recomendation-flex">
              <img
                src="imgs_main_page/recomendation-icon-2.svg"
                alt=""
                class="container-current-item__info-recomendation-icon"
              />
              <span class="container-current-item__info-recomendation-text"
                >Рекомендуем</span
              >
            </div>
            <div class="container-current-item__info-recomendation-flex">
              <img
                src="imgs_main_page/recomendation-icon-3.svg"
                alt=""
                class="container-current-item__info-recomendation-icon"
              />
              <span class="container-current-item__info-recomendation-text"
                >Новинка</span
              >
            </div>
          </div>
        </div>
        <div class="container-current-item__info-btns-specs-details-main-flex">
          <div
            class="container-current-item__info-add-to-favorites-and-add-to-comparison-btns-and-specs-flex"
          >
            <div
              class="container-current-item__info-add-to-favorites-and-add-to-comparison-btns-flex"
            >
              <button
                @click="addToFavorites(item)"
                class="container-current-item__info-btn-add-to-favorites"
              >
                <img :src="currentIcon" alt="" />
                В избранное
              </button>
              <button
                class="container-current-item__info-btn-add-to-comparison"
                @click="addToComparisons(item)"
              >
                <img
                  src="imgs_main_page/card-item-comparison-icon.svg"
                  alt=""
                />
                В сравнение
              </button>
            </div>
            <ul class="container-current-item__info-specs-list">
              <li>
                Тип дорожки: <span>{{ item.treadmillType }}</span>
              </li>
              <li>
                Мощность двигателя: <span>{{ item.enginePower }}</span>
              </li>
              <li>
                Тип двигателя: <span>{{ item.engineType }}</span>
              </li>
              <li>
                Регулировка скорости:
                <span>{{ item.speedAdjustment }}</span>
              </li>
              <li>
                Беговое полотно: <span>{{ item.runnigTrack }}</span>
              </li>
              <li>
                Беговое полотно (ДхШ):
                <span>{{ item.qtyoflayersrunnigTrack }}</span>
              </li>
              <li>
                Аудиосистема MP3: <span>{{ item.MP3 }}</span>
              </li>
              <li>
                Консоль: <span>{{ item.console }}</span>
              </li>
            </ul>
          </div>
          <div class="container-current-item__info-details">
            <div class="container-current-item__info-details-main-flex">
              <div
                class="container-current-item__info-details-in-available-text-and-circles-and-showroom-text-flex"
              >
                <div
                  class="container-current-item__info-details-in-available-text-and-circles-flex"
                >
                  <span
                    class="container-current-item__info-details-in-available-text"
                    >В наличии</span
                  >
                  <div
                    class="container-current-item__info-details-in-available-circles-flex"
                  >
                    <div
                      class="container-current-item__info-details-in-available-circle"
                    ></div>
                    <div
                      class="container-current-item__info-details-in-available-circle"
                    ></div>
                    <div
                      class="container-current-item__info-details-in-available-circle"
                    ></div>
                  </div>
                </div>
                <span class="container-current-item__info-details-showroom-text"
                  >Есть в шоу-руме</span
                >
              </div>
              <div class="container-current-item__info-details-prices-flex">
                <span class="container-current-item__info-details-current-price"
                  >{{ item.currentPrice }} ₽</span
                >
                <span
                  class="container-current-item__info-details-previous-price"
                  >{{ item.previousPrice }} ₽</span
                >
              </div>
              <div
                class="container-current-item__info-details-price-for-diller-rect-flex"
              >
                <span
                  class="container-current-item__info-details-price-for-diller"
                  >{{ item.previousPrice }} ₽</span
                >
                <span
                  class="container-current-item__info-details-price-for-diller-text"
                  >Цена для дилера</span
                >
              </div>
              <div
                class="container-current-item__info-details-bonus-money-flex"
              >
                <span
                  class="container-current-item__info-details-bonus-money-cost"
                  >+ 600
                </span>
                <span
                  class="container-current-item__info-details-bonus-money-text"
                  >Бонусных рублей</span
                >
              </div>
              <div
                class="container-current-item__info-details-counter-and-btn-add-to-cart-flex"
              >
                <div class="container-current-item__info-details-counter-flex">
                  <button
                    class="container-current-item__info-details-counter-minus-btn"
                  >
                    <img src="imgs_main_page/minus-btn.svg" alt="" />
                  </button>
                  <span class="container-current-item__info-details-counter"
                    >1</span
                  >
                  <button
                    class="container-current-item__info-details-counter-plus-btn"
                  >
                    <img src="imgs_main_page/plus-btn.svg" alt="" />
                  </button>
                </div>
                <button
                  @click="addToCart(item)"
                  class="container-current-item__info-details-add-to-cart-btn"
                >
                  <img
                    src="imgs_main_page/thick-cart-icon.svg"
                    alt=""
                    class="container-current-item__info-details-add-to-cart-btn-icon"
                  />
                  В корзину
                </button>
              </div>
              <button
                class="container-current-item__info-details-installment-btn"
              >
                Купить в рассрочку от 16 658 ₽ /мес
              </button>
            </div>
          </div>
        </div>
        <div class="container-current-item__info-configuration">
          <span class="container-current-item__info-configuration-title"
            >Конфигурация</span
          >
          <div class="container-current-item__info-configuration-main-flex">
            <div
              class="container-current-item__info-configuration-subtitle-and-btns-flex"
            >
              <span class="container-current-item__info-configuration-subtitle"
                >Размер, см</span
              >
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-size"
              >
                1500 × 2000
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-size"
              >
                1700 × 2000
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-size"
              >
                1900 × 2000
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-size"
              >
                1700 × 2000
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-size"
              >
                1900 × 2000
              </button>
            </div>
            <div
              class="container-current-item__info-configuration-border"
            ></div>
            <div
              class="container-current-item__info-configuration-subtitle-and-btns-flex"
            >
              <span class="container-current-item__info-configuration-subtitle"
                >Вес стека, г</span
              >
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-weight"
              >
                150
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-weight"
              >
                500
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-weight"
              >
                800
              </button>
            </div>
            <div
              class="container-current-item__info-configuration-border"
            ></div>
            <div
              class="container-current-item__info-configuration-subtitle-and-btns-flex"
            >
              <span class="container-current-item__info-configuration-subtitle"
                >Цвет
              </span>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-black-circle"
                ></div>
                Черный
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-graphite-circle"
                ></div>
                Графит
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-white-circle"
                ></div>
                Белый
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-red-circle"
                ></div>
                Красный
              </button>
            </div>
            <div
              class="container-current-item__info-configuration-border"
            ></div>
            <div
              class="container-current-item__info-configuration-subtitle-and-btns-flex"
            >
              <span class="container-current-item__info-configuration-subtitle"
                >Цвет рамы
              </span>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-frame-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-black-circle"
                ></div>
                Черный
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-frame-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-graphite-circle"
                ></div>
                Графит
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-frame-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-white-circle"
                ></div>
                Белый
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-frame-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-red-circle"
                ></div>
                Красный
              </button>
            </div>
            <div
              class="container-current-item__info-configuration-border"
            ></div>
            <div
              class="container-current-item__info-configuration-subtitle-and-btns-flex"
            >
              <span class="container-current-item__info-configuration-subtitle"
                >Цвет обивки
              </span>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-upholstery-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-black-circle"
                ></div>
                Черный
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-upholstery-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-graphite-circle"
                ></div>
                Графит
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-upholstery-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-white-circle"
                ></div>
                Белый
              </button>
              <button
                class="container-current-item__info-configuration-btn container-current-item__info-configuration-btn-upholstery-color"
              >
                <div
                  class="container-current-item__info-configuration-btn-red-circle"
                ></div>
                Красный
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Cart from "./Cart.vue";
export default {
  name: "CurrentItem",
  components: { Cart },
  computed: {
    ...mapGetters(["getSelectedItem"]),
    item() {
      return JSON.parse(localStorage.getItem("CurrentItem"));
    },
  },
  data() {
    return {
      selectedCharacteristics: {},
      pricesInCharacteristics: 0,
      selectedCharacteristics: {
        characteristic1: "",
        characteristic2: "",
        characteristic3: "",
        characteristic4: "",
        characteristic5: "",
      },
      favouriteIconDisabled: "imgs_main_page/heart-iconn.svg",
      favouriteIconActivated:
        "/imgs_main_page/card-item-favourite-icon-activated.svg",
      currentIcon: "imgs_main_page/heart-iconn.svg",
    };
  },
  mounted() {
    const buttonsSize = document.querySelectorAll(
        ".container-current-item__info-configuration-btn-size"
      ),
      buttonsWeight = document.querySelectorAll(
        ".container-current-item__info-configuration-btn-weight"
      ),
      buttonsColor = document.querySelectorAll(
        ".container-current-item__info-configuration-btn-color"
      ),
      buttonsFramecolor = document.querySelectorAll(
        ".container-current-item__info-configuration-btn-frame-color"
      ),
      buttonsUpholsterycolor = document.querySelectorAll(
        ".container-current-item__info-configuration-btn-upholstery-color"
      );
    buttonsSize.forEach((button) => {
      button.addEventListener("click", () => {
        buttonsSize.forEach((btn) =>
          btn.classList.remove(
            "container-current-item__info-configuration-btn-active"
          )
        );
        button.classList.add(
          "container-current-item__info-configuration-btn-active"
        );
      });
    });
    buttonsWeight.forEach((button) => {
      button.addEventListener("click", () => {
        buttonsWeight.forEach((btn) =>
          btn.classList.remove(
            "container-current-item__info-configuration-btn-active"
          )
        );
        button.classList.add(
          "container-current-item__info-configuration-btn-active"
        );
      });
    });
    buttonsColor.forEach((button) => {
      button.addEventListener("click", () => {
        buttonsColor.forEach((btn) =>
          btn.classList.remove(
            "container-current-item__info-configuration-btn-active"
          )
        );
        button.classList.add(
          "container-current-item__info-configuration-btn-active"
        );
      });
    });
    buttonsFramecolor.forEach((button) => {
      button.addEventListener("click", () => {
        buttonsFramecolor.forEach((btn) =>
          btn.classList.remove(
            "container-current-item__info-configuration-btn-active"
          )
        );
        button.classList.add(
          "container-current-item__info-configuration-btn-active"
        );
      });
    });
    buttonsUpholsterycolor.forEach((button) => {
      button.addEventListener("click", () => {
        buttonsUpholsterycolor.forEach((btn) =>
          btn.classList.remove(
            "container-current-item__info-configuration-btn-active"
          )
        );
        button.classList.add(
          "container-current-item__info-configuration-btn-active"
        );
      });
    });
    /* carousel .container-current-item__container-carousel-flex and .container-current-item__container-carousel-mini-flex starts */
    const prevBtn = document.querySelector(
        ".container-current-item__container-carousel-mini-btn-prev"
      ),
      nextBtn = document.querySelector(
        ".container-current-item__container-carousel-mini-btn-next"
      ),
      carouselContainer = document.querySelector(
        ".container-current-item__container-carousel-flex"
      ),
      carouselContainerMini = document.querySelector(
        ".container-current-item__container-carousel-mini-flex"
      ),
      carouselItems = document.querySelectorAll(
        ".container-current-item__container-carousel-hero"
      );
    let currentPosContainer = 0,
      currentPosMiniContainer = 0;
    prevBtn.addEventListener("click", () => {
      currentPosContainer += 100;
      if (currentPosContainer > 0) {
        currentPosContainer = -100 * (carouselItems.length - 1);
      }
      carouselContainer.style.transform = `translateX(${currentPosContainer}%)`;

      currentPosMiniContainer += 78;
      if (currentPosMiniContainer > 0) {
        currentPosMiniContainer = -78 * (carouselItems.length - 1);
      }
      carouselContainerMini.style.transform = `translateX(${currentPosMiniContainer}px)`;
    });
    nextBtn.addEventListener("click", () => {
      currentPosContainer -= 100;
      if (currentPosContainer < -100 * (carouselItems.length - 1)) {
        currentPosContainer = 0;
      }
      carouselContainer.style.transform = `translateX(${currentPosContainer}%)`;

      currentPosMiniContainer -= 78;
      if (currentPosMiniContainer < -78 * (carouselItems.length - 1)) {
        currentPosMiniContainer = 0;
      }
      carouselContainerMini.style.transform = `translateX(${currentPosMiniContainer}px)`;
    });
    /* carousel .container-current-item__container-carousel-flex and .container-current-item__container-carousel-mini-flex ends */
    /* counter .container-current-item__info-details-counter starts */
    const minusBtn = document.querySelector(
        ".container-current-item__info-details-counter-minus-btn"
      ),
      plusBtn = document.querySelector(
        ".container-current-item__info-details-counter-plus-btn"
      );
    let counterText = document.querySelector(
        ".container-current-item__info-details-counter"
      ),
      count = 1;
    minusBtn.onclick = () => {
      if (count > 1) {
        count--;
        counterText.innerText = count;
      }
    };
    plusBtn.onclick = () => {
      count++;
      counterText.innerText = count;
    };
    this.updateTotalQty();
    /* counter .container-current-item__info-details-counter ends */
    this.updateTotalOfFavorites();
  },
  methods: {
    addToCart(item) {
      let cart = localStorage.getItem("cart");

      let qty = document.querySelector(
        ".container-current-item__info-details-counter"
      ).innerText;

      let newItem = [
        {
          id: item.id,
          title: item.title,
          currentPrice: item.currentPrice,
          previousPrice: item.previousPrice,
          qty: qty,
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
            itemInCart.qty = Number(itemInCart.qty) + Number(qty);
            newItem = null;
          }
        });

        Array.prototype.push.apply(cart, newItem);

        localStorage.setItem("cart", JSON.stringify(cart));
      }
      this.updateTotalQty();
      this.getSelectedCharacteristics(item);
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
    addToFavorites(item) {
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
    getSelectedCharacteristics(item) {
      const characteristicBtnsSize = document.querySelectorAll(
          ".container-current-item__info-configuration-btn-size"
        ),
        characteristicBtnsWeight = document.querySelectorAll(
          ".container-current-item__info-configuration-btn-weight"
        ),
        characteristicBtnsColor = document.querySelectorAll(
          ".container-current-item__info-configuration-btn-color"
        ),
        characteristicBtnsFrameColor = document.querySelectorAll(
          ".container-current-item__info-configuration-btn-frame-color"
        ),
        characteristicBtnsUpholsteryColor = document.querySelectorAll(
          ".container-current-item__info-configuration-btn-upholstery-color"
        );
      characteristicBtnsSize.forEach((button) => {
        if (
          button.classList.contains(
            "container-current-item__info-configuration-btn-active"
          )
        ) {
          this.selectedCharacteristics.characteristic1 = button.innerText;
        }
      });
      characteristicBtnsWeight.forEach((button) => {
        if (
          button.classList.contains(
            "container-current-item__info-configuration-btn-active"
          )
        ) {
          this.selectedCharacteristics.characteristic2 = button.innerText;
        }
      });
      characteristicBtnsColor.forEach((button) => {
        if (
          button.classList.contains(
            "container-current-item__info-configuration-btn-active"
          )
        ) {
          this.selectedCharacteristics.characteristic3 = button.innerText;
        }
      });
      characteristicBtnsFrameColor.forEach((button) => {
        if (
          button.classList.contains(
            "container-current-item__info-configuration-btn-active"
          )
        ) {
          this.selectedCharacteristics.characteristic4 = button.innerText;
        }
      });
      characteristicBtnsUpholsteryColor.forEach((button) => {
        if (
          button.classList.contains(
            "container-current-item__info-configuration-btn-active"
          )
        ) {
          this.selectedCharacteristics.characteristic5 = button.innerText;
        }
      });
      localStorage.setItem(
        `selectedCharacteristics_${item.id}`,
        JSON.stringify(this.selectedCharacteristics)
      );
    },
  },
  created() {
    this.updateFavoriteHeartStatus(this.item);
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
.background {
  background: $white-col;
}
.container-current-item {
  position: relative;
  padding: 0.625rem 0.625rem 3.75rem 0.625rem;
}
.container-current-item__home-icon-and-home-title-flex {
  display: flex;
  gap: 0.75rem;
}
.container-current-item__home-title {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #858fa4;
  margin: 0rem;
}
.container-current-item__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a1a25;
  margin-top: 1.87rem;
  margin-bottom: 1rem;
}
.container-current-item__title-border {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.2);
  margin-bottom: 1.31rem;
}
.container-current-item__container-carousel {
  overflow: hidden;
}
.container-current-item__container-carousel-flex {
  display: flex;
}
.container-current-item__container-carousel-hero {
  flex-shrink: 0;
  flex-basis: auto;
  width: 100%;
  height: 78vw;
  object-fit: cover;
}
.container-current-item__container-carousel-mini {
  overflow: hidden;
  margin: 1rem 1.5rem;
}
.container-current-item__container-carousel-mini-flex {
  display: flex;
  gap: 0.5rem;
}
.container-current-item__container-carousel-mini-hero {
  height: 70px;
  width: 70px;
}
.container-current-item__container-carousel-mini-btn-prev {
  position: absolute;
  border: none;
  background: transparent;
  height: 70px;
  width: 32px;
  padding: 0rem;
  left: 0.625rem;
  cursor: pointer;
}
.container-current-item__container-carousel-mini-btn-prev img {
  margin-left: -1rem;
}
.container-current-item__container-carousel-mini-btn-next {
  position: absolute;
  border: none;
  background: transparent;
  height: 70px;
  width: 32px;
  padding: 0rem;
  right: 0.625rem;
  margin-top: -4.4rem;
  cursor: pointer;
}
.container-current-item__container-carousel-mini-btn-next img {
  margin-left: 1rem;
}
.container-current-item__info {
  margin-top: 1rem;
}
.container-current-item__info-logo {
  display: block;
  margin: 0rem auto;
}
.container-current-item__info-recomendations-flex {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 0.875rem;
}
.container-current-item__info-recomendation-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container-current-item__info-recomendation-icon {
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto;
}
.container-current-item__info-recomendation-text {
  font-family: "Inter", sans-serif;
  font-size: 0.6875rem;
  font-weight: 900;
  color: $dark-col;
}
.container-current-item__info-logo-and-recomendations-flex::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.2);
  left: 0rem;
  margin-top: 1.5rem;
}
.container-current-item__info-btns-specs-details-main-flex {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}
.container-current-item__info-add-to-favorites-and-add-to-comparison-btns-flex {
  display: flex;
  gap: 1.88rem;
}
.container-current-item__info-btn-add-to-favorites,
.container-current-item__info-btn-add-to-comparison {
  display: flex;
  gap: 0.75rem;
  border: none;
  background: transparent;
  padding: 0rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $dark-blue-col;
  white-space: nowrap;
  cursor: pointer;
}
.container-current-item__info-btn-add-to-favorites img {
  width: 21px;
  height: 20px;
}
.container-current-item__info-specs-list {
  list-style: none;
  padding: 0rem;
  margin-top: 1.25rem;
  line-height: 1.6rem;
}
.container-current-item__info-specs-list li {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #909cb5;
}
.container-current-item__info-specs-list li span {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $dark-blue-col;
}
.container-current-item__info-details {
  position: relative;
  padding: 1.875rem 1.25rem 1.25rem 1.25rem;
  background: #f6f6f6;
  border-radius: 6px;
}
.container-current-item__info-details-main-flex {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.container-current-item__info-details-in-available-text-and-circles-and-showroom-text-flex {
  display: flex;
  justify-content: space-between;
}
.container-current-item__info-details-in-available-text-and-circles-flex {
  display: flex;
  align-items: center;
  gap: 0.38rem;
}
.container-current-item__info-details-in-available-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #2fc509;
}
.container-current-item__info-details-in-available-circles-flex {
  display: flex;
  gap: 0.12rem;
}
.container-current-item__info-details-in-available-circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2fc509;
}
.container-current-item__info-details-showroom-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b7ee8;
}
.container-current-item__info-details-prices-flex {
  display: flex;
  align-items: center;
  gap: 0.62rem;
}
.container-current-item__info-details-current-price {
  font-family: "Inter", sans-serif;
  font-size: 1.625rem;
  font-weight: 700;
  color: $dark-col;
}
.container-current-item__info-details-previous-price {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: line-through;
  color: $gray-col;
}
.container-current-item__info-details-price-for-diller-rect-flex {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  gap: 0.625rem;
  background: #909cb5;
  border-radius: 4px;
}
.container-current-item__info-details-price-for-diller {
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: $white-col;
}
.container-current-item__info-details-price-for-diller-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: $white-col;
}
.container-current-item__info-details-bonus-money-flex {
  display: flex;
  grid-gap: 0.625rem;
}
.container-current-item__info-details-bonus-money-cost {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $red-col;
}
.container-current-item__info-details-bonus-money-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $dark-blue-col;
}
.container-current-item__info-details-counter-and-btn-add-to-cart-flex::before {
  content: "";
  position: absolute;
  width: 86.2%;
  border: 1px solid rgba(133, 143, 164, 0.2);
  margin-top: -5rem;
}
.container-current-item__info-details-counter-and-btn-add-to-cart-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
}
.container-current-item__info-details-counter-flex {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.container-current-item__info-details-counter-flex span {
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  color: #858fa4;
}
.container-current-item__info-details-counter-minus-btn,
.container-current-item__info-details-counter-plus-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
}
.container-current-item__info-details-add-to-cart-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.38rem;
  width: fit-content;
  border-radius: 4px;
  border: none;
  background: $red-col;
  padding: 0.75rem 1.25rem 0.8125rem 1.25rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $white-col;
}
.container-current-item__info-details-installment-btn {
  border: none;
  background: transparent;
  padding: 0rem;
  width: fit-content;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $red-col;
}
.container-current-item__info-configuration {
  background: #f6f6f6;
  border-radius: 6px;
  padding: 1.875rem;
  margin-top: 2rem;
}
.container-current-item__info-configuration-title {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: $dark-col;
}
.container-current-item__info-configuration-main-flex {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 1rem;
}
.container-current-item__info-configuration-subtitle-and-btns-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.container-current-item__info-configuration-border {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.2);
}
.container-current-item__info-configuration-subtitle {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $dark-blue-col;
}
.container-current-item__info-configuration-btn {
  display: flex;
  align-items: center;
  gap: 0.38rem;
  border-radius: 4px;
  border: 1px solid rgba(144, 156, 181, 0.5);
  background: #f6f6f6;
  padding: 0.5rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  color: $dark-blue-col;
}
.container-current-item__info-configuration-btn.container-current-item__info-configuration-btn-active {
  background: $white-col;
  border: 2px solid $red-col;
}
.container-current-item__info-configuration-btn-black-circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #000;
}
.container-current-item__info-configuration-btn-graphite-circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #505050;
}
.container-current-item__info-configuration-btn-white-circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #909cb5;
  background: $white-col;
}
.container-current-item__info-configuration-btn-red-circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: $red-col;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .container-current-item {
    padding: 2.5rem 2.5rem 3.75rem 2.5rem;
  }
  .container-current-item__container-carousel-mini-btn-prev {
    left: 2.5rem;
  }
  .container-current-item__container-carousel-mini-btn-next {
    right: 2.5rem;
  }
  .container-current-item__info {
    margin-top: 3rem;
  }
  .container-current-item__info-logo-and-recomendations-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container-current-item__info-logo {
    margin: 0rem;
  }
  .container-current-item__info-recomendations-flex {
    margin-top: 0rem;
  }
  .container-current-item__info-logo-and-recomendations-flex::after {
    margin-top: 7rem;
  }
  .container-current-item__info-btns-specs-details-main-flex {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .container-current-item__info-btn-add-to-favorites,
  .container-current-item__info-btn-add-to-comparison,
  .container-current-item__info-specs-list li,
  .container-current-item__info-specs-list li span {
    font-size: 1rem;
  }
  .container-current-item__info-details {
    width: 50%;
  }
  .container-current-item__info-details-current-price {
    font-size: 1.875rem;
  }
  .container-current-item__info-details-previous-price {
    font-size: 1.125rem;
  }
  .container-current-item__info-details-counter-and-btn-add-to-cart-flex::before {
    width: 87.4%;
  }
  .container-current-item__info-configuration-btn,
  .container-current-item__info-configuration-btn-additon-cost,
  .container-current-item__info-details-configuration-btn-additon-cost,
  .container-current-item__info-configuration-btn-addition-cost,
  .container-current-item__info-configuration-btn-addition-cost {
    font-size: 0.875rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-current-item__container-carousel {
    width: 560px;
  }
  .container-current-item__container-carousel-hero {
    width: 560px;
    height: 477px;
  }
  .container-current-item__container-carousel-mini {
    width: 495px;
    margin: 1.81rem 2rem;
  }
  .container-current-item__container-carousel-mini-btn-next {
    right: 0rem;
    left: 35.5rem;
  }
  .container-current-item__info {
    margin-top: 3rem;
  }
  .container-current-item__info-btns-specs-details-main-flex {
    position: absolute;
    flex-direction: column;
    margin-top: -45rem;
    right: 2.5rem;
    gap: 1rem;
  }
  .container-current-item__info-add-to-favorites-and-add-to-comparison-btns-and-specs-flex {
    margin-left: -1.5rem;
  }
  .container-current-item__info-details {
    width: 332px;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-current-item {
    padding: 3.75rem 10.313rem 7.5rem 10.313rem;
  }
  .container-current-item__container-carousel {
    margin-top: 2.81rem;
  }
  .container-current-item__home-title {
    font-size: 0.875rem;
  }
  .container-current-item__title {
    font-size: 2.375rem;
    margin-bottom: 1.25rem;
  }
  .container-current-item__title-border {
    position: absolute;
    width: 100%;
    left: 0rem;
  }
  .container-current-item__container-carousel-mini-btn-prev {
    left: 10.313rem;
  }
  .container-current-item__container-carousel-mini-btn-next {
    left: 43.3rem;
  }
  .container-current-item__info-logo-and-recomendations-flex {
    position: absolute;
    gap: 7.75rem;
    right: 10.313rem;
    margin-top: -8.7rem;
  }
  .container-current-item__info-btns-specs-details-main-flex {
    margin-top: 30rem;
    right: 58.7rem;
  }
  .container-current-item__info-configuration {
    width: 45.8%;
    margin-top: -31rem;
    margin-left: 37.6rem;
    margin-bottom: 24rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-current-item {
    padding: 3.75rem 15.938rem 7.5rem 15.938rem;
  }
  .container-current-item__container-carousel-mini-btn-prev {
    left: 15.938rem;
  }
  .container-current-item__container-carousel-mini-btn-next {
    left: 49rem;
  }
  .container-current-item__info-logo-and-recomendations-flex {
    gap: 20rem;
    right: 15.938rem;
    margin-top: -29.7rem;
  }
  .container-current-item__info-btns-specs-details-main-flex {
    flex-direction: row;
    margin-top: -21rem;
    right: 16rem;
    gap: 4rem;
  }
  .container-current-item__info-configuration {
    width: 49.85%;
    margin-top: -10rem;
    margin-left: 44.1rem;
    margin-bottom: 0rem;
  }
}
</style>
