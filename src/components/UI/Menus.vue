<template>
  <div class="burger-menu">
    <div class="burger-menu__container">
      <p class="burger-menu__city-text">Москва</p>
      <div class="burger-menu__city-triangle"></div>
      <p class="burger-menu__personal-account-text">Войти</p>
      <img
        src="/imgs_main_page/header__img-personal-account.png"
        alt=""
        class="burger-menu__personal-account-img"
      />
      <img src="/imgs_main_page/x-menus.svg" alt="" class="burger-menu__x" />
      <input placeholder="Поиск" class="burger-menu__search-form" />
      <img
        src="/imgs_main_page/header__search-icon.svg"
        alt=""
        class="burger-menu__search-form-icon"
      />
      <div class="burger-menu__search-form-border"></div>
      <p class="burger-menu__title">Каталог</p>
      <div class="burger-menu__btn-for-house">
        <p class="burger-menu__btn-for-house-text">Для дома</p>
        <img
          src="/imgs_main_page/arrow_red.png"
          alt=""
          class="burger-menu__btn-for-house-arrow"
        />
      </div>
      <div class="burger-menu__btn-for-clubs">
        <p class="burger-menu__btn-for-clubs-text">Для фитнес клубов</p>
        <img
          src="/imgs_main_page/arrow_red.png"
          alt=""
          class="burger-menu__btn-for-clubs-arrow"
        />
      </div>
      <div class="burger-menu__border-1"></div>
      <div class="burger-menu__flex-subtitles">
        <a
          @click="goToMainPage"
          class="cursor-pointer burger-menu__subtitles burger-menu__text-main"
          >Главная</a
        ><br class="burger-menu__br-subtitles" />
        <a
          @click="goToBrandPage"
          class="cursor-pointer burger-menu__subtitles text-brands-burger-clicked"
          >Бренды</a
        ><br class="burger-menu__br-subtitles" />
        <a
          @click="goToServicePage"
          class="cursor-pointer burger-menu__subtitles burger-menu__subtitles--margin-top burger-menu__text-service"
          >Сервис<br class="burger-menu__br-subtitles"
        /></a>
        <a
          @click="goToServicesPage"
          class="cursor-pointer burger-menu__subtitles burger-menu__text-services"
          >Услуги<br class="burger-menu__br-subtitles"
        /></a>
        <a
          class="cursor-pointer burger-menu__subtitles burger-menu__text-support"
          >Поддержка<br class="burger-menu__br-subtitles"
        /></a>
        <a
          @click="goToAboutCompanyPage"
          class="cursor-pointer burger-menu__subtitles burger-menu__text-about-company"
          >О компании<br class="burger-menu__br-subtitles"
        /></a>
        <a
          @click="goToBlogPage"
          class="cursor-pointer burger-menu__subtitles burger-menu__text-blog"
          >Блог<br class="burger-menu__br-subtitles"
        /></a>
        <a
          @click="goToWhereToBuyPage"
          class="cursor-pointer burger-menu__subtitles burger-menu__text-where-to-buy"
          >Где купить<br class="burger-menu__br-subtitles"
        /></a>
        <a
          @click="goToContactsPage"
          class="cursor-pointer burger-menu__subtitles burger-menu__text-contacts"
          >Контакты</a
        >
      </div>
      <div class="burger-menu__border-2"></div>
      <p class="burger-menu__telephone">+7 (800) 000-00-00</p>
      <p class="burger-menu__order-a-call-text">Заказать звонок</p>
      <div class="burger-menu__border-3"></div>
      <p class="burger-menu__for-dilers-text">Для дилеров</p>
      <p class="burger-menu__for-partners-text">Become a partner</p>
    </div>
  </div>
  <div class="login-menu__shadow"></div>
  <div class="login-menu">
    <img src="/imgs_main_page/x-menus.svg" alt="" class="login-menu__x" />
    <div class="login-menu__container">
      <p class="login-menu__title">Вход в личный кабинет</p>
      <button class="login-menu__btn-customer">
        <p class="login-menu__text-customer">Покупатель</p>
      </button>
      <button class="login-menu__btn-authorized-dealer">
        <p class="login-menu__text-authorized-dealer">Авторизированный дилер</p>
      </button>
      <p class="login-menu__text-enter-with">Войти с помощью</p>
      <img
        src="/imgs_main_page/login-menu__btn-enter-with-google.svg"
        alt=""
        class="login-menu__btn-enter-with-google"
      />
      <img
        src="/imgs_main_page/login-menu__btn-enter-with-facebook.svg"
        alt=""
        class="login-menu__btn-enter-with-facebook"
      />
      <input class="login-menu__input-your-email" placeholder="Ваша почта" />
      <input
        class="login-menu__input-password"
        placeholder="Пароль"
        type="password"
      />
      <img
        src="/imgs_main_page/login-menu__btn-open-eye-input-password.png"
        alt=""
        class="login-menu__btn-open-eye-input-password"
      />
      <img
        src="/imgs_main_page/login-menu__btn-close-eye-input-password.png"
        alt=""
        class="login-menu__btn-close-eye-input-password"
      />
      <p class="login-menu__text-forget-the-password">Забыли пароль?</p>
      <button class="login-menu__btn-enter">
        <p class="login-menu__text-enter">Войти</p>
      </button>
      <p class="login-menu__text-registr">Зарегистрироваться</p>
    </div>
  </div>
  <div class="password-recovery-menu__shadow"></div>
  <div class="password-recovery-menu">
    <img
      src="/imgs_main_page/x-menus.svg"
      alt=""
      class="password-recovery-menu__x"
    />
    <div class="password-recovery-menu__container">
      <p class="password-recovery-menu__title">Восстановление пароля</p>
      <p class="password-recovery-menu__text">
        Мы отправим письмо со ссылкой для смены пароля на указанный<br
          class="password-recovery-menu__br-text"
        />
        Вами при регистрации адрес. Откройте письмо и перейдите по<br
          class="password-recovery-menu__br-text"
        />
        ссылке из письма.
      </p>
      <p class="password-recovery-menu__text-enter-your-email-pls">
        Введите свой email
      </p>
      <input
        type="text"
        class="password-recovery-menu__input-email"
        placeholder="Ваша почта"
      />
      <button class="password-recovery-menu__btn">
        <p class="password-recovery-menu__text-btn">Восстановить пароль</p>
      </button>
    </div>
  </div>
  <div class="recovery-password-instructions__shadow"></div>
  <div class="recovery-password-instructions">
    <div class="recovery-password-instructions__container">
      <p class="recovery-password-instructions__title">Восстановление пароля</p>
      <p class="recovery-password-instructions__text">
        Мы отправили вам письмо со сылкой для восстановления пароля на указанный
        e-mail.<br class="recovery-password-instructions__br-text" /><br
          class="recovery-password-instructions__br-text"
        /><br class="recovery-password-instructions__br-text" />
        <span class="recovery-password-instructions__span-text"
          >Осталось сделать 3 шага.</span
        ><br class="recovery-password-instructions__br-text" />
        1. Зайдите в свой почтовый ящик и найдите письмо от
        info@wellfitness.ru.<br
          class="recovery-password-instructions__br-text"
        />
        Если вы не нашли письма, проверьте папку «Спам».<br
          class="recovery-password-instructions__br-text"
        /><br class="recovery-password-instructions__br-text" />
        2. Перейдите по ссылке, указанной в письме.<br
          class="recovery-password-instructions__br-text"
        /><br class="recovery-password-instructions__br-text" />
        3. Придумайте и введите новый пароль.
      </p>
    </div>
  </div>
  <div class="for-clubs-menu">
    <div class="for-clubs-menu__container">
      <p class="for-clubs-menu__btn-back">Назад</p>
      <img src="/imgs_main_page/x-menus.svg" alt="" class="for-clubs-menu__x" />
      <p class="for-clubs-menu__title">Для фитнес клубов</p>
      <p class="for-clubs-menu__subtitles">
        <a href=""
          >Кардиотренажеры
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-clubs-menu__subtitles-arrow" /></a
        ><br class="for-clubs-menu__br-subtitles" />
        <a href=""
          >Силовые тренажеры
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-clubs-menu__subtitles-arrow" /></a
        ><br class="for-clubs-menu__br-subtitles" />
        <a href=""
          >Уличные виды спорта
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-clubs-menu__subtitles-arrow" /></a
        ><br class="for-clubs-menu__br-subtitles" />
        <a href=""
          >Свободные веса
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-clubs-menu__subtitles-arrow" /></a
        ><br class="for-clubs-menu__br-subtitles" />
        <a href=""
          >Игровые столы
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-clubs-menu__subtitles-arrow" /></a
        ><br class="for-clubs-menu__br-subtitles" />
        <a href=""
          >Массажное оборудование
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-clubs-menu__subtitles-arrow" /></a
        ><br class="for-clubs-menu__br-subtitles" />
        <a href=""
          >Фитнес аксессуары
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-clubs-menu__subtitles-arrow" /></a
        ><br class="for-clubs-menu__br-subtitles" />
        <a href=""
          >Функциональный тренинг
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-clubs-menu__subtitles-arrow"
        /></a>
      </p>
      <div class="for-clubs-menu__border-1"></div>
      <div class="for-clubs-menu__border-2"></div>
      <div class="for-clubs-menu__border-3"></div>
      <div class="for-clubs-menu__border-4"></div>
      <div class="for-clubs-menu__border-5"></div>
      <div class="for-clubs-menu__border-6"></div>
      <div class="for-clubs-menu__border-7"></div>
      <div class="for-clubs-menu__border-8"></div>
      <div class="for-clubs-menu__border-9"></div>
      <p class="for-clubs-menu__telephone">+7 (800) 000-00-00</p>
      <p class="for-clubs-menu__order-a-call-text">Заказать звонок</p>
      <div class="for-clubs-menu__border-10"></div>
      <p class="for-clubs-menu__for-dilers-text">Для дилеров</p>
      <p class="for-clubs-menu__for-partners-text">Become a partner</p>
    </div>
  </div>
  <div class="for-house-menu">
    <div class="for-house-menu__container">
      <p class="for-house-menu__btn-back">Назад</p>
      <img src="/imgs_main_page/x-menus.svg" alt="" class="for-house-menu__x" />
      <p class="for-house-menu__title">Для дома</p>
      <p class="for-house-menu__subtitles">
        <a href=""
          >Кардиотренажеры
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-house-menu__subtitles-arrow" /></a
        ><br class="for-house-menu__br-subtitles" />
        <a href=""
          >Силовые тренажеры
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-house-menu__subtitles-arrow" /></a
        ><br class="for-house-menu__br-subtitles" />
        <a href=""
          >Уличные виды спорта
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-house-menu__subtitles-arrow" /></a
        ><br class="for-house-menu__br-subtitles" />
        <a href=""
          >Свободные веса
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-house-menu__subtitles-arrow" /></a
        ><br class="for-house-menu__br-subtitles" />
        <a href=""
          >Игровые столы
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-house-menu__subtitles-arrow" /></a
        ><br class="for-house-menu__br-subtitles" />
        <a href=""
          >Массажное оборудование
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-house-menu__subtitles-arrow" /></a
        ><br class="for-house-menu__br-subtitles" />
        <a href=""
          >Фитнес аксессуары
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-house-menu__subtitles-arrow" /></a
        ><br class="for-house-menu__br-subtitles" />
        <a href=""
          >Функциональный тренинг
          <img
            src="/imgs_main_page/arrow_gray.svg"
            alt=""
            class="for-house-menu__subtitles-arrow"
        /></a>
      </p>
      <div class="for-house-menu__border-1"></div>
      <div class="for-house-menu__border-2"></div>
      <div class="for-house-menu__border-3"></div>
      <div class="for-house-menu__border-4"></div>
      <div class="for-house-menu__border-5"></div>
      <div class="for-house-menu__border-6"></div>
      <div class="for-house-menu__border-7"></div>
      <div class="for-house-menu__border-8"></div>
      <div class="for-house-menu__border-9"></div>
      <p class="for-house-menu__telephone">+7 (800) 000-00-00</p>
      <p class="for-house-menu__order-a-call-text">Заказать звонок</p>
      <div class="for-house-menu__border-10"></div>
      <p class="for-house-menu__for-dilers-text">Для дилеров</p>
      <p class="for-house-menu__for-partners-text">Become a partner</p>
    </div>
  </div>
  <div class="choose-city-menu__shadow"></div>
  <div class="choose-city-menu">
    <div class="choose-city-menu__container">
      <img
        src="/imgs_main_page/x-menus.svg"
        alt=""
        class="choose-city-menu__x"
      />
      <p class="choose-city-menu__title">Выберите город</p>
      <input
        class="choose-city-menu__search-form"
        placeholder="Введите название города"
      />
      <img
        src="/imgs_main_page/header__search-icon.svg"
        alt=""
        class="choose-city-menu__search-icon"
      />
      <p class="choose-city-menu__text-forexample">Например:</p>
      <p class="choose-city-menu__text-Moscow">Москва</p>
      <p class="choose-city-menu__text-Saratov">Саратов</p>
    </div>
  </div>
  <div class="order-a-call__shadow"></div>
  <div class="order-a-call__menu">
    <img src="/imgs_main_page/x-menus.svg" alt="" class="order-a-call__x" />
    <p class="order-a-call__title">Заявка на обратный звонок</p>
    <div class="order-a-call__container">
      <p class="order-a-call__subtitle-input-name">Имя</p>
      <p class="order-a-call__subtitle-input-name-star">*</p>
      <input class="order-a-call__input-name" placeholder="Имя" />
      <p class="order-a-call__subtitle-input-telephone">Телефон</p>
      <p class="order-a-call__subtitle-input-telephone-star">*</p>
      <input
        class="order-a-call__input-telephone"
        placeholder="+7 (_ _ _) - _ _ _ - _ _ - _ _"
      />
    </div>
    <p class="order-a-call__text">
      Нажимая на кнопку, вы даете согласие<!-- <br class="order-a-call__br-text"> -->
      на обработку персональных данных и<!-- <br class="order-a-call__br-text"> -->
      соглашаетесь c
      <span class="order-a-call__span-text">политикой конфиденциальности.</span>
    </p>
    <button class="order-a-call__btn">
      <p class="order-a-call__text-btn">Заказать звонок</p>
    </button>
  </div>
  <div class="support-from-expert-menu__shadow"></div>
  <div class="support-from-expert-menu">
    <img
      src="/imgs_main_page/x-menus.svg"
      alt=""
      class="support-from-expert-menu__x"
    />
    <p class="support-from-expert-menu__title">Помощь эксперта</p>
    <div class="support-from-expert-menu__container">
      <div class="support-from-expert-menu__border-1"></div>
      <p class="support-from-expert-menu__text-socials">
        Напишите эксперту в мессенджер
      </p>
      <img
        src="/imgs_main_page/support-from-expert-menu__whatsapp-icon.svg"
        alt=""
        class="support-from-expert-menu__whatsapp-icon"
      />
      <img
        src="/imgs_main_page/support-from-expert-menu__telegram-icon.svg"
        alt=""
        class="support-from-expert-menu__telegram-icon"
      />
      <div class="support-from-expert-menu__border-2"></div>
      <p class="support-from-expert-menu__text-quiz">
        Пройдите Qiuz и узнайте какой
        <br class="support-from-expert-menu__br-text-quiz" />тренажер подходит
        вам
      </p>
      <img
        src="/imgs_main_page/support-from-expert-menu__arrow-btn.svg"
        alt=""
        class="support-from-expert-menu__arrow-btn"
      />
      <div class="support-from-expert-menu__border-3"></div>
      <p class="support-from-expert-menu__text-order-a-call">
        Или закажите обратный звонок
      </p>
      <p class="support-from-expert-menu__subtext-name">Имя</p>
      <p class="support-from-expert-menu__subtext-name-star">*</p>
      <input
        type="text"
        class="support-from-expert-menu__input-name"
        placeholder="Имя"
      />
      <p class="support-from-expert-menu__subtext-telephone">Телефон</p>
      <p class="support-from-expert-menu__subtext-telephone-star">*</p>
      <input
        class="support-from-expert-menu__input-telephone"
        placeholder="+7 (_ _ _) - _ _ _ - _ _ - _ _"
      />
      <p class="support-from-expert-menu__text">
        Нажимая на кнопку, вы даете согласие<!-- <br class="support-from-expert-menu__br-text"> -->
        на обработку персональных данных и<!-- <br class="support-from-expert-menu__br-text"> -->
        соглашаетесь c
        <span class="support-from-expert-menu__span-text"
          >политикой конфиденциальности.</span
        >
      </p>
      <button class="support-from-expert-menu__btn">
        <p class="support-from-expert-menu__text-btn">Заказать звонок</p>
      </button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Menus",
  mounted() {
    /* open and close .burger-menu and .for-house-menu__x .for-clubs-menu .choose-city-menu .order-a-call__menu .support-from-expert-menu .login-menu .password-recovery-menu starts */
    $(function () {
      $(".header__burger-btn").click(function () {
        $(".burger-menu").fadeIn(120);
      });
    });
    $(function () {
      $(".burger-menu__x").click(function () {
        $(".burger-menu").fadeOut(100);
      });
    });
    $(function () {
      $(".burger-menu__btn-for-house").click(function () {
        $(".for-house-menu").fadeIn(0);
        $(".burger-menu").fadeOut(0);
      });
    });
    $(function () {
      $(".for-house-menu__x").click(function () {
        $(".for-house-menu").fadeOut(100);
      });
    });
    $(function () {
      $(".for-house-menu__btn-back").click(function () {
        $(".for-house-menu").fadeOut(0);
        $(".burger-menu").fadeIn(0);
      });
    });
    $(function () {
      $(".burger-menu__btn-for-clubs").click(function () {
        $(".for-clubs-menu").fadeIn(0);
        $(".burger-menu").fadeOut(0);
      });
    });
    $(function () {
      $(".for-clubs-menu__x").click(function () {
        $(".for-clubs-menu").fadeOut(100);
      });
    });
    $(function () {
      $(".for-clubs-menu__btn-back").click(function () {
        $(".for-clubs-menu").fadeOut(0);
        $(".burger-menu").fadeIn(0);
      });
    });
    $(function () {
      $(
        ".burger-menu__city-text, .burger-menu__city-triangle, .header__city-flex"
      ).click(function () {
        $(".choose-city-menu, .choose-city-menu__shadow").fadeIn(0);
      });
    });
    $(function () {
      $(".choose-city-menu__x").click(function () {
        $(".choose-city-menu, .choose-city-menu__shadow").fadeOut(100);
      });
    });
    $(function () {
      $(
        ".burger-menu__order-a-call-text, .for-house-menu__order-a-call-text, .for-clubs-menu__order-a-call-text, .header__text-order-a-call"
      ).click(function () {
        $(".order-a-call__shadow").fadeIn(0);
        $(".order-a-call__menu").fadeIn(120);
      });
    });
    $(function () {
      $(".footer__text-order-call").click(function () {
        $(".order-a-call__shadow").fadeIn(0);
        $(".order-a-call__menu").fadeIn(120);
        $("html, body")
          .delay(400)
          .animate(
            {
              scrollTop: $(".order-a-call__menu").offset().top,
            },
            900
          );
      });
    });
    $(function () {
      $(".order-a-call__x").click(function () {
        $(".order-a-call__shadow, .order-a-call__menu").fadeOut(100);
      });
    });
    $(function () {
      $(".burger-menu__text-support, .header__support-title").click(
        function () {
          $(
            ".support-from-expert-menu, .support-from-expert-menu__shadow"
          ).fadeIn(0);
          $(".support-from-expert-menu__shadow").fadeIn(0);
        }
      );
    });
    $(function () {
      $(".support-from-expert-menu__x").click(function () {
        $(
          ".support-from-expert-menu, .support-from-expert-menu__shadow"
        ).fadeOut(100);
      });
    });
    $(function () {
      $(
        ".burger-menu__personal-account-text, .burger-menu__personal-account-img, .headear__personal-account-submain-flex"
      ).click(function () {
        $(".login-menu, .login-menu__shadow").fadeIn(120);
      });
    });
    $(function () {
      $(".login-menu__x").click(function () {
        $(".login-menu, .login-menu__shadow").fadeOut(100);
      });
    });
    $(function () {
      $(".login-menu__text-forget-the-password").click(function () {
        $(".password-recovery-menu, .password-recovery-menu__shadow").fadeIn(
          120
        );
      });
    });
    $(function () {
      $(".password-recovery-menu__x").click(function () {
        $(".password-recovery-menu, .password-recovery-menu__shadow").fadeOut(
          100
        );
      });
    });
    /* open and close .burger-menu and .for-house-menu__x .for-clubs-menu .choose-city-menu .order-a-call__menu .support-from-expert-menu .login-menu .password-recovery-menu ends */

    /* disable input text starts */
    $(document).ready(function () {
      $(
        ".order-a-call__input-telephone, .support-from-expert-menu__input-telephone"
      ).bind("change keyup input click", function () {
        if (this.value.match(/[^0-9\(\)\-\+]/g)) {
          this.value = this.value.replace(/[^0-9\(\)\-\+]/g, "");
        }
      });
    });
    /* disable input text ends */

    /* hide and show password in .login-menu__input-password starts */
    $(function () {
      $(".login-menu__btn-open-eye-input-password").click(function () {
        $(".login-menu__btn-open-eye-input-password").css("display", "none");
        $(".login-menu__btn-close-eye-input-password").css("display", "block");
        $(".login-menu__input-password").attr("type", "password");
      });
    });
    $(function () {
      $(".login-menu__btn-close-eye-input-password").click(function () {
        $(".login-menu__btn-close-eye-input-password").css("display", "none");
        $(".login-menu__btn-open-eye-input-password").css("display", "block");
        $(".login-menu__input-password").attr("type", "text");
      });
    });
    /* hide and show password in .login-menu__input-password ends */

    /* change styles .login-menu__btn-customer .login-menu__btn-authorized-dealer starts */
    let login_menu_btn_customer = document.querySelector(
        ".login-menu__btn-customer"
      ),
      login_menu_text_customer = document.querySelector(
        ".login-menu__text-customer"
      ),
      login_menu_btn_authorized_dealer = document.querySelector(
        ".login-menu__btn-authorized-dealer"
      ),
      login_menu_text_authorized_dealer = document.querySelector(
        ".login-menu__text-authorized-dealer"
      );
    login_menu_btn_customer.onmouseover = function () {
      login_menu_btn_customer.style.background = "transparent";
      login_menu_btn_customer.style.border =
        "1px solid rgba(144, 156, 181, 0.7)";
      login_menu_text_customer.style.color = "#384255";
      login_menu_btn_authorized_dealer.style.background = "#384255";
      login_menu_btn_authorized_dealer.style.border = "none";
      login_menu_text_authorized_dealer.style.color = "#ffffff";
    };
    login_menu_btn_customer.onmouseout = function () {
      login_menu_btn_customer.style.background = "#384255";
      login_menu_btn_customer.style.border = "none";
      login_menu_text_customer.style.color = "#ffffff";
      login_menu_btn_authorized_dealer.style.background = "transparent";
      login_menu_btn_authorized_dealer.style.border =
        "1px solid rgba(144, 156, 181, 0.7)";
      login_menu_text_authorized_dealer.style.color = "#384255";
    };
    login_menu_btn_authorized_dealer.onmouseout = function () {
      login_menu_btn_authorized_dealer.style.background = "transparent";
      login_menu_btn_authorized_dealer.style.border =
        "1px solid rgba(144, 156, 181, 0.7)";
      login_menu_text_authorized_dealer.style.color = "#384255";
      login_menu_btn_customer.style.background = "#384255";
      login_menu_btn_customer.style.border = "none";
      login_menu_text_customer.style.color = "#ffffff";
    };
    login_menu_btn_authorized_dealer.onmouseover = function () {
      login_menu_btn_authorized_dealer.style.background = "#384255";
      login_menu_btn_authorized_dealer.style.border = "none";
      login_menu_text_authorized_dealer.style.color = "#ffffff";
      login_menu_btn_customer.style.background = "transparent";
      login_menu_btn_customer.style.border =
        "1px solid rgba(144, 156, 181, 0.7)";
      login_menu_text_customer.style.color = "#384255";
    };
    /* change styles .login-menu__btn-customer .login-menu__btn-authorized-dealer ends */

    /* check that user enter his email in .password-recovery-menu__input-email starts */
    let text_input_email = document.querySelector(
      ".password-recovery-menu__input-email"
    );
    let text_enter_your_email = document.querySelector(
      ".password-recovery-menu__text-enter-your-email-pls"
    );
    text_input_email.addEventListener("input", function () {
      let count = 0;
      count = text_input_email.value.split("@").length - 1;
      console.log("count:", count);
      if (count === 1) {
        text_enter_your_email.style.display = "none";
        $(function () {
          $(".password-recovery-menu__btn").click(function () {
            $(
              ".recovery-password-instructions, .recovery-password-instructions__shadow"
            ).fadeIn(0);
            setTimeout(function () {
              $(
                ".recovery-password-instructions, .recovery-password-instructions__shadow"
              ).fadeOut(400);
            }, 12000);
            $(
              ".password-recovery-menu, .password-recovery-menu__shadow"
            ).fadeOut(100);
          });
        });
      } else {
        text_enter_your_email.style.display = "block";
      }
    });
    /* check that user enter his email in .password-recovery-menu__input-email ends */
    const BurgerMenu = document.querySelector(".burger-menu");
    window.addEventListener("click", (e) => {
      /* if (e.target.closest(".burger-menu__text-main")) {
        this.$router.push("/");
        window.scrollTo(0, 0);
        BurgerMenu.style.display = "none";
      } */
      /* if (e.target.closest(".text-brands-burger-clicked")) {
        this.$router.push("/");
        BurgerMenu.style.display = "none";
        setTimeout(() => {
          const containerBrands = document.querySelector(".container-brands");
          containerBrands.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } */
      /* if (e.target.closest(".burger-menu__text-service")) {
        this.$router.push("/ServicePage");
        window.scrollTo(0, 0);
        BurgerMenu.style.display = "none";
      } */
      /* if (e.target.closest(".burger-menu__text-services")) {
        this.$router.push("/ServicesPage");
        window.scrollTo(0, 0);
        BurgerMenu.style.display = "none";
      } */
      /* if (e.target.closest(".burger-menu__text-about-company")) {
        this.$router.push("/AboutCompanyPage");
        window.scrollTo(0, 0);
        BurgerMenu.style.display = "none";
      } */
      /* if (e.target.closest(".burger-menu__text-blog")) {
        this.$router.push("/BlogPage");
        window.scrollTo(0, 0);
        BurgerMenu.style.display = "none";
      } */
      /* if (e.target.closest(".burger-menu__text-where-to-buy")) {
        this.$router.push("/WhereToBuyPage");
        window.scrollTo(0, 0);
        BurgerMenu.style.display = "none";
      } */
      /* if (e.target.closest(".burger-menu__text-contacts")) {
        this.$router.push("/ContactsPage");
        window.scrollTo(0, 0);
        BurgerMenu.style.display = "none";
      } */
    });
  },
  methods: {
    goToMainPage() {
      this.$router.push("/");
      window.scrollTo(0, 0);
      document.querySelector(".burger-menu").style.display = "none";
    },
    goToBrandPage() {
      this.$router.push("/");
      document.querySelector(".burger-menu").style.display = "none";
      setTimeout(() => {
        const containerBrands = document.querySelector(".container-brands");
        containerBrands.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    goToServicePage() {
      this.$router.push("/ServicePage");
      window.scrollTo(0, 0);
      document.querySelector(".burger-menu").style.display = "none";
    },
    goToServicesPage() {
      this.$router.push("/ServicesPage");
      window.scrollTo(0, 0);
      document.querySelector(".burger-menu").style.display = "none";
    },
    goToAboutCompanyPage() {
      this.$router.push("/AboutCompanyPage");
      window.scrollTo(0, 0);
      document.querySelector(".burger-menu").style.display = "none";
    },
    goToBlogPage() {
      this.$router.push("/BlogPage");
      window.scrollTo(0, 0);
      document.querySelector(".burger-menu").style.display = "none";
    },
    goToWhereToBuyPage() {
      this.$router.push("/WhereToBuyPage");
      window.scrollTo(0, 0);
      document.querySelector(".burger-menu").style.display = "none";
    },
    goToContactsPage() {
      this.$router.push("/ContactsPage");
      window.scrollTo(0, 0);
      document.querySelector(".burger-menu").style.display = "none";
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
.burger-menu {
  display: none;
  position: absolute;
  width: 100%;
  min-height: 752px;
  height: 100%;
  background: #2a2c38;
  top: 0rem;
  z-index: 5;
}
.burger-menu__city-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  margin-left: 0.3rem;
  margin-right: 80%;
  margin-top: 1.5rem;
  cursor: pointer;
}
.burger-menu__city-triangle {
  position: absolute;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid $gray-col;
  margin-left: 4.05rem;
  margin-right: 80%;
  margin-top: -1.66rem;
  cursor: pointer;
}
.burger-menu__personal-account-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $white-col;
  margin-left: 6.813rem;
  margin-right: 43%;
  margin-top: -2.1rem;
  cursor: pointer;
}
.burger-menu__personal-account-img {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 10.65rem;
  top: 1.5rem;
  cursor: pointer;
}
.burger-menu__x {
  position: absolute;
  right: 1rem;
  top: 1.688rem;
  cursor: pointer;
}
.burger-menu__search-form {
  position: relative;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background: rgba(246, 246, 246, 0.2);
  top: 0.3rem;
  outline: none;
  border: none;
  padding-left: 3.125rem;
  color: $white-col;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 150%;
}
.burger-menu__search-form-icon {
  position: absolute;
  margin-top: 1.3rem;
  left: 1.4rem;
  cursor: pointer;
}
.burger-menu__search-form-border {
  position: absolute;
  width: 1.071px;
  height: 40px;
  background: rgba(133, 143, 164, 0.15);
  margin-top: -2.5rem;
  left: 3.1rem;
}
.burger-menu__search-text {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;
  color: $white-col;
  margin-top: -2.05rem;
  margin-left: 3.3rem;
  cursor: pointer;
}
.burger-menu__container {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.burger-menu__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 150%;
  color: $white-col;
}
.burger-menu__btn-for-house {
  position: relative;
  width: 100%;
  height: 50px;
  background: rgba(56, 66, 85, 0.5);
  cursor: pointer;
}
.burger-menu__btn-for-house-text,
.burger-menu__btn-for-clubs-text {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $white-col;
  margin-left: 0.625rem;
  margin-top: 1rem;
}
.burger-menu__btn-for-clubs {
  position: relative;
  width: 100%;
  height: 50px;
  background: rgba(56, 66, 85, 0.5);
  top: 0.5rem;
  cursor: pointer;
}
.burger-menu__btn-for-house-arrow,
.burger-menu__btn-for-clubs-arrow {
  position: absolute;
  rotate: 180deg;
  right: 1.5rem;
  top: 1.2rem;
}
.burger-menu__border-1 {
  border: 1px solid rgba(133, 143, 164, 0.15);
  width: 100%;
  margin-top: 1.8rem;
}
.burger-menu__flex-subtitles {
  width: 300px;
  margin-left: 0.625rem;
  margin-top: 1.4rem;
}
.burger-menu__subtitles {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 210%;
  color: $white-col;
  cursor: pointer;
}
.burger-menu__subtitles--margin-top {
  margin-top: -1rem;
}
.burger-menu__text-support {
  cursor: pointer;
}
.burger-menu__border-2 {
  border: 1px solid rgba(133, 143, 164, 0.15);
  width: 100%;
  margin-top: 1.6rem;
}
.burger-menu__telephone {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $white-col;
  cursor: pointer;
}
.burger-menu__order-a-call-text {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  margin-top: -2rem;
  right: 2rem;
  color: $red-col;
  cursor: pointer;
}
.burger-menu__border-3 {
  border: 1px solid rgba(133, 143, 164, 0.15);
  width: 100%;
  margin-top: 1.2rem;
}
.burger-menu__for-dilers-text,
.burger-menu__for-partners-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: #909cb5;
  cursor: pointer;
}
.burger-menu__for-partners-text {
  margin-top: -2rem;
  margin-left: 7.38rem;
}
.login-menu__shadow {
  display: none;
  position: absolute;
  height: 1050.5%;
  width: 100%;
  top: 0rem;
  background-color: #272727;
  opacity: 90%;
  z-index: 5;
}
.login-menu {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: $white-col;
  top: 0rem;
  z-index: 5;
}
.login-menu__x {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  cursor: pointer;
}
.login-menu__container {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.login-menu__title {
  position: absolute;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 110%;
  left: 50%;
  transform: translateX(-50%);
  top: 3.75rem;
  white-space: nowrap;
}
.login-menu__btn-customer {
  width: 40%;
  height: 38px;
  background: $dark-blue-col;
  border: none;
  border-radius: 4px;
  margin-top: 7.4rem;
  cursor: pointer;
}
.login-menu__text-customer {
  font-family: "Inter", sans-serif;
  font-size: 0.688rem;
  font-weight: 700;
  color: $white-col;
}
.login-menu__btn-authorized-dealer {
  position: absolute;
  width: 50%;
  height: 38px;
  background: $white-col;
  border: 1px solid rgba(144, 156, 181, 0.7);
  border-radius: 4px;
  right: 1.25rem;
  top: 7.4rem;
  cursor: pointer;
}
.login-menu__text-authorized-dealer {
  font-family: "Inter", sans-serif;
  font-size: 0.688rem;
  font-weight: 700;
  color: $dark-blue-col;
}
.login-menu__text-enter-with {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 150%;
  color: $dark-blue-col;
}
.login-menu__btn-enter-with-google {
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
  top: 10.6rem;
  left: 9.6rem;
}
.login-menu__btn-enter-with-facebook {
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
  top: 10.6rem;
  left: 11.7rem;
}
.login-menu__input-your-email {
  width: 100%;
  height: 41px;
  margin-top: 1rem;
  border-radius: 6px;
  border: 1px solid rgba(144, 156, 181, 0.5);
  background: #f6f6f6;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  padding-left: 1.25rem;
  outline: none;
}
.login-menu__input-password {
  width: 100%;
  height: 41px;
  margin-top: 1rem;
  border-radius: 6px;
  border: 1px solid rgba(144, 156, 181, 0.5);
  background: #f6f6f6;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  padding-left: 1.25rem;
  outline: none;
}
.login-menu__btn-open-eye-input-password {
  position: absolute;
  width: 20px;
  height: 21px;
  right: 2.3rem;
  top: 18.1rem;
  cursor: pointer;
}
.login-menu__btn-close-eye-input-password {
  position: absolute;
  width: 20px;
  height: 21px;
  right: 2.3rem;
  top: 18.1rem;
  cursor: pointer;
}
.login-menu__text-forget-the-password {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 140%;
  color: #909cb5;
  left: 50%;
  transform: translateX(-50%);
  top: 20.4rem;
  cursor: pointer;
}
.login-menu__btn-enter {
  position: absolute;
  width: 180px;
  height: 42px;
  background: $red-col;
  border-radius: 4px;
  border: none;
  left: 50%;
  transform: translateX(-50%);
  top: 23.3rem;
  cursor: pointer;
}
.login-menu__text-enter {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $white-col;
  margin-top: 0.7rem;
}
.login-menu__text-registr {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 140%;
  color: $blue;
  left: 50%;
  transform: translateX(-50%);
  top: 25.8rem;
  cursor: pointer;
}
.password-recovery-menu__shadow {
  display: none;
  position: absolute;
  height: 1050.5%;
  width: 100%;
  top: 0rem;
  background-color: #272727;
  opacity: 90%;
  z-index: 6;
}
.password-recovery-menu {
  display: none;
  position: absolute;
  width: 95.3%;
  height: 369px;
  background: $white-col;
  top: 7rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
  z-index: 7;
}
.password-recovery-menu__x {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  cursor: pointer;
}
.password-recovery-menu__container {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.password-recovery-menu__title {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 110%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  margin-top: 3rem;
}
.password-recovery-menu__text {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 140%;
  padding-right: 1.25rem;
  top: 4.8rem;
}
.password-recovery-menu__text-enter-your-email-pls {
  display: none;
  position: absolute;
  font-size: 0.75rem;
  font-weight: 600;
  color: $red-col;
  top: 9.3rem;
}
.password-recovery-menu__input-email {
  width: 100%;
  height: 41px;
  border-radius: 6px;
  border: 1px solid rgba(144, 156, 181, 0.5);
  background: #f6f6f6;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  padding-left: 1.25rem;
  margin-top: 11rem;
  outline: none;
}
.password-recovery-menu__btn {
  position: absolute;
  width: 180px;
  height: 42px;
  background: $red-col;
  border: none;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  top: 15rem;
  cursor: pointer;
}
.password-recovery-menu__text-btn {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  margin-top: 0.7rem;
  color: $white-col;
}
.recovery-password-instructions__shadow {
  display: none;
  position: absolute;
  height: 882%;
  width: 100%;
  top: 0rem;
  background-color: #272727;
  opacity: 90%;
  z-index: 5;
}
.recovery-password-instructions {
  display: none;
  position: absolute;
  width: 95.3%;
  height: 466px;
  background: $white-col;
  top: 7rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
  z-index: 6;
}
.recovery-password-instructions__container {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.recovery-password-instructions__title {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 110%;
  top: 2.125rem;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.recovery-password-instructions__text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 150%;
  margin-top: 6rem;
}
.recovery-password-instructions__span-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 150%;
}
.for-clubs-menu,
.for-house-menu {
  display: none;
  position: absolute;
  width: 100%;
  min-height: 752px;
  height: 100%;
  background: #2a2c38;
  top: 0rem;
  z-index: 5;
}
.for-clubs-menu__container,
.for-house-menu__container {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.for-clubs-menu__btn-back,
.for-house-menu__btn-back {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  margin-left: 0.3rem;
  margin-top: 1.5rem;
  cursor: pointer;
}
.for-clubs-menu__x,
.for-house-menu__x {
  position: absolute;
  right: 1rem;
  top: 1.688rem;
  cursor: pointer;
}
.for-clubs-menu__title,
.for-house-menu__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 150%;
  color: $white-col;
}
.for-clubs-menu__subtitles,
.for-house-menu__subtitles {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 350%;
  margin-left: 0.75rem;
  margin-top: -0.4rem;
}
.for-clubs-menu__subtitles-arrow,
.for-house-menu__subtitles-arrow {
  margin-left: 0.4rem;
}
a {
  text-decoration: none;
  color: #dadada;
}
.for-clubs-menu__border-1,
.for-house-menu__border-1 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.15);
  top: -25.3rem;
}
.for-clubs-menu__border-2,
.for-house-menu__border-2 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.15);
  top: -22.4rem;
}
.for-clubs-menu__border-3,
.for-house-menu__border-3 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.15);
  top: -19.5rem;
}
.for-clubs-menu__border-4,
.for-house-menu__border-4 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.15);
  top: -16.6rem;
}
.for-clubs-menu__border-5,
.for-house-menu__border-5 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.15);
  top: -13.7rem;
}
.for-clubs-menu__border-6,
.for-house-menu__border-6 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.15);
  top: -10.8rem;
}
.for-clubs-menu__border-7,
.for-house-menu__border-7 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.15);
  top: -7.9rem;
}
.for-clubs-menu__border-8,
.for-house-menu__border-8 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.15);
  top: -5rem;
}
.for-clubs-menu__border-9,
.for-house-menu__border-9 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.15);
  top: -2.1rem;
}
.for-clubs-menu__telephone,
.for-house-menu__telephone {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: $white-col;
}
.for-clubs-menu__order-a-call-text,
.for-house-menu__order-a-call-text {
  position: absolute;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  margin-top: -2rem;
  right: 2rem;
  color: $red-col;
  cursor: pointer;
}
.for-clubs-menu__border-10,
.for-house-menu__border-10 {
  position: relative;
  border: 1px solid rgba(133, 143, 164, 0.15);
  top: 0rem;
}
.for-clubs-menu__for-dilers-text,
.for-clubs-menu__for-partners-text,
.for-house-menu__for-dilers-text,
.for-house-menu__for-partners-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  color: $gray-col;
  cursor: pointer;
}
.for-clubs-menu__for-partners-text,
.for-house-menu__for-partners-text {
  margin-top: -2.1rem;
  margin-left: 7.4rem;
}
.choose-city-menu__shadow {
  display: none;
}
.choose-city-menu {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: $white-col;
  top: 0rem;
  z-index: 5;
}
.choose-city-menu__container {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.choose-city-menu__x {
  position: absolute;
  right: 1rem;
  top: 1.688rem;
  cursor: pointer;
}
.choose-city-menu__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 150%;
  margin-top: 3.6rem;
  color: $dark-blue-col;
}
.choose-city-menu__search-form {
  position: relative;
  border-radius: 5px;
  border: 1px solid rgba(133, 143, 164, 0.15);
  width: 100%;
  height: 48px;
  background: #f6f6f6;
  margin-top: 0.2rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  padding-left: 1.25rem;
  outline: none;
  color: $dark-col;
  cursor: pointer;
}
.choose-city-menu__search-icon {
  position: absolute;
  top: 8.5rem;
  right: 2.625rem;
  cursor: pointer;
}
.choose-city-menu__text-forexample {
  color: $gray-col;
}
.choose-city-menu__text-Moscow {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  margin-left: 5.85rem;
  margin-top: -2.2rem;
  color: $red-col;
  cursor: pointer;
}
.choose-city-menu__text-Saratov {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 140%;
  margin-left: 9.75rem;
  margin-top: -2.1rem;
  color: $red-col;
  cursor: pointer;
}
.order-a-call__shadow {
  display: none;
  position: absolute;
  height: 1050.5%;
  width: 100%;
  top: 0rem;
  background-color: #272727;
  opacity: 90%;
  z-index: 5;
}
.order-a-call__menu {
  display: none;
  position: absolute;
  width: 94.5%;
  height: 465px;
  left: 0.625rem;
  top: 7.9rem;
  background: $white-col;
  border-radius: 6px;
  z-index: 6;
}
.order-a-call__x {
  position: absolute;
  right: 1.25rem;
  top: 1.125rem;
  cursor: pointer;
}
.order-a-call__title {
  position: absolute;
  font-size: 1rem;
  font-weight: 700;
  line-height: 110%;
  left: 50%;
  transform: translateX(-50%);
  top: 2.5rem;
  white-space: nowrap;
  color: $dark-col;
}
.order-a-call__container {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.order-a-call__subtitle-input-name {
  position: absolute;
  font-size: 0.75rem;
  font-weight: 400;
  top: 5rem;
}
.order-a-call__subtitle-input-name-star {
  position: absolute;
  font-size: 1.75rem;
  color: $red-col;
  top: 3.7rem;
  left: 2.9rem;
}
.order-a-call__input-name {
  width: 100%;
  height: 41px;
  margin-top: 7rem;
  border-radius: 6px;
  border: 1px solid rgba(144, 156, 181, 0.5);
  background: #f6f6f6;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  padding-left: 0.625rem;
}
.order-a-call__subtitle-input-telephone {
  position: absolute;
  font-size: 0.75rem;
  font-weight: 400;
  top: 9.8rem;
}
.order-a-call__subtitle-input-telephone-star {
  position: absolute;
  font-size: 1.75rem;
  color: $red-col;
  top: 8.6rem;
  left: 4.5rem;
}
.order-a-call__input-telephone {
  width: 100%;
  height: 41px;
  margin-top: 2.3rem;
  border-radius: 6px;
  border: 1px solid rgba(144, 156, 181, 0.5);
  background: #f6f6f6;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  padding-left: 0.625rem;
}
.order-a-call__text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  color: $gray-col;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 1rem;
}
.order-a-call__span-text,
.support-from-expert-menu__span-text {
  color: $red-col;
}
.order-a-call__btn {
  position: absolute;
  border: none;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  background: $red-col;
  border-radius: 4px;
  width: 128px; /* width: 158px; */
  height: 36px; /* height: 42px; */
  cursor: pointer;
}
.order-a-call__text-btn {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem; /* font-size: 0.875rem; */
  font-weight: 700;
  margin-top: 0.6rem;
  color: $white-col;
}
.support-from-expert-menu__shadow {
  display: none;
  position: absolute;
  height: 1050.5%;
  width: 100%;
  top: 0rem;
  background-color: #272727;
  opacity: 90%;
  z-index: 6;
}
.support-from-expert-menu {
  display: none;
  position: absolute;
  width: 94.5%;
  height: 525px;
  left: 0.625rem;
  top: 7.9rem;
  background: $white-col;
  border-radius: 6px;
  z-index: 6;
}
.support-from-expert-menu__x {
  position: absolute;
  right: 1.25rem;
  top: 1.125rem;
  cursor: pointer;
}
.support-from-expert-menu__title {
  position: absolute;
  font-size: 1rem;
  font-weight: 700;
  line-height: 110%;
  left: 50%;
  transform: translateX(-50%);
  top: 2.5rem;
  white-space: nowrap;
  color: $dark-col;
}
.support-from-expert-menu__container {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.support-from-expert-menu__border-1 {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
  margin-top: 5.3rem;
}
.support-from-expert-menu__text-socials {
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 120%;
  color: $dark-blue-col;
}
.support-from-expert-menu__whatsapp-icon {
  position: absolute;
  width: 20px;
  height: 20px;
  margin-top: -1.8rem;
  right: 2.9rem;
  cursor: pointer;
}
.support-from-expert-menu__telegram-icon {
  position: absolute;
  width: 20px;
  height: 20px;
  margin-top: -1.8rem;
  right: 1.35rem;
  cursor: pointer;
}
.support-from-expert-menu__border-2 {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
}
.support-from-expert-menu__text-quiz {
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 120%;
  color: $dark-blue-col;
}
.support-from-expert-menu__arrow-btn {
  position: absolute;
  width: 66px;
  height: 66px;
  right: 0.3rem;
  margin-top: -3.7rem;
  cursor: pointer;
}
.support-from-expert-menu__border-3 {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.15);
  margin-top: -0.1rem;
}
.support-from-expert-menu__text-order-a-call {
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 120%;
  color: $dark-blue-col;
}
.support-from-expert-menu__subtext-name {
  position: absolute;
  font-size: 0.75rem;
  font-weight: 400;
  top: 13.5rem;
}
.support-from-expert-menu__subtext-name-star {
  position: absolute;
  font-size: 1.75rem;
  color: $red-col;
  top: 12.2rem;
  left: 2.9rem;
}
.support-from-expert-menu__input-name {
  width: 100%;
  height: 41px;
  margin-top: 1.75rem;
  border-radius: 6px;
  border: 1px solid rgba(144, 156, 181, 0.5);
  background: #f6f6f6;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  padding-left: 0.625rem;
}
.support-from-expert-menu__subtext-telephone {
  position: absolute;
  font-size: 0.75rem;
  font-weight: 400;
  top: 18rem;
}
.support-from-expert-menu__subtext-telephone-star {
  position: absolute;
  font-size: 1.75rem;
  color: $red-col;
  top: 16.6rem;
  left: 4.45rem;
}
.support-from-expert-menu__input-telephone {
  width: 100%;
  height: 41px;
  margin-top: 2rem;
  border-radius: 6px;
  border: 1px solid rgba(144, 156, 181, 0.5);
  background: #f6f6f6;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  padding-left: 0.625rem;
}
.support-from-expert-menu__text {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  color: $gray-col;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
}
.support-from-expert-menu__btn {
  position: absolute;
  border: none;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.4rem;
  background: $red-col;
  border-radius: 4px;
  width: 128px; /* width: 158px; */
  height: 36px; /* height: 42px; */
  cursor: pointer;
}
.support-from-expert-menu__text-btn {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: 0.6rem;
  color: $white-col;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .burger-menu__container {
    padding-left: 2.813rem;
    padding-right: 2.813rem;
  }
  .burger-menu__personal-account-img {
    margin-left: 2.25rem;
  }
  .burger-menu__city-text {
    margin-right: 89%;
  }
  .burger-menu__personal-account-text {
    margin-right: 73%;
  }
  .burger-menu__x {
    right: 3.2rem;
  }
  .burger-menu__search-form-icon {
    left: 3.7rem;
  }
  .burger-menu__search-form-border {
    left: 5.4rem;
  }
  .burger-menu__order-a-call-text {
    right: 4.4rem;
  }
  .support-from-expert-menu__shadow,
  .login-menu__shadow,
  .password-recovery-menu__shadow,
  .recovery-password-instructions__shadow,
  .order-a-call__shadow,
  .choose-city-menu__shadow {
    height: 996%;
  }
  .choose-city-menu__shadow {
    position: absolute;
    width: 100%;
    top: 0rem;
    background-color: #272727;
    opacity: 90%;
    z-index: 5;
  }
  .login-menu {
    width: 600px;
    height: 523px;
    top: 10.563rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 6px;
  }
  .login-menu__container {
    padding-left: 4.375rem;
    padding-right: 4.375rem;
  }
  .login-menu__title {
    font-size: 1.875rem;
    top: 1.5rem;
  }
  .login-menu__btn-customer {
    width: 125px;
    height: 42px;
    margin-top: 6.7rem;
    margin-left: 3rem;
  }
  .login-menu__text-customer {
    font-size: 0.875rem;
    margin-top: 0.7rem;
  }
  .login-menu__btn-authorized-dealer {
    width: 226px;
    height: 42px;
    right: 7.4rem;
    top: 6.7rem;
  }
  .login-menu__text-authorized-dealer {
    font-size: 0.875rem;
    margin-top: 0.6rem;
  }
  .login-menu__text-enter-with {
    font-size: 1rem;
    margin-left: 7.7rem;
    margin-top: 1.3rem;
  }
  .login-menu__btn-enter-with-google {
    top: 10.6rem;
    left: 21.7rem;
  }
  .login-menu__btn-enter-with-facebook {
    top: 10.6rem;
    left: 23.8rem;
  }
  .login-menu__input-your-email {
    height: 50px;
    margin-top: 0.4rem;
    font-size: 1rem;
  }
  .login-menu__input-password {
    height: 50px;
    margin-top: 1rem;
    font-size: 1rem;
  }
  .login-menu__btn-open-eye-input-password {
    width: 24px;
    height: 24px;
    right: 5.6rem;
    top: 18.45rem;
  }
  .login-menu__btn-close-eye-input-password {
    width: 24px;
    height: 24px;
    right: 5.6rem;
    top: 18.45rem;
  }
  .login-menu__text-forget-the-password {
    top: 21.3rem;
  }
  .login-menu__btn-enter {
    top: 24.2rem;
  }
  .login-menu__text-registr {
    top: 26.6rem;
  }
  .password-recovery-menu {
    width: 600px;
    height: 369px;
    top: 7rem;
  }
  .password-recovery-menu__container {
    padding-left: 4.375rem;
    padding-right: 4.375rem;
  }
  .password-recovery-menu__title {
    font-size: 1.875rem;
    margin-top: 3.55rem;
  }
  .password-recovery-menu__text {
    font-size: 0.875rem;
    top: 6rem;
    text-align: center;
  }
  .password-recovery-menu__br-text {
    display: block;
  }
  .password-recovery-menu__text-enter-your-email-pls {
    top: 9.8rem;
  }
  .password-recovery-menu__input-email {
    height: 50px;
    font-size: 0.875rem;
    margin-top: 11.8rem;
  }
  .password-recovery-menu__btn {
    top: 16.2rem;
  }
  .recovery-password-instructions {
    display: none;
    top: 18rem;
  }
  .recovery-password-instructions__container {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .recovery-password-instructions__title {
    font-size: 1.875rem;
    margin-top: 0.4rem;
  }
  .recovery-password-instructions__text {
    font-size: 1.125rem;
    margin-top: 6rem;
  }
  .recovery-password-instructions__span-text {
    font-size: 1.125rem;
  }
  .for-clubs-menu__container,
  .for-house-menu__container {
    padding-left: 2.813rem;
    padding-right: 2.813rem;
  }
  .for-clubs-menu__btn-back,
  .for-house-menu__btn-back {
    margin-left: 0.3rem;
  }
  .for-clubs-menu__x,
  .for-house-menu__x {
    right: 3.2rem;
  }
  .for-clubs-menu__order-a-call-text,
  .for-house-menu__order-a-call-text {
    right: 6rem;
  }
  .choose-city-menu {
    display: none;
    width: 750px;
    height: 230px;
    top: 15.625rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 6px;
  }
  .choose-city-menu__container {
    padding-left: 2.813rem;
    padding-right: 2.813rem;
  }
  .choose-city-menu__x {
    right: 1.25rem;
    top: 1.688rem;
  }
  .choose-city-menu__title {
    font-size: 1.5rem;
    margin-top: 3.6rem;
  }
  .choose-city-menu__search-form {
    height: 48px;
    margin-top: 0.2rem;
    font-size: 0.875rem;
    padding-left: 1.25rem;
  }
  .choose-city-menu__search-icon {
    top: 8.5rem;
    right: 4rem;
  }
  .choose-city-menu__text-Moscow {
    font-size: 0.875rem;
    margin-left: 7.1rem;
    margin-top: -2.2rem;
  }
  .choose-city-menu__text-Saratov {
    font-size: 0.875rem;
    margin-left: 11rem;
    margin-top: -2.1rem;
  }
  .order-a-call__menu {
    width: 600px;
    height: 452px;
    left: 50%;
    transform: translateX(-50%);
  }
  .order-a-call__title {
    font-size: 1.875rem;
    top: 1.8rem;
  }
  .order-a-call__container {
    padding-left: 2.813rem;
    padding-right: 2.813rem;
  }
  .order-a-call__subtitle-input-name {
    font-size: 1rem;
    top: 6rem;
  }
  .order-a-call__subtitle-input-name-star {
    font-size: 1.9rem;
    left: 5rem;
    top: 4.6rem;
  }
  .order-a-call__input-name {
    height: 50px;
    margin-top: 8.5rem;
    font-size: 1rem;
  }
  .order-a-call__subtitle-input-telephone {
    font-size: 1rem;
    top: 11.5rem;
  }
  .order-a-call__subtitle-input-telephone-star {
    font-size: 1.9rem;
    left: 7.1rem;
    top: 10.2rem;
  }
  .order-a-call__input-telephone {
    height: 50px;
    margin-top: 2.4rem;
    font-size: 1rem;
  }
  .order-a-call__text {
    text-align: center;
    font-size: 0.875rem;
    padding-left: 4rem;
    padding-right: 4rem;
    margin-top: 1.15rem;
  }
  .order-a-call__btn {
    margin-top: 0.6rem;
    width: 158px;
    height: 42px;
  }
  .order-a-call__text-btn {
    font-size: 0.875rem;
    margin-top: 0.7rem;
  }
  .support-from-expert-menu {
    width: 600px;
    height: 681px;
    margin-left: 50%;
    transform: translateX(-50%);
    top: 7.9rem;
  }
  .support-from-expert-menu__title {
    font-size: 1.875rem;
    top: 1.5rem;
  }
  .support-from-expert-menu__container {
    padding-left: 2.813rem;
    padding-right: 2.813rem;
  }
  .support-from-expert-menu__border-1 {
    margin-top: 6.7rem;
  }
  .support-from-expert-menu__text-socials {
    font-size: 1.25rem;
    margin-top: 1.6rem;
  }
  .support-from-expert-menu__whatsapp-icon {
    width: 48px;
    height: 48px;
    margin-top: -3.5rem;
    right: 7rem;
  }
  .support-from-expert-menu__telegram-icon {
    width: 48px;
    height: 48px;
    margin-top: -3.5rem;
    right: 2.9rem;
  }
  .support-from-expert-menu__border-2 {
    margin-top: 1.7rem;
  }
  .support-from-expert-menu__text-quiz {
    font-size: 1.25rem;
    margin-top: 1.2rem;
  }
  .support-from-expert-menu__arrow-btn {
    width: 100px;
    height: 100px;
    right: 1.4rem;
    margin-top: -5.9rem;
  }
  .support-from-expert-menu__border-3 {
    margin-top: 0.3rem;
  }
  .support-from-expert-menu__text-order-a-call {
    font-size: 1.25rem;
    margin-top: 1.2rem;
  }
  .support-from-expert-menu__subtext-name {
    font-size: 1rem;
    top: 20.5rem;
  }
  .support-from-expert-menu__subtext-name-star {
    font-size: 1.9rem;
    top: 19.2rem;
    left: 5rem;
  }
  .support-from-expert-menu__input-name {
    height: 50px;
    margin-top: 1.75rem;
    font-size: 1rem;
  }
  .support-from-expert-menu__subtext-telephone {
    font-size: 1rem;
    top: 26rem;
  }
  .support-from-expert-menu__subtext-telephone-star {
    font-size: 1.9rem;
    top: 24.7rem;
    left: 7.1rem;
  }
  .support-from-expert-menu__input-telephone {
    height: 50px;
    margin-top: 2.4rem;
    font-size: 1rem;
  }
  .support-from-expert-menu__text {
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1.2rem;
  }
  .support-from-expert-menu__btn {
    width: 158px;
    height: 42px;
  }
  .support-from-expert-menu__text-btn {
    font-size: 0.875rem;
    margin-top: 0.7rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .burger-menu__city-text {
    margin-right: 92%;
  }
  .burger-menu__personal-account-text {
    margin-right: 81%;
  }
  .support-from-expert-menu__shadow,
  .login-menu__shadow,
  .password-recovery-menu__shadow,
  .recovery-password-instructions__shadow,
  .order-a-call__shadow,
  .choose-city-menu__shadow {
    height: 1068.6%;
  }
  .recovery-password-instructions {
    width: 930px;
  }
  .recovery-password-instructions__container {
    padding-left: 8.125rem;
    padding-right: 8.125rem;
  }
  .recovery-password-instructions__text {
    font-size: 1.125rem;
    margin-top: 6rem;
  }
  .recovery-password-instructions__span-text {
    font-size: 1.125rem;
  }

  /* 1440px = 90em */
  @media (min-width: 90em) {
    .support-from-expert-menu__shadow,
    .login-menu__shadow,
    .password-recovery-menu__shadow,
    .recovery-password-instructions__shadow,
    .order-a-call__shadow,
    .choose-city-menu__shadow {
      height: 1093.2%;
    }
    .order-a-call__input-name {
      padding-left: 1.25rem;
    }
    .order-a-call__input-telephone {
      padding-left: 1.25rem;
    }
  }

  /* 1920px = 120em */
  @media (min-width: 120em) {
    .support-from-expert-menu__shadow,
    .login-menu__shadow,
    .password-recovery-menu__shadow,
    .recovery-password-instructions__shadow,
    .order-a-call__shadow,
    .choose-city-menu__shadow {
      height: 1005.5%;
    }
  }
}
</style>
