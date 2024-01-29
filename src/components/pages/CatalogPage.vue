<template>
  <div class="container-catalog">
    <div class="container-catalog__home-icon-and-title-flex">
      <img
        src="/imgs_main_page/img-home-icon.svg"
        alt=""
        class="container-catalog__home-icon"
      />
      <p class="container-catalog__home-title">Кардиотренажеры</p>
    </div>
    <h1 class="container-catalog__title">Кардиотренажеры</h1>
    <div class="container-catalog__advertise-border-top"></div>
    <div class="container-catalog__advertise">
      <div class="container-catalog__advertise-top-triangle"></div>
      <div class="container-catalog__advertise-logo-text-and-btn-flex">
        <img
          src="/imgs_main_page/brand_img_7.png"
          alt=""
          class="container-catalog__advertise-logo"
        />
        <p class="container-catalog__advertise-text">
          <span
            >БЕГОВАЯ<br
              class="container-catalog__br0-from320px-advertise-text"
            />
            ДОРОЖКА</span
          ><br class="container-catalog__br-from320px-advertise-text" />
          для подготовки<br
            class="container-catalog__br0-from320px-advertise-text"
          />
          к марафону
        </p>
        <button class="container-catalog__advertise-btn">Подробнее</button>
      </div>
      <img
        src="/imgs_main_page/catalog-advertise-hero-from320px.svg"
        alt=""
        class="container-catalog__advertise-hero-from320px"
      />
      <img
        src="/imgs_main_page/catalog-advertise-hero-from768px.svg"
        alt=""
        class="container-catalog__advertise-hero-from768px"
      />
      <div class="container-catalog__advertise-bottom-triangle"></div>
    </div>
    <div class="container-catalog__filters-btns-flex">
      <button class="container-catalog__filter-btn">
        <img
          src="/imgs_main_page/list-icon--activated.svg"
          alt=""
          class="container-catalog__filter-btn-icon"
        />
        <p class="container-catalog__filter-btn-text">Фильтр</p>
      </button>
      <button
        @click="sortItemsOrder"
        class="container-catalog__btn-sort-by-price"
      >
        По цене
        <img
          :src="sortCurrentIcon"
          alt=""
          class="container-catalog__btn-sort-by-price-icon-min"
        />
      </button>
      <button class="container-catalog__btn-sort-by-rating">По рейтингу</button>
    </div>
    <nav class="container-catalog__nav-btns-slider-overflow">
      <div class="container-catalog__nav-btns-track-flex">
        <button
          class="container-catalog__nav-btn container-catalog__nav-treadmils-btn slide-navbtns"
        >
          Беговые дорожки
        </button>
        <button
          class="container-catalog__nav-btn container-catalog__nav-ellipses--btn slide-navbtns"
        >
          Эллиптические
        </button>
        <button
          class="container-catalog__nav-btn container-catalog__nav-bicyle-btn slide-navbtns"
        >
          Велотренажеры
        </button>
        <button
          class="container-catalog__nav-btn container-catalog__nav-stepper-btn slide-navbtns"
        >
          Cтепперы
        </button>
        <button
          class="container-catalog__nav-btn container-catalog__nav-mountain-btn slide-navbtns"
        >
          Горнолыжные
        </button>
        <button
          class="container-catalog__nav-btn container-catalog__nav-rowing-btn slide-navbtns"
        >
          Гребные тренажеры
        </button>
      </div>
    </nav>
    <div class="container-catalog__filter-menu-and-catalog-list-container">
      <div class="container-catalog__filter-menu">
        <img
          src="/imgs_main_page/x-menus.svg"
          alt=""
          class="container-catalog__filter-menu-x-icon"
        />
        <p class="container-catalog__filter-menu-title">Фильтр</p>
        <div class="container-catalog__filter-menu-manufacturer-container">
          <p class="container-catalog__filter-menu-manufacturer-title">
            Производители
          </p>
          <div class="container-catalog__filter-menu-manufacturers-flex">
            <div class="container-catalog__filter-menu-manufacturer-flex">
              <input
                type="checkbox"
                class="container-catalog__filter-menu-manufacturer-checkbox"
                value="CardioPower"
                v-model="selectedManufacturers"
              />
              <label
                for="container-catalog__filter-menu-manufacturer-checkbox"
                class="container-catalog__filter-menu-manufacturer-label"
                >CardioPower</label
              >
            </div>
            <div class="container-catalog__filter-menu-manufacturer-flex">
              <input
                type="checkbox"
                class="container-catalog__filter-menu-manufacturer-checkbox"
                value="gym80"
                v-model="selectedManufacturers"
              />
              <label
                for="container-catalog__filter-menu-manufacturer-checkbox"
                class="container-catalog__filter-menu-manufacturer-label"
                >gym80</label
              >
            </div>
            <div class="container-catalog__filter-menu-manufacturer-flex">
              <input
                type="checkbox"
                class="container-catalog__filter-menu-manufacturer-checkbox"
                value="Bowflex"
                v-model="selectedManufacturers"
              />
              <label
                for="container-catalog__filter-menu-manufacturer-checkbox"
                class="container-catalog__filter-menu-manufacturer-label"
                >Bowflex</label
              >
            </div>
            <div class="container-catalog__filter-menu-manufacturer-flex">
              <input
                type="checkbox"
                class="container-catalog__filter-menu-manufacturer-checkbox"
                value="Nautilus"
                v-model="selectedManufacturers"
              />
              <label
                for="container-catalog__filter-menu-manufacturer-checkbox"
                class="container-catalog__filter-menu-manufacturer-label"
                >Nautilus</label
              >
            </div>
            <div class="container-catalog__filter-menu-manufacturer-flex">
              <input
                type="checkbox"
                id="allManufacturersCheckbox"
                class="container-catalog__filter-menu-manufacturer-checkbox"
                v-model="selectAll"
                @change="updateSelectedManufacturers"
              />
              <label
                for="allManufacturersCheckbox"
                class="container-catalog__filter-menu-manufacturer-label"
                >Все</label
              >
            </div>
          </div>
        </div>
        <div class="container-catalog__filter-menu-prices-range-container">
          <p class="container-catalog__filter-menu-slider-title">Цена</p>
          <prices-slider ref="pricesSlider"></prices-slider>
        </div>
        <div class="container-catalog__filter-menu-apply-changes-container">
          <button
            @click="applyFilters"
            class="container-catalog__filter-menu-apply-changes"
          >
            Применить
          </button>
        </div>
      </div>
      <catalog-list :sortedItems="sortedItems"></catalog-list>
    </div>
  </div>
  <div ref="observer"></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CatalogList from "../UI/CatalogList.vue";
