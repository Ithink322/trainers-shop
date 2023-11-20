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
              src="/imgs_main_page/comparison-icon.svg"
              alt=""
              class="header__comparison-icon"
            />
            <img
              src="/imgs_main_page/header__amount-circle.svg"
              alt=""
              class="header__comparison-amount-circle"
            />
            <p class="header__text-comparison-amount-circle">1</p>
            <img
              src="/imgs_main_page/heart-icon.svg"
              alt=""
              class="header__heart-icon"
            />
            <img
              src="/imgs_main_page/header__amount-circle.svg"
              alt=""
              class="header__heart-amount-circle"
            />
            <p class="header__text-heart-amount-circle">1</p>
            <img
              src="/imgs_main_page/header__cart-icon-from768px.svg"
              alt=""
              class="header__cart-icon-from768px"
            />
            <img
              src="/imgs_main_page/header__amount-circle.svg"
              alt=""
              class="header__cart-amount-circle"
            />
            <p class="header__text-cart-amount-circle">1</p>
          </div>
          <img
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
            <img
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
          <div class="header__titles-and-icons-flex-absolute">
            <div class="header__titles-submain-flex">
              <button @click="$router.push('/')" class="header__title">
                Главная
              </button>
              <button class="header__title header__brands-title">Бренды</button>
              <button class="header__title">Сервис</button>
              <button class="header__title">Услуги</button>
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
                src="/imgs_main_page/comparison-icon.svg"
                alt=""
                class="header__comparison-icon-from1440px"
              />
              <img
                src="/imgs_main_page/header__amount-circle.svg"
                alt=""
                class="header__comparison-amount-circle-from1440px"
              />
              <p class="header__text-comparison-amount-circle-from1440px">1</p>
              <img
                src="/imgs_main_page/heart-icon.svg"
                alt=""
                class="header__heart-icon-from1440px"
              />
              <img
                src="/imgs_main_page/header__amount-circle.svg"
                alt=""
                class="header__heart-amount-circle-from1440px"
              />
              <p class="header__text-heart-amount-circle-from1440px">1</p>
              <img
                src="/imgs_main_page/header__cart-icon-from768px.svg"
                alt=""
                class="header__cart-icon-from1440px"
              />
              <img
                src="/imgs_main_page/header__amount-circle.svg"
                alt=""
                class="header__cart-amount-circle-from1440px"
              />
              <p class="header__text-cart-amount-circle-from1440px">1</p>
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
      </div>
    </header>
  </body>
</template>

<script>
export default {
  name: "my-header",
  mounted() {
    window.addEventListener("click", (e) => {
      if (e.target.closest(".header__brands-title")) {
        this.$router.push("/");
        setTimeout(() => {
          const containerBrands = document.querySelector(".container-brands");
          containerBrands.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    });
    /* show and hide border-bottom .header__text-1 and .header__text-2 due to hover on .header__triangle-1 and .header__triangle-2 starts */
    let text_1 = document.querySelector(".header__text-1"),
      text_2 = document.querySelector(".header__text-2"),
      flex_1 = document.querySelector(".header__back-submain-flex-1"),
      flex_2 = document.querySelector(".header__back-submain-flex-2");
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
      text_1.style.borderBottom = "3px solid #f53b49";
    };
    flex_2.onclick = function () {
      text_2.style.borderBottom = "3px solid #f53b49";
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
.header__cart-icon-from320px {
  cursor: pointer;
}
.header__cart-amount-circle {
  display: none;
  position: absolute;
  width: 15.5px;
  height: 15.5px;
  margin-left: 1.343rem;
  margin-top: -0.67rem;
  cursor: pointer;
}
.header__text-cart-amount-circle {
  display: none;
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 0.625rem;
  font-weight: 400;
  color: $white-col;
  margin-top: -0.593rem;
  margin-left: 1.64rem;
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
.header__icons-from1440px-submain-flex {
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
  .header__comparison-amount-circle,
  .header__heart-amount-circle,
  .header__cart-amount-circle {
    display: none;
    position: absolute;
    width: 18px;
    height: 18px;
    margin-top: 0.18rem;
    cursor: pointer;
  }
  .header__comparison-amount-circle {
    margin-left: 1rem;
  }
  .header__heart-amount-circle {
    margin-left: 4.78rem;
  }
  .header__cart-amount-circle {
    margin-left: 8.48rem;
  }
  .header__text-comparison-amount-circle,
  .header__text-heart-amount-circle,
  .header__text-cart-amount-circle {
    display: none;
    position: absolute;
    font-family: "Inter", sans-serif;
    font-size: 0.625rem;
    font-weight: 400;
    color: $white-col;
    top: 0.909rem;
  }
  .header__text-comparison-amount-circle {
    margin-left: 1.38rem;
    margin-top: 0.72rem;
  }
  .header__text-heart-amount-circle {
    margin-left: 5.14rem;
    margin-top: 0.72rem;
  }
  .header__text-cart-amount-circle {
    margin-left: 8.88rem;
    margin-top: 0.72rem;
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
    .header__comparison-amount-circle-from1440px,
    .header__heart-amount-circle-from1440px,
    .header__cart-amount-circle-from1440px {
      display: none;
      position: absolute;
      margin-left: 0.8rem;
      margin-top: 0.4rem;
      cursor: pointer;
    }
    .header__comparison-amount-circle-from1440px {
      margin-left: 0.8rem;
      margin-top: 0.4rem;
    }
    .header__heart-amount-circle-from1440px {
      margin-left: 4.72rem;
      margin-top: 0.4rem;
    }
    .header__cart-amount-circle-from1440px {
      margin-left: 8.448rem;
      margin-top: 0.4rem;
    }
    .header__text-comparison-amount-circle-from1440px,
    .header__text-heart-amount-circle-from1440px,
    .header__text-cart-amount-circle-from1440px {
      display: none;
      position: absolute;
      font-family: "Inter", sans-serif;
      font-size: 0.625rem;
      font-weight: 400;
      color: $white-col;
      margin: 0rem;
      margin-top: 0.65rem;
    }
    .header__text-comparison-amount-circle-from1440px {
      margin-left: 1.3rem;
    }
    .header__text-heart-amount-circle-from1440px {
      margin-left: 5.25rem;
    }
    .header__text-cart-amount-circle-from1440px {
      margin-left: 8.93rem;
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
    .header__comparison-amount-circle-from1440px,
    .header__heart-amount-circle-from1440px,
    .header__cart-amount-circle-from1440px {
      margin-left: 0.8rem;
      margin-top: 0.4rem;
    }
    .header__heart-amount-circle-from1440px {
      margin-left: 5.4rem;
    }
    .header__cart-amount-circle-from1440px {
      margin-left: 9.71rem;
    }
    .header__text-comparison-amount-circle-from1440px,
    .header__text-heart-amount-circle-from1440px,
    .header__text-cart-amount-circle-from1440px {
      margin: 0rem;
      margin-top: 0.65rem;
    }
    .header__text-comparison-amount-circle-from1440px {
      margin-left: 1.3rem;
    }
    .header__text-heart-amount-circle-from1440px {
      margin-left: 5.87rem;
    }
    .header__text-cart-amount-circle-from1440px {
      margin-left: 10.18rem;
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
