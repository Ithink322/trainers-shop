<template>
  <footer class="footer-container">
    <div class="footer-container__links-main-flex">
      <div class="footer-container__links-texts-1-2-flex">
        <div class="footer-container__links-flex">
          <h2 class="footer-container__title-1">Каталог</h2>
          <div class="footer-container__links-subflex">
            <a @click="goToMainPage">Главная</a>
            <a>Для дома</a>
            <a>Для фитнес клубов</a>
            <a>Акции</a>
            <a>Новинки</a>
            <a class="footer-container__text-brands-clicked">Наши бренды</a>
          </div>
        </div>
        <div class="footer-container__links-flex">
          <h2 class="footer-container__title-2">Поддержка</h2>
          <div class="footer-container__links-subflex">
            <a>Доставка и оплата</a>
            <a>Условия возврата</a>
            <a>Сервисная заявка</a>
            <a>Обслуживание<br class="footer__br-text-2" />фитнес клубов</a>
            <a>FAQ</a>
            <a>Инструкции</a>
            <a>Гарантия</a>
          </div>
        </div>
      </div>

      <div
        class="footer-container__links-texts-3-4-flex footer-container__gap-links-texts-3-4-flex"
      >
        <div class="footer-container__links-flex">
          <h2 class="footer-container__title-3">Услуги</h2>
          <div class="footer-container__links-subflex">
            <a>3D проект</a>
            <a>Консалтинг</a>
            <a
              >Коммерческое<br class="footer__br-text-3" />
              предложение</a
            >
            <a>Лизинг</a>
            <a>Trade-IN</a>
            <a>В рассрочку</a>
            <a>Сборка</a>
          </div>
        </div>
        <div class="footer-container__links-flex">
          <h2 class="footer-container__title-4">О компании</h2>
          <div class="footer-container__links-subflex">
            <a @click="goToAboutCompanyPage">О нас</a>
            <a>Новости</a>
            <a @click="goToBlogPage">Блог</a>
            <a @click="goToOurProjectsPage">Наши проекты</a>
            <a>Выставочный зал</a>
            <a @click="goToContactsPage">Контакты</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container__border"></div>
    <div class="footer-container__main-flex-nav">
      <div class="footer-container__info-from1440px-flex">
        <div class="footer-container__partners-and-lidears-links-flex">
          <a class="footer-container__link-partners">Become a Partner</a>
          <a class="footer-container__link-lidears">Для дилеров</a>
        </div>
        <div
          class="footer-container__btn-telegram-and-privacy-policy-and-public-offer-flex"
        >
          <a href="https://t.me/+luN23EslkPcxYWUy" target="_blank">
            <button class="footer-container__btn-telegram">
              <p class="footer-container__text-btn-telegram">
                Подписаться на рассылку
              </p>
              <img
                src="/imgs_main_page/telegram_icon.svg"
                alt=""
                class="footer-container__icon-btn-telegram"
              />
            </button>
          </a>
          <p class="footer-container__text-success">
            Вы успешно перешли по ссылке
          </p>
          <div class="footer-container__privacy-policy-and-public-offer-flex">
            <a
              @click="goToPrivacyPolicyPage"
              class="footer-container__privacy-policy-link"
              >Политика конфиденциальности</a
            >
            <a class="footer-container__public-offer-link">Публичная офферта</a>
          </div>
        </div>
        <div class="footer-container__telephones-and-order-a-call-btn-flex">
          <p class="footer-container__telephone-1">
            +7 (000) 000-00-00<br
              class="footer-container__brfrom768px-telephone"
            />
            для Москвы
          </p>
          <p class="footer-container__telephone-2">
            8 (800) 000-00-00<br
              class="footer-container__brfrom768px-telephone"
            />
            для России
          </p>
          <button class="footer-container__order-call-btn">
            Заказать звонок
          </button>
        </div>
        <div class="footer-container__email-and-send-letter-btn-flex">
          <p class="footer-container__email">wellfitness@wellfit.ru</p>
          <button class="footer-container__send-letter-btn">Написать</button>
        </div>
      </div>
      <div class="footer-container__logo-copyright-media-wallets-flex">
        <div class="footer-container__media-icons-flex">
          <a href=""
            ><img
              src="/imgs_main_page/inst_icon.svg"
              alt=""
              class="footer-container__icon-btn-inst"
          /></a>
          <a href=""
            ><img
              src="/imgs_main_page/facebook_icon.svg"
              alt=""
              class="footer-container__icon-btn-facebook"
          /></a>
          <a href=""
            ><img
              src="/imgs_main_page/youtube_icon.svg"
              alt=""
              class="footer-container__icon-btn-youtube"
          /></a>
        </div>
        <div class="footer-container__logo-copyright-flex">
          <img
            src="/imgs_main_page/footer-logo-from320px.svg"
            alt=""
            class="footer-container__logo-from320px"
          />
          <img
            src="/imgs_main_page/footer-logo-from768px.svg"
            alt=""
            class="footer-container__logo-from768px"
          />
          <p class="footer-container__copyright-text">
            <abbr>© </abbr>WellFitness. 2007 Все права защищены
          </p>
        </div>
        <div class="footer-container__wallets-flex">
          <img src="/imgs_main_page/visa-logo.svg" alt="visa-logo" />
          <img
            src="/imgs_main_page/mastercard-logo.svg"
            alt="mastercard-logo"
          />
          <img src="/imgs_main_page/web-money-logo.svg" alt="web-money-logo" />
          <img src="/imgs_main_page/paypal-logo.svg" alt="paypal-logo" />
        </div>
        <div class="footer-container__btns-partners-and-dilers-flex">
          <button class="footer-container__btn-partners">
            <p class="footer-container__text-btn-partners">Become a Partner</p>
          </button>
          <button class="footer-container__btn-dilers">
            <p class="footer-container__text-btn-dilers">Для дилеров</p>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "my-footer",
  mounted() {
    window.addEventListener("click", (e) => {
      if (e.target.closest(".footer-container__text-brands-clicked")) {
        this.$router.push("/");
        setTimeout(() => {
          const containerBrands = document.querySelector(".container-brands");
          containerBrands.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    });
    /* show .footer__text-success due to click on .footer__btn-telegram starts */
    const btn_telegram = document.querySelector(
      ".footer-container__btn-telegram"
    );
    let text = document.querySelector(".footer-container__text-success");
    btn_telegram.onclick = function () {
      text.style.display = "block";
    };
    /* show .footer__text-success due to click on .footer__btn-telegram ends */

    /* change styles for .footer__btn-dilers and .footer__btn-partners starts */
    const footer__dilers_btn = document.querySelector(
        ".footer-container__btn-dilers"
      ),
      footer__partners_btn = document.querySelector(
        ".footer-container__btn-partners"
      );
    let footer__dilers_text = document.querySelector(
        ".footer-container__text-btn-dilers"
      ),
      footer__partners_text = document.querySelector(
        ".footer-container__text-btn-partners"
      );
    footer__dilers_btn.onmouseover = function () {
      footer__dilers_btn.style.background = "#384255";
      footer__dilers_btn.style.border = "none";
      footer__dilers_text.style.color = "#ffffff";
      footer__partners_btn.style.background = "transparent";
      footer__partners_btn.style.border = "1px solid rgba(144, 156, 181, 0.5)";
      footer__partners_text.style.color = "#858fa4";
    };
    footer__dilers_btn.onmouseout = function () {
      footer__dilers_btn.style.background = "transparent";
      footer__dilers_btn.style.border = "1px solid rgba(144, 156, 181, 0.5)";
      footer__dilers_text.style.color = "#858fa4";
      footer__partners_btn.style.background = "#384255";
      footer__partners_btn.style.border = "none";
      footer__partners_text.style.color = "#ffffff";
    };
    footer__partners_btn.onmouseover = function () {
      footer__partners_btn.style.background = "transparent";
      footer__partners_btn.style.border = "1px solid rgba(144, 156, 181, 0.5)";
      footer__partners_text.style.color = "#858fa4";
      footer__dilers_btn.style.background = "#384255";
      footer__dilers_btn.style.border = "none";
      footer__dilers_text.style.color = "#ffffff";
    };
    footer__partners_btn.onmouseout = function () {
      footer__partners_btn.style.background = "#384255";
      footer__partners_btn.style.border = "none";
      footer__partners_text.style.color = "#ffffff";
      footer__dilers_btn.style.background = "transparent";
      footer__dilers_btn.style.border = "1px solid rgba(144, 156, 181, 0.5)";
      footer__dilers_text.style.color = "#858fa4";
    };
    /* change styles for .footer__btn-dilers and .footer__btn-partners ends */
  },
  methods: {
    goToMainPage() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    goToAboutCompanyPage() {
      this.$router.push("/AboutCompanyPage");
      window.scrollTo(0, 0);
    },
    goToBlogPage() {
      this.$router.push("/BlogPage");
      window.scrollTo(0, 0);
    },
    goToOurProjectsPage() {
      this.$router.push("/OurProjectsPage");
      window.scrollTo(0, 0);
    },
    goToContactsPage() {
      this.$router.push("/ContactsPage");
      window.scrollTo(0, 0);
    },
    goToPrivacyPolicyPage() {
      this.$router.push("/PrivacyPolicyPage");
      window.scrollTo(0, 0);
    },
  },
  /* beforeRouteUpdate(to, from, next) {
    // проверяем, что маршрут изменился
    if (to.path !== from.path) {
      // обновляем страницу
      location.reload();
    } else {
      // продолжаем нормальное выполнение маршрута
      next();
    }
  }, */
};
</script>

<style lang="scss">
$white-col: #ffffff;
$dark-col: #1a1a25;
$red-col: #f53b49;
$gray-col: #858fa4;
$dark-blue-col: #384255;
$blue: #4b7ee8;
.footer-container__brfrom768px-telephone,
.footer__btn-dilers,
.footer__btn-partners,
.footer-container__logo-from768px {
  display: none;
}
.footer-container {
  position: relative;
  padding: 1.75rem 0.75rem 1.5rem 0.75rem;
  background: $dark-col;
}
.footer-container__links-main-flex {
  display: flex;
  flex-flow: column wrap;
  gap: 1.875rem;
  max-width: max-content;
}
.footer-container__links-texts-1-2-flex,
.footer-container__links-texts-3-4-flex {
  display: flex;
  gap: 1.75rem;
  max-width: max-content;
}
.footer-container__links-subflex a {
  max-width: max-content;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  white-space: nowrap;
}
.footer-container__links-subflex a:hover {
  color: #eeeeee;
}
.footer-container__text-brands-clicked {
  cursor: pointer;
}
.footer-container__links-flex {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}
.footer-container__gap-links-texts-3-4-flex {
  gap: 3.55rem;
}
.footer-container__links-main-flex h2 {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  color: $white-col;
  margin: 0rem;
}
.footer-container__links-subflex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer-container__main-flex-nav {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
}
.footer-container__border {
  border: 1px solid rgba(133, 143, 164, 0.15);
  border-radius: 1px;
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
}
.footer-container__partners-and-lidears-links-flex {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  /* max-width: max-content; */
}
.footer-container__partners-and-lidears-links-flex a {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  cursor: pointer;
  /* max-width: max-content; */
}
.footer-container__info-from1440px-flex {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  width: 100%;
}
.footer-container__btn-telegram-and-privacy-policy-and-public-offer-flex {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.footer-container__btn-telegram {
  display: flex;
  justify-content: space-between;
  border: none;
  border-radius: 5px;
  padding: 0.875rem 1.031rem 0.875rem 1.031rem;
  background: rgba(133, 143, 164, 0.15);
  width: 100%;
  cursor: pointer;
}
.footer-container__text-btn-telegram {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  margin: 0rem;
}
.footer-container__text-success {
  display: none;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: rgb(14, 155, 14);
  margin: 0rem;
}
.footer-container__telephones-and-order-a-call-btn-flex {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: max-content;
}
.footer-container__brfrom768px-telephone {
  display: none;
}
.footer-container__telephones-and-order-a-call-btn-flex p {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 140%;
  color: $gray-col;
  margin: 0rem;
  max-width: max-content;
  white-space: nowrap;
}
.footer-container__order-call-btn,
.footer-container__send-letter-btn {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: $white-col;
  border: none;
  background: transparent;
  max-width: max-content;
  padding: 0rem;
  cursor: pointer;
}
.footer-container__email-and-send-letter-btn-flex {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.footer-container__email {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  max-width: max-content;
  margin: 0rem;
}
.footer-container__privacy-policy-and-public-offer-flex {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: max-content;
}
.footer-container__privacy-policy-and-public-offer-flex a {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $blue;
  max-width: max-content;
  cursor: pointer;
}
.footer-container__media-icons-flex {
  display: flex;
  gap: 1.875rem;
  max-width: max-content;
}
.footer-container__logo-copyright-media-wallets-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer-container__logo-copyright-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3.75rem;
  max-width: max-content;
}
.footer-container__logo-from320px {
  flex: 0;
  max-width: max-content;
}
.footer-container__copyright-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  margin: 0rem;
}
.footer-container__wallets-flex {
  display: flex;
  flex-flow: row nowrap;
  gap: 1.875rem;
  max-width: max-content;
  margin-top: 0.75rem;
}
.footer-container__wallets-flex img {
  flex: 0;
}
.footer-container__btns-partners-and-dilers-flex {
  display: none;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .footer-container {
    padding: 5.125rem 2.5rem 3.75rem 2.5rem;
  }
  .footer-container__links-main-flex {
    flex-direction: row;
    gap: 2.813rem;
  }
  .footer-container__links-texts-1-2-flex,
  .footer-container__links-texts-3-4-flex {
    gap: 2.813rem;
  }
  .footer-container__links-subflex a {
    font-size: 1rem;
  }
  .footer-container__links-flex {
    gap: 1.5rem;
  }
  .footer-container__links-main-flex h2 {
    font-size: 1.125rem;
  }
  .footer-container__links-subflex {
    gap: 0.75rem;
  }
  .footer-container__main-flex-nav {
    position: relative;
    flex-flow: row wrap;
  }
  .footer-container__border {
    border: 2px solid rgba(133, 143, 164, 0.15);
    margin-bottom: 2.5rem;
  }
  .footer-container__info-from1440px-flex {
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .footer-container__telephones-and-order-a-call-btn-flex {
    order: 1;
    gap: 0.75rem;
  }
  .footer-container__telephones-and-order-a-call-btn-flex p {
    font-size: 1rem;
  }
  .footer-container__email-and-send-letter-btn-flex {
    flex-direction: column;
    gap: 0.75rem;
    order: 2;
  }
  .footer-container__email {
    font-size: 0.875rem;
  }
  .footer-container__order-call-btn,
  .footer-container__send-letter-btn {
    font-size: 0.75rem;
  }
  .footer-container__btn-telegram-and-privacy-policy-and-public-offer-flex {
    order: 4;
  }
  .footer-container__btn-telegram {
    width: 250px;
    padding: 0.875rem 1.031rem 0.875rem 1.031rem;
  }
  .footer-container__text-btn-telegram {
    font-size: 0.875rem;
    margin: 0rem;
  }
  .footer-container__text-success {
    font-size: 0.875rem;
  }
  .footer-container__privacy-policy-and-public-offer-flex {
    flex-direction: column;
    gap: 0.75rem;
  }
  .footer-container__privacy-policy-and-public-offer-flex a {
    font-size: 0.875rem;
  }
  .footer-container__partners-and-lidears-links-flex {
    flex-direction: column;
    gap: 0.75rem;
    order: 3;
    height: 65px;
  }
  .footer-container__partners-and-lidears-links-flex a {
    font-size: 0.875rem;
  }
  .footer-container__logo-from320px {
    display: none;
  }
  .footer-container__logo-from768px {
    display: block;
    max-width: max-content;
  }
  .footer-container__logo-copyright-media-wallets-flex {
    flex-direction: row;
    order: 5;
    margin-top: 1.875rem;
    gap: 1.71rem;
  }
  .footer-container__logo-copyright-flex {
    margin-top: 0rem;
    order: 0;
  }
  .footer-container__media-icons-flex {
    gap: 0.625rem;
    order: 1;
    height: 25px;
  }
  .footer-container__wallets-flex {
    order: 2;
    height: 30px;
    margin-top: -0.45rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .footer-container__links-main-flex,
  .footer-container__links-texts-1-2-flex,
  .footer-container__links-texts-3-4-flex {
    gap: 6.3rem;
  }
  .footer-container__links-flex {
    gap: 2rem;
  }
  .footer-container__main-flex-nav {
    justify-content: space-between;
  }
  .footer-container__border {
    border: 2.5px solid rgba(133, 143, 164, 0.15);
  }
  .footer-container__email,
  .footer-container__partners-and-lidears-links-flex a {
    font-size: 1rem;
  }
  .footer-container__order-call-btn,
  .footer-container__send-letter-btn {
    font-size: 0.875rem;
  }
  .footer-container__btn-telegram {
    width: 255px;
  }
  .footer-container__logo-copyright-media-wallets-flex {
    gap: 8rem;
  }
  .footer-container__wallets-flex {
    height: 40px;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .footer-container__links-main-flex,
  .footer-container__links-texts-1-2-flex,
  .footer-container__links-texts-3-4-flex {
    gap: 6.3rem;
  }
  .footer-container__links-flex {
    gap: 2rem;
  }
  .footer-container__main-flex-nav {
    justify-content: space-between;
  }
  .footer-container__info-from1440px-flex {
    position: absolute;
    flex-direction: column;
    gap: 1.438rem;
    right: 0rem;
    margin-top: -25.7rem;
    width: 258.883px;
  }
  .footer-container__border {
    border: 2.5px solid rgba(133, 143, 164, 0.15);
  }
  .footer-container__email,
  .footer-container__partners-and-lidears-links-flex a {
    font-size: 1rem;
  }
  .footer-container__order-call-btn,
  .footer-container__send-letter-btn {
    font-size: 0.875rem;
  }
  .footer-container__btn-telegram-and-privacy-policy-and-public-offer-flex {
    order: -5;
    margin-top: 1.063rem;
  }
  .footer-container__btn-telegram {
    width: 255px;
  }
  .footer-container__telephones-and-order-a-call-btn-flex {
    order: -4;
  }
  .footer-container__email-and-send-letter-btn-flex {
    order: -3;
  }
  .footer-container__partners-and-lidears-links-flex {
    display: none;
  }
  .footer-container__btns-partners-and-dilers-flex {
    display: block;
  }
  .footer-container__btns-partners-and-dilers-flex {
    display: flex;
    gap: 1.875rem;
    order: 1;
  }
  .footer-container__btn-partners {
    height: 37px;
    padding: 0.625rem;
    border: none;
    border-radius: 6px;
    background: $dark-blue-col;
    cursor: pointer;
  }
  .footer-container__text-btn-partners {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: $white-col;
    margin: 0rem;
    white-space: nowrap;
  }
  .footer-container__btn-dilers {
    height: 37px;
    padding: 0.625rem;
    border: none;
    border-radius: 6px;
    background: transparent;
    border: 1px solid rgba(144, 156, 181, 0.5);
    cursor: pointer;
  }
  .footer-container__text-btn-dilers {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    color: $gray-col;
    margin: 0rem;
    white-space: nowrap;
  }
  .footer-container__logo-copyright-media-wallets-flex {
    order: -1;
  }
  .footer-container__media-icons-flex {
    order: 1;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .footer-container {
    padding: 5.125rem 15.938rem 3.75rem 15.938rem;
  }
}
</style>