import PricesSlider from "../UI/PricesSlider.vue";
import FavoritesPage from "../pages/FavoritesPage.vue";
export default {
  name: "CatalogPage",
  components: {
    CatalogList,
    PricesSlider,
    FavoritesPage,
  },
  data() {
    return {
      items: [
        {
          id: 11,
          title: "Беговая дорожка CardioPower S35",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,0 л.с.",
          manufacturer: "Cardio Power",
          currentPrice: "134 900",
          previousPrice: "141 900",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "DC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 12,
          title: "Беговая дорожка Bowflex 5500",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "155 000",
          previousPrice: "162 000",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "AAT",
          speedAdjustment: "0,8-14 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 13,
          title: "Беговая дорожка gym80 XyX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "gym80",
          currentPrice: "180 700",
          previousPrice: "194 300",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "xY3",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 8 дюймовый дисплей",
        },
        {
          id: 14,
          title: "Беговая дорожка Nautilus ht435",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,9 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "132 400",
          previousPrice: "137 500",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DDT",
          speedAdjustment: "0,4-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 15,
          title: "Беговая дорожка CardioPower Sk47",
          treadmillType: "Клубная",
          runnigTrack: "1280 х 520 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "CardioPower",
          currentPrice: "121 800",
          previousPrice: "128 200",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "ABC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Нет",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 16,
          title: "Беговая дорожка Nautilus 840k",
          treadmillType: "Домашняя",
          runnigTrack: "1320 x 510 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "194 300",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DFG",
          speedAdjustment: "0,6-19 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 17,
          title: "Беговая дорожка Bowflex 4400",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,4 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "154 100",
          previousPrice: "157 300",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "VVV",
          speedAdjustment: "0,5-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 18,
          title: "Беговая дорожка Nautilus 740L",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "180 700",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "OVB",
          speedAdjustment: "0,6-18 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Есть",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 19,
          title: "Беговая дорожка gym80 XxX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "gym80",
          currentPrice: "167 777",
          previousPrice: "170 234",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "SUR",
          speedAdjustment: "0,6-23 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 9 дюймовый дисплей",
        },
        {
          id: 20,
          title: "Беговая дорожка gym80 y7y54",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "gym80",
          currentPrice: "157 300",
          previousPrice: "167 777",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "DAK",
          speedAdjustment: "0,7-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 21,
          title: "Беговая дорожка CardioPower S35",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,0 л.с.",
          manufacturer: "Cardio Power",
          currentPrice: "134 900",
          previousPrice: "141 900",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "DC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 22,
          title: "Беговая дорожка Bowflex 5500",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "155 000",
          previousPrice: "162 000",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "AAT",
          speedAdjustment: "0,8-14 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 23,
          title: "Беговая дорожка gym80 XyX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "gym80",
          currentPrice: "180 700",
          previousPrice: "194 300",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "xY3",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 8 дюймовый дисплей",
        },
        {
          id: 24,
          title: "Беговая дорожка Nautilus ht435",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,9 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "132 400",
          previousPrice: "137 500",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DDT",
          speedAdjustment: "0,4-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 25,
          title: "Беговая дорожка CardioPower Sk47",
          treadmillType: "Клубная",
          runnigTrack: "1280 х 520 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "CardioPower",
          currentPrice: "121 800",
          previousPrice: "128 200",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "ABC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Нет",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 26,
          title: "Беговая дорожка Nautilus 840k",
          treadmillType: "Домашняя",
          runnigTrack: "1320 x 510 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "194 300",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DFG",
          speedAdjustment: "0,6-19 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 27,
          title: "Беговая дорожка Bowflex 4400",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,4 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "154 100",
          previousPrice: "157 300",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "VVV",
          speedAdjustment: "0,5-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 28,
          title: "Беговая дорожка Nautilus 740L",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "180 700",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "OVB",
          speedAdjustment: "0,6-18 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Есть",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 29,
          title: "Беговая дорожка gym80 XxX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "gym80",
          currentPrice: "167 777",
          previousPrice: "170 234",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "SUR",
          speedAdjustment: "0,6-23 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 9 дюймовый дисплей",
        },
        {
          id: 30,
          title: "Беговая дорожка gym80 y7y54",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "gym80",
          currentPrice: "157 300",
          previousPrice: "167 777",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "DAK",
          speedAdjustment: "0,7-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 31,
          title: "Беговая дорожка CardioPower S35",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,0 л.с.",
          manufacturer: "Cardio Power",
          currentPrice: "134 900",
          previousPrice: "141 900",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "DC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 32,
          title: "Беговая дорожка Bowflex 5500",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "155 000",
          previousPrice: "162 000",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "AAT",
          speedAdjustment: "0,8-14 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 33,
          title: "Беговая дорожка gym80 XyX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "gym80",
          currentPrice: "180 700",
          previousPrice: "194 300",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "xY3",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 8 дюймовый дисплей",
        },
        {
          id: 34,
          title: "Беговая дорожка Nautilus ht435",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,9 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "132 400",
          previousPrice: "137 500",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DDT",
          speedAdjustment: "0,4-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 35,
          title: "Беговая дорожка CardioPower Sk47",
          treadmillType: "Клубная",
          runnigTrack: "1280 х 520 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "CardioPower",
          currentPrice: "121 800",
          previousPrice: "128 200",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "ABC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Нет",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 36,
          title: "Беговая дорожка Nautilus 840k",
          treadmillType: "Домашняя",
          runnigTrack: "1320 x 510 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "194 300",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DFG",
          speedAdjustment: "0,6-19 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 37,
          title: "Беговая дорожка Bowflex 4400",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,4 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "154 100",
          previousPrice: "157 300",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "VVV",
          speedAdjustment: "0,5-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 38,
          title: "Беговая дорожка Nautilus 740L",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "180 700",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "OVB",
          speedAdjustment: "0,6-18 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Есть",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 39,
          title: "Беговая дорожка gym80 XxX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "gym80",
          currentPrice: "167 777",
          previousPrice: "170 234",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "SUR",
          speedAdjustment: "0,6-23 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 9 дюймовый дисплей",
        },
        {
          id: 40,
          title: "Беговая дорожка gym80 y7y54",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "gym80",
          currentPrice: "157 300",
          previousPrice: "167 777",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "DAK",
          speedAdjustment: "0,7-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 41,
          title: "Беговая дорожка CardioPower S35",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,0 л.с.",
          manufacturer: "Cardio Power",
          currentPrice: "134 900",
          previousPrice: "141 900",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "DC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 42,
          title: "Беговая дорожка Bowflex 5500",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "155 000",
          previousPrice: "162 000",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "AAT",
          speedAdjustment: "0,8-14 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 43,
          title: "Беговая дорожка gym80 XyX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "gym80",
          currentPrice: "180 700",
          previousPrice: "194 300",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "xY3",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 8 дюймовый дисплей",
        },
        {
          id: 44,
          title: "Беговая дорожка Nautilus ht435",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,9 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "132 400",
          previousPrice: "137 500",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DDT",
          speedAdjustment: "0,4-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 45,
          title: "Беговая дорожка CardioPower Sk47",
          treadmillType: "Клубная",
          runnigTrack: "1280 х 520 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "CardioPower",
          currentPrice: "121 800",
          previousPrice: "128 200",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "ABC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Нет",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 46,
          title: "Беговая дорожка Nautilus 840k",
          treadmillType: "Домашняя",
          runnigTrack: "1320 x 510 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "194 300",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DFG",
          speedAdjustment: "0,6-19 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 47,
          title: "Беговая дорожка Bowflex 4400",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,4 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "154 100",
          previousPrice: "157 300",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "VVV",
          speedAdjustment: "0,5-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 48,
          title: "Беговая дорожка Nautilus 740L",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "180 700",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "OVB",
          speedAdjustment: "0,6-18 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Есть",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 49,
          title: "Беговая дорожка gym80 XxX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "gym80",
          currentPrice: "167 777",
          previousPrice: "170 234",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "SUR",
          speedAdjustment: "0,6-23 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 9 дюймовый дисплей",
        },
        {
          id: 50,
          title: "Беговая дорожка gym80 y7y54",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "gym80",
          currentPrice: "157 300",
          previousPrice: "167 777",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "DAK",
          speedAdjustment: "0,7-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 51,
          title: "Беговая дорожка CardioPower S35",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,0 л.с.",
          manufacturer: "Cardio Power",
          currentPrice: "134 900",
          previousPrice: "141 900",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "DC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 52,
          title: "Беговая дорожка Bowflex 5500",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "155 000",
          previousPrice: "162 000",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "AAT",
          speedAdjustment: "0,8-14 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 53,
          title: "Беговая дорожка gym80 XyX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "gym80",
          currentPrice: "180 700",
          previousPrice: "194 300",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "xY3",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 8 дюймовый дисплей",
        },
        {
          id: 54,
          title: "Беговая дорожка Nautilus ht435",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,9 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "132 400",
          previousPrice: "137 500",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DDT",
          speedAdjustment: "0,4-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 55,
          title: "Беговая дорожка CardioPower Sk47",
          treadmillType: "Клубная",
          runnigTrack: "1280 х 520 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "CardioPower",
          currentPrice: "121 800",
          previousPrice: "128 200",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "ABC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Нет",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 56,
          title: "Беговая дорожка Nautilus 840k",
          treadmillType: "Домашняя",
          runnigTrack: "1320 x 510 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "194 300",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DFG",
          speedAdjustment: "0,6-19 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 57,
          title: "Беговая дорожка Bowflex 4400",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,4 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "154 100",
          previousPrice: "157 300",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "VVV",
          speedAdjustment: "0,5-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 58,
          title: "Беговая дорожка Nautilus 740L",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "180 700",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "OVB",
          speedAdjustment: "0,6-18 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Есть",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 59,
          title: "Беговая дорожка gym80 XxX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "gym80",
          currentPrice: "167 777",
          previousPrice: "170 234",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "SUR",
          speedAdjustment: "0,6-23 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 9 дюймовый дисплей",
        },
        {
          id: 60,
          title: "Беговая дорожка gym80 y7y54",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "gym80",
          currentPrice: "157 300",
          previousPrice: "167 777",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "DAK",
          speedAdjustment: "0,7-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 61,
          title: "Беговая дорожка CardioPower S35",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,0 л.с.",
          manufacturer: "Cardio Power",
          currentPrice: "134 900",
          previousPrice: "141 900",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "DC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 62,
          title: "Беговая дорожка Bowflex 5500",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "155 000",
          previousPrice: "162 000",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "AAT",
          speedAdjustment: "0,8-14 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 63,
          title: "Беговая дорожка gym80 XyX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "gym80",
          currentPrice: "180 700",
          previousPrice: "194 300",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "xY3",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 8 дюймовый дисплей",
        },
        {
          id: 64,
          title: "Беговая дорожка Nautilus ht435",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,9 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "132 400",
          previousPrice: "137 500",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DDT",
          speedAdjustment: "0,4-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 65,
          title: "Беговая дорожка CardioPower Sk47",
          treadmillType: "Клубная",
          runnigTrack: "1280 х 520 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "CardioPower",
          currentPrice: "121 800",
          previousPrice: "128 200",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "ABC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Нет",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 66,
          title: "Беговая дорожка Nautilus 840k",
          treadmillType: "Домашняя",
          runnigTrack: "1320 x 510 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "194 300",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DFG",
          speedAdjustment: "0,6-19 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 67,
          title: "Беговая дорожка Bowflex 4400",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,4 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "154 100",
          previousPrice: "157 300",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "VVV",
          speedAdjustment: "0,5-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 68,
          title: "Беговая дорожка Nautilus 740L",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "180 700",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "OVB",
          speedAdjustment: "0,6-18 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Есть",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 69,
          title: "Беговая дорожка gym80 XxX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "gym80",
          currentPrice: "167 777",
          previousPrice: "170 234",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "SUR",
          speedAdjustment: "0,6-23 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 9 дюймовый дисплей",
        },
        {
          id: 70,
          title: "Беговая дорожка gym80 y7y54",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "gym80",
          currentPrice: "157 300",
          previousPrice: "167 777",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "DAK",
          speedAdjustment: "0,7-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 71,
          title: "Беговая дорожка CardioPower S35",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,0 л.с.",
          manufacturer: "Cardio Power",
          currentPrice: "134 900",
          previousPrice: "141 900",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "DC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 72,
          title: "Беговая дорожка Bowflex 5500",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "155 000",
          previousPrice: "162 000",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "AAT",
          speedAdjustment: "0,8-14 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 73,
          title: "Беговая дорожка gym80 XyX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "gym80",
          currentPrice: "180 700",
          previousPrice: "194 300",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "xY3",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 8 дюймовый дисплей",
        },
        {
          id: 74,
          title: "Беговая дорожка Nautilus ht435",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,9 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "132 400",
          previousPrice: "137 500",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DDT",
          speedAdjustment: "0,4-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 75,
          title: "Беговая дорожка CardioPower Sk47",
          treadmillType: "Клубная",
          runnigTrack: "1280 х 520 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "CardioPower",
          currentPrice: "121 800",
          previousPrice: "128 200",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "ABC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Нет",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 76,
          title: "Беговая дорожка Nautilus 840k",
          treadmillType: "Домашняя",
          runnigTrack: "1320 x 510 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "194 300",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DFG",
          speedAdjustment: "0,6-19 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 77,
          title: "Беговая дорожка Bowflex 4400",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,4 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "154 100",
          previousPrice: "157 300",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "VVV",
          speedAdjustment: "0,5-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 78,
          title: "Беговая дорожка Nautilus 740L",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "180 700",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "OVB",
          speedAdjustment: "0,6-18 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Есть",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 79,
          title: "Беговая дорожка gym80 XxX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "gym80",
          currentPrice: "167 777",
          previousPrice: "170 234",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "SUR",
          speedAdjustment: "0,6-23 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 9 дюймовый дисплей",
        },
        {
          id: 80,
          title: "Беговая дорожка gym80 y7y54",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "gym80",
          currentPrice: "157 300",
          previousPrice: "167 777",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "DAK",
          speedAdjustment: "0,7-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 81,
          title: "Беговая дорожка CardioPower S35",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,0 л.с.",
          manufacturer: "Cardio Power",
          currentPrice: "134 900",
          previousPrice: "141 900",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "DC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 82,
          title: "Беговая дорожка Bowflex 5500",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "155 000",
          previousPrice: "162 000",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "AAT",
          speedAdjustment: "0,8-14 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 83,
          title: "Беговая дорожка gym80 XyX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "gym80",
          currentPrice: "180 700",
          previousPrice: "194 300",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "xY3",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 8 дюймовый дисплей",
        },
        {
          id: 84,
          title: "Беговая дорожка Nautilus ht435",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,9 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "132 400",
          previousPrice: "137 500",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DDT",
          speedAdjustment: "0,4-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 85,
          title: "Беговая дорожка CardioPower Sk47",
          treadmillType: "Клубная",
          runnigTrack: "1280 х 520 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "CardioPower",
          currentPrice: "121 800",
          previousPrice: "128 200",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "ABC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Нет",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 86,
          title: "Беговая дорожка Nautilus 840k",
          treadmillType: "Домашняя",
          runnigTrack: "1320 x 510 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "194 300",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DFG",
          speedAdjustment: "0,6-19 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 87,
          title: "Беговая дорожка Bowflex 4400",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,4 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "154 100",
          previousPrice: "157 300",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "VVV",
          speedAdjustment: "0,5-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 88,
          title: "Беговая дорожка Nautilus 740L",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "180 700",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "OVB",
          speedAdjustment: "0,6-18 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Есть",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 89,
          title: "Беговая дорожка gym80 XxX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "gym80",
          currentPrice: "167 777",
          previousPrice: "170 234",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "SUR",
          speedAdjustment: "0,6-23 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 9 дюймовый дисплей",
        },
        {
          id: 90,
          title: "Беговая дорожка gym80 y7y54",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "gym80",
          currentPrice: "157 300",
          previousPrice: "167 777",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "DAK",
          speedAdjustment: "0,7-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 91,
          title: "Беговая дорожка CardioPower S35",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,0 л.с.",
          manufacturer: "Cardio Power",
          currentPrice: "134 900",
          previousPrice: "141 900",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "DC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 92,
          title: "Беговая дорожка Bowflex 5500",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "155 000",
          previousPrice: "162 000",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "AAT",
          speedAdjustment: "0,8-14 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 93,
          title: "Беговая дорожка gym80 XyX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "gym80",
          currentPrice: "180 700",
          previousPrice: "194 300",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "xY3",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 8 дюймовый дисплей",
        },
        {
          id: 94,
          title: "Беговая дорожка Nautilus ht435",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,9 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "132 400",
          previousPrice: "137 500",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DDT",
          speedAdjustment: "0,4-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 95,
          title: "Беговая дорожка CardioPower Sk47",
          treadmillType: "Клубная",
          runnigTrack: "1280 х 520 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "CardioPower",
          currentPrice: "121 800",
          previousPrice: "128 200",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "ABC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Нет",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 96,
          title: "Беговая дорожка Nautilus 840k",
          treadmillType: "Домашняя",
          runnigTrack: "1320 x 510 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "194 300",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DFG",
          speedAdjustment: "0,6-19 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 97,
          title: "Беговая дорожка Bowflex 4400",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,4 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "154 100",
          previousPrice: "157 300",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "VVV",
          speedAdjustment: "0,5-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 98,
          title: "Беговая дорожка Nautilus 740L",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "180 700",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "OVB",
          speedAdjustment: "0,6-18 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Есть",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 99,
          title: "Беговая дорожка gym80 XxX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "gym80",
          currentPrice: "167 777",
          previousPrice: "170 234",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "SUR",
          speedAdjustment: "0,6-23 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 9 дюймовый дисплей",
        },
        {
          id: 100,
          title: "Беговая дорожка gym80 y7y54",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "gym80",
          currentPrice: "157 300",
          previousPrice: "167 777",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "DAK",
          speedAdjustment: "0,7-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
      ],
      sortedItems: [
        {
          id: 1,
          title: "Беговая дорожка CardioPower S35",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,0 л.с.",
          manufacturer: "Cardio Power",
          currentPrice: "134 900",
          previousPrice: "141 900",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "DC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 2,
          title: "Беговая дорожка Bowflex 5500",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "155 000",
          previousPrice: "162 000",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "AAT",
          speedAdjustment: "0,8-14 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 3,
          title: "Беговая дорожка gym80 XyX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "gym80",
          currentPrice: "180 700",
          previousPrice: "194 300",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "xY3",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 8 дюймовый дисплей",
        },
        {
          id: 4,
          title: "Беговая дорожка Nautilus ht435",
          treadmillType: "Домашняя",
          runnigTrack: "1200 х 450 мм",
          enginePower: "2,9 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "132 400",
          previousPrice: "137 500",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DDT",
          speedAdjustment: "0,4-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 5,
          title: "Беговая дорожка CardioPower Sk47",
          treadmillType: "Клубная",
          runnigTrack: "1280 х 520 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "CardioPower",
          currentPrice: "121 800",
          previousPrice: "128 200",
          brandLogoSrc: "imgs_main_page/brand_img_4.png",
          engineType: "ABC",
          speedAdjustment: "0,5-22 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Нет",
          console: "LCD 12 дюймовый дисплей",
        },
        {
          id: 6,
          title: "Беговая дорожка Nautilus 840k",
          treadmillType: "Домашняя",
          runnigTrack: "1320 x 510 мм",
          enginePower: "3,2 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "194 300",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "DFG",
          speedAdjustment: "0,6-19 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 7,
          title: "Беговая дорожка Bowflex 4400",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,4 л.с.",
          manufacturer: "Bowflex",
          currentPrice: "154 100",
          previousPrice: "157 300",
          brandLogoSrc: "imgs_main_page/brand_img_1.png",
          engineType: "VVV",
          speedAdjustment: "0,5-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Нет",
          console: "LCD 7 дюймовый дисплей",
        },
        {
          id: 8,
          title: "Беговая дорожка Nautilus 740L",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "Nautilus",
          currentPrice: "180 700",
          previousPrice: "206 000",
          brandLogoSrc: "imgs_main_page/brand_img_10.png",
          engineType: "OVB",
          speedAdjustment: "0,6-18 км/ч",
          qtyoflayersrunnigTrack: "3-х слойное",
          MP3: "Есть",
          console: "LCD 11 дюймовый дисплей",
        },
        {
          id: 9,
          title: "Беговая дорожка gym80 XxX",
          treadmillType: "Домашняя",
          runnigTrack: "1300 х 500 мм",
          enginePower: "3,0 л.с.",
          manufacturer: "gym80",
          currentPrice: "167 777",
          previousPrice: "170 234",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "SUR",
          speedAdjustment: "0,6-23 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 9 дюймовый дисплей",
        },
        {
          id: 10,
          title: "Беговая дорожка gym80 y7y54",
          treadmillType: "Клубная",
          runnigTrack: "1200 х 450 мм",
          enginePower: "3,6 л.с.",
          manufacturer: "gym80",
          currentPrice: "157 300",
          previousPrice: "167 777",
          brandLogoSrc: "imgs_main_page/brand_img_6.png",
          engineType: "DAK",
          speedAdjustment: "0,7-21 км/ч",
          qtyoflayersrunnigTrack: "2-х слойное",
          MP3: "Есть",
          console: "LCD 7 дюймовый дисплей",
        },
      ],
      itemsPerPage: 10,
      page: 1,
      sortState: false,
      sortCurrentIcon: "/imgs_main_page/sort-icon-min.svg",
      sortMinPriceIcon: "/imgs_main_page/sort-icon-min.svg",
      sortMaxPriceIcon: "/imgs_main_page/sort-icon-max.svg",
      originalItemsPriceSort: [],
      selectedManufacturers: [],
      allManufacturers: ["CardioPower", "gym80", "Bowflex", "Nautilus"],
    };
  },
  computed: {
    ...mapState(["selectedItem"]),
    sortedItems() {
      /* sort items by price from min to max and vice versa starts */
      if (this.sortState) {
        return [...this.sortedItems].sort(
          (a, b) => parseInt(a.currentPrice) - parseInt(b.currentPrice)
        );
      } else {
        return [...this.sortedItems].sort(
          (a, b) => parseInt(b.currentPrice) - parseInt(a.currentPrice)
        );
      }
      /* sort items by price from min to max and vice versa ends */
    },
  },
  created() {
    this.originalItemsPriceSort = [...this.sortedItems];
  },
  methods: {
    ...mapActions(["setSelectedItem"]),
    showItemDetails(item) {
      this.setSelectedItem(item);
    },
    sortItemsOrder() {
      const sortIconMin = document.querySelector(
        ".container-catalog__btn-sort-by-price-icon-min"
      );
      sortIconMin.style.display = "block";
      if (this.sortCurrentIcon === this.sortMaxPriceIcon) {
        this.sortCurrentIcon = this.sortMinPriceIcon;
      } else {
        this.sortCurrentIcon = this.sortMaxPriceIcon;
      }
      this.sortState = !this.sortState;
    },
    async loadMoreItems() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = this.page * this.itemsPerPage;
      const moreItems = await new Promise((resolve) =>
        setTimeout(() => resolve(this.items.slice(startIndex, endIndex)), 500)
      );
      this.page++;
      this.sortedItems = [...this.sortedItems, ...moreItems];
      this.originalItemsPriceSort = [
        ...this.originalItemsPriceSort,
        ...moreItems,
      ];
    },
    applyFilters() {
      /* filter prices in priceSlider starts */
      const pricesSlider = this.$refs.pricesSlider;
      const minPrice = parseInt(pricesSlider.$refs.minPrice.value);
      const maxPrice = parseInt(pricesSlider.$refs.maxPrice.value);
      this.sortedItems = this.originalItemsPriceSort.filter((item) => {
        const itemPrice = parseInt(item.currentPrice.replace(/\s/g, ""));
        return itemPrice >= minPrice && itemPrice <= maxPrice;
      });
      console.log(this.sortedItems);
      this.sortByManufacturer();
    },
    updateSelectedManufacturers() {
      if (this.selectAll) {
        this.selectedManufacturers = [...this.allManufacturers];
      } else {
        this.selectedManufacturers = [];
      }
    },
    sortByManufacturer() {
      let filteredByManufacturer = [];
      if (
        this.selectedManufacturers.length > 0 &&
        this.selectedManufacturers.length < 4
      ) {
        filteredByManufacturer = this.originalItemsPriceSort.filter((item) =>
          this.selectedManufacturers.includes(item.manufacturer)
        );
      } else {
        filteredByManufacturer = this.originalItemsPriceSort;
      }
      this.sortedItems = this.sortedItems.filter((item) =>
        filteredByManufacturer.includes(item)
      );
    },
  },
  mounted() {
    const navBtnEllipses = document.querySelector(
        ".container-catalog__nav-ellipses--btn"
      ),
      navBtnBicyle = document.querySelector(
        ".container-catalog__nav-bicyle-btn"
      ),
      navBtnStepper = document.querySelector(
        ".container-catalog__nav-stepper-btn"
      ),
      navBtnMountain = document.querySelector(
        ".container-catalog__nav-mountain-btn"
      ),
      navBtnRowing = document.querySelector(
        ".container-catalog__nav-rowing-btn"
      );
    const btnsArr = [
      navBtnEllipses,
      navBtnBicyle,
      navBtnStepper,
      navBtnMountain,
      navBtnRowing,
    ];
    btnsArr.forEach((btn) => {
      btn.onmouseover = function () {
        btn.style.background = "#f53b49";
        btn.style.color = "#ffffff";
      };
      btn.onmouseout = function () {
        btn.style.background = "rgba(144, 156, 181, 0.2)";
        btn.style.color = "#384255";
      };
    });
    if (window.innerWidth < 1024) {
      let slider = document.querySelector(
          ".container-catalog__nav-btns-slider-overflow"
        ),
        sliderTrack = slider.querySelector(
          ".container-catalog__nav-btns-track-flex"
        ),
        slides = [...slider.querySelectorAll(".slide-navbtns")],
        slideWidth = slides[0].offsetWidth,
        slideIndex = 0,
        posInit = 0,
        posX1 = 0,
        posX2 = 0,
        posY1 = 0,
        posY2 = 0,
        posFinal = 0,
        isSwipe = false,
        isScroll = false,
        allowSwipe = true,
        transition = true,
        nextTrf = 0,
        prevTrf = 0,
        lastTrf = (slides.length - 1) * slideWidth,
        posThreshold = slides[0].offsetWidth * 0.35,
        trfRegExp = /([-0-9.]+(?=px))/,
        swipeStartTime,
        swipeEndTime,
        getEvent = function () {
          return event.type.search("touch") !== -1 ? event.touches[0] : event;
        },
        slide = function () {
          if (transition) {
            sliderTrack.style.transition = "transform .5s";
          }
          sliderTrack.style.transform = `translate3d(-${
            slideIndex * slideWidth
          }px, 0px, 0px)`;
        },
        swipeStart = function () {
          let evt = getEvent();

          if (allowSwipe) {
            swipeStartTime = Date.now();

            transition = true;

            nextTrf = (slideIndex + 1) * -slideWidth;
            prevTrf = (slideIndex - 1) * -slideWidth;

            posInit = posX1 = evt.clientX;
            posY1 = evt.clientY;

            sliderTrack.style.transition = "";

            document.addEventListener("touchmove", swipeAction);
            document.addEventListener("mousemove", swipeAction);
            document.addEventListener("touchend", swipeEnd);
            document.addEventListener("mouseup", swipeEnd);
          }
        },
        swipeAction = function () {
          let evt = getEvent(),
            style = sliderTrack.style.transform,
            transform = +style.match(trfRegExp)[0];

          posX2 = posX1 - evt.clientX;
          posX1 = evt.clientX;

          posY2 = posY1 - evt.clientY;
          posY1 = evt.clientY;

          if (!isSwipe && !isScroll) {
            let posY = Math.abs(posY2);
            if (posY > 7 || posX2 === 0) {
              isScroll = true;
              allowSwipe = false;
            } else if (posY < 7) {
              isSwipe = true;
            }
          }

          if (isSwipe) {
            if (slideIndex === 0) {
              if (posInit < posX1) {
                setTransform(transform, 0);
                return;
              } else {
                allowSwipe = true;
              }
            }

            // запрет ухода вправо на последнем слайде
            if (slideIndex === slides.length - 1) {
              if (posInit > posX1) {
                setTransform(transform, lastTrf);
                return;
              } else {
                allowSwipe = true;
              }
            }

            if (
              (posInit > posX1 && transform < nextTrf) ||
              (posInit < posX1 && transform > prevTrf)
            ) {
              reachEdge();
              return;
            }

            sliderTrack.style.transform = `translate3d(${
              transform - posX2
            }px, 0px, 0px)`;
          }
        },
        swipeEnd = function () {
          posFinal = posInit - posX1;

          isScroll = false;
          isSwipe = false;

          document.removeEventListener("touchmove", swipeAction);
          document.removeEventListener("mousemove", swipeAction);
          document.removeEventListener("touchend", swipeEnd);
          document.removeEventListener("mouseup", swipeEnd);

          if (allowSwipe) {
            swipeEndTime = Date.now();
            if (
              Math.abs(posFinal) > posThreshold ||
              swipeEndTime - swipeStartTime < 300
            ) {
              if (posInit < posX1) {
                slideIndex--;
              } else if (posInit > posX1) {
                slideIndex++;
              }
            }

            if (posInit !== posX1) {
              allowSwipe = false;
              slide();
            } else {
              allowSwipe = true;
            }
          } else {
            allowSwipe = true;
          }
        },
        setTransform = function (transform, comapreTransform) {
          if (transform >= comapreTransform) {
            if (transform > comapreTransform) {
              sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
            }
          }
          allowSwipe = false;
        },
        reachEdge = function () {
          transition = false;
          swipeEnd();
          allowSwipe = true;
        };

      sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";

      sliderTrack.addEventListener("transitionend", () => (allowSwipe = true));
      slider.addEventListener("touchstart", swipeStart);
      slider.addEventListener("mousedown", swipeStart);
    }
    const filterMenu = document.querySelector(
      ".container-catalog__filter-menu"
    );
    document.querySelector(".container-catalog__filter-btn").onclick = () => {
      filterMenu.style.display = "block";
    };
    document.querySelector(".container-catalog__filter-menu-x-icon").onclick =
      () => {
        filterMenu.style.display = "none";
      };
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        this.loadMoreItems();
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
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
.container-catalog {
  position: relative;
  padding: 0.625rem 0.625rem 3.75rem 0.625rem;
}
.container-catalog__home-icon-and-title-flex {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.container-catalog__home-title {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: $gray-col;
  margin: 0rem;
}
.container-catalog__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: $dark-col;
  margin-top: 1.87rem;
  margin-bottom: 1rem;
}
.container-catalog__advertise-border-top {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.2);
}
.container-catalog__advertise {
  position: relative;
  height: 163vw;
  background: $dark-col;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 1.56rem;
}
.container-catalog__advertise-top-triangle {
  position: absolute;
  border-left: 132vw solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 187vw solid $dark-col;
  rotate: -180deg;
  z-index: 2;
}
.container-catalog__advertise-logo-text-and-btn-flex {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}
.container-catalog__advertise-logo {
  width: 210px;
  height: 92px;
  margin-left: 0.98rem;
  z-index: 2;
}
.container-catalog__advertise-text {
  font-family: "Inter", sans-serif;
  font-size: 1.35419rem;
  font-weight: 900;
  color: $white-col;
  margin-left: 1.85rem;
  z-index: 2;
}
.container-catalog__advertise-text span {
  color: $red-col;
}
.container-catalog__advertise-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.875rem 1.4rem 0.875rem 1.4rem;
  border: none;
  background: $red-col;
  width: fit-content;
  border-radius: 0.375rem;
  margin-left: 1.875rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $white-col;
  z-index: 2;
}
.container-catalog__advertise-hero-from320px {
  position: absolute;
  right: -0.05rem;
  margin-top: 10.1rem;
  border-radius: 6px;
  width: 74%;
  bottom: 0rem;
  z-index: 1;
}
.container-catalog__advertise-bottom-triangle {
  position: absolute;
  border-left: 30vw solid transparent;
  border-right: 60vw solid transparent;
  border-bottom: 23vw solid $red-col;
  margin-left: 0.56rem;
  bottom: 0rem;
  z-index: 2;
}
.container-catalog__filters-btns-flex {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
}
.container-catalog__filter-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.313rem;
  border: none;
  background: transparent;
  padding: 0rem;
  cursor: pointer;
}
.container-catalog__filter-btn-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $dark-blue-col;
  margin: 0rem;
}
.container-catalog__btn-sort-by-price,
.container-catalog__btn-sort-by-rating {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  border: none;
  background: transparent;
  padding: 0rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $gray-col;
  cursor: pointer;
}
.container-catalog__btn-sort-by-price-icon-min {
  display: none;
}
.container-catalog__btn-sort-by-price:hover,
.container-catalog__btn-sort-by-rating:hover {
  color: $dark-blue-col;
}
.container-catalog__filter-menu {
  display: none;
  position: absolute;
  background: $white-col;
  width: 100%;
  left: 0rem;
  z-index: 2;
}
.container-catalog__filter-menu-x-icon {
  position: absolute;
  right: 1rem;
  top: 1.875rem;
  cursor: pointer;
}
.container-catalog__filter-menu-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $dark-blue-col;
  margin-left: 0.62rem;
  margin-top: 3rem;
  margin-bottom: 0rem;
}
.container-catalog__filter-menu-manufacturer-container {
  padding: 1.25rem;
}
.container-catalog__filter-menu-manufacturer-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $dark-blue-col;
}
.container-catalog__filter-menu-manufacturers-flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container-catalog__filter-menu-manufacturer-flex {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #000;
  border-radius: 2px;
  margin: 0rem;
  outline: none;
  cursor: pointer;
}

input[type="checkbox"]:checked:before {
  content: "\2714";
  display: block;
  width: 14px;
  height: 14px;
  text-align: center;
  line-height: 12px;
  color: #fff;
  background: #2fc509;
  font-size: 14px;
}
.container-catalog__filter-menu-manufacturer-label {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $dark-blue-col;
}
.container-catalog__filter-menu-prices-range-container {
  padding: 1.25rem 1.25rem 2.25rem 1.25rem;
}
.container-catalog__filter-menu-slider-title {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $dark-blue-col;
}
.container-catalog__filter-menu-apply-changes-container {
  background: #f6f6f6;
  padding: 0rem 1.25rem;
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.13);
}
.container-catalog__filter-menu-apply-changes {
  border: none;
  border-radius: 4px;
  background: $red-col;
  padding: 12px 20px;
  color: $white-col;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  margin: 1.25rem 0rem;
  cursor: pointer;
}
.container-catalog__nav-btns-slider-overflow {
  width: 100%;
  overflow: hidden;
}
.container-catalog__nav-btns-track-flex {
  display: flex;
  gap: 0.5rem;
}
.container-catalog__nav-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0.5rem 0.75rem 0.5625rem 0.75rem;
  border: none;
  background: rgba(144, 156, 181, 0.2);
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $dark-blue-col;
}
.container-catalog__nav-treadmils-btn {
  background: $red-col;
  color: $white-col;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .container-catalog {
    padding: 2.5rem 2.5rem 3.75rem 2.5rem;
  }
  .container-catalog__title {
    font-size: 1.875rem;
  }
  .container-catalog__advertise {
    height: 320px;
  }
  .container-catalog__advertise-top-triangle {
    border-left: 54vw solid transparent;
    border-right: 0vw solid transparent;
    border-bottom: 210vw solid $dark-col;
  }
  .container-catalog__br0-from320px-advertise-text,
  .container-catalog__advertise-hero-from320px {
    display: none;
  }
  .container-catalog__advertise-hero-from768px {
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    height: 320px;
  }
  .container-catalog__advertise-bottom-triangle {
    border-left: 40vw solid transparent;
    border-right: 20vw solid transparent;
    border-bottom: 32px solid $red-col;
    margin-left: 2rem;
  }
  .container-catalog__filter-menu {
    padding: 2.25rem;
  }
  .container-catalog__filter-menu-x-icon {
    right: 1.875rem;
    top: 2.875rem;
  }
  .container-catalog__filter-menu-title {
    font-size: 1.125rem;
    margin-left: 1.25rem;
  }
  .container-catalog__filter-menu-prices-range-container {
    position: absolute;
    top: 8rem;
    right: 6rem;
  }
  .container-catalog__filter-menu-apply-changes-container {
    position: absolute;
    left: 0rem;
    right: 0rem;
    padding: 0.875rem 5rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-catalog__advertise-top-triangle {
    border-left: 53.7vw solid transparent;
  }
  .container-catalog__advertise-bottom-triangle {
    border-left: 43vw solid transparent;
    border-bottom: 32px solid $red-col;
  }
  .container-catalog__nav-btns-track-flex {
    gap: 0.75rem;
  }
  .container-catalog__filter-btn,
  .container-catalog__filter-menu-x-icon,
  .container-catalog__filter-menu-title {
    display: none;
  }
  .container-catalog__filter-menu-and-catalog-list-container {
    min-height: 420px;
  }
  .container-catalog__filter-menu {
    display: flex;
    /* position: relative; */
    background: transparent;
    width: 220px;
    margin-top: 0rem;
    left: auto;
    right: 2.5rem;
    /* margin-bottom: 25rem; */
    /* bottom: 5rem; */
    padding: 0rem;
  }
  .container-catalog__filter-menu-manufacturer-container {
    padding: 0rem;
  }
  .container-catalog__filter-menu-manufacturer-title {
    margin-top: 0rem;
  }
  .container-catalog__filter-menu-manufacturers-flex {
    gap: 0.75rem;
  }
  .container-catalog__filter-menu-prices-range-container::before {
    content: "";
    position: absolute;
    width: 100%;
    border: 1px solid rgba(133, 143, 164, 0.2);
    margin-top: -0.875rem;
  }
  .container-catalog__filter-menu-prices-range-container {
    padding: 0rem;
    right: 0rem;
    margin-top: 5.1rem;
  }
  .container-catalog__filter-menu-prices-range-container::after {
    content: "";
    position: absolute;
    width: 100%;
    border: 1px solid rgba(133, 143, 164, 0.2);
    margin-top: 2.4rem;
  }
  .container-catalog__filter-menu-apply-changes-container {
    background: transparent;
    padding: 0rem;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.13);
    top: 0rem;
    margin-top: 23.5rem;
  }
  .container-catalog__filter-menu-apply-changes {
    border: 1px solid $red-col;
    border-radius: 4px;
    background: transparent;
    padding: 12px 20px;
    margin: 0rem;
    color: $red-col;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-catalog {
    padding: 3.75rem 10.313rem 7.5rem 10.313rem;
  }
  .container-catalog__advertise {
    height: 400px;
  }
  .container-catalog__advertise-top-triangle {
    border-left: 47vw solid transparent;
    border-bottom: 200vw solid $dark-col;
  }
  .container-catalog__advertise-logo {
    margin-left: 3.1rem;
  }
  .container-catalog__advertise-text {
    font-size: 2rem;
    margin-left: 4rem;
  }
  .container-catalog__advertise-btn {
    margin-left: 4rem;
  }
  .container-catalog__advertise-hero-from768px {
    bottom: 0rem;
    right: 0rem;
    height: 400px;
  }
  .container-catalog__advertise-bottom-triangle {
    border-left: 39vw solid transparent;
    border-bottom: 42px solid $red-col;
  }
  .container-catalog__filter-menu {
    right: 10.313rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-catalog {
    padding: 3.75rem 15.938rem 7.5rem 15.938rem;
  }
  .container-catalog__title {
    font-size: 2.375rem;
  }
  .container-catalog__advertise-top-triangle {
    border-left: 38.5vw solid transparent;
    border-bottom: 125vw solid $dark-col;
  }
  .container-catalog__advertise-bottom-triangle {
    border-left: 31vw solid transparent;
    border-bottom: 42px solid $red-col;
  }
  .container-catalog__filter-menu {
    right: 15.938rem;
  }
}
</style>
