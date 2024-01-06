<template>
  <div class="container-favourites">
    <div class="container-favourites__home-icon-and-home-title-flex">
      <img
        src="imgs_main_page/img-home-icon.svg"
        alt=""
        class="container-favourites__home-icon"
      />
      <span class="container-favourites__home-title">Избранное</span>
    </div>
    <h1 class="container-favourites__title">Избранное</h1>
    <div class="container-favourites__title-border"></div>
    <div class="container-favourites__title-border-from1440"></div>
    <favorites-list
      :favorites="favorites"
      @remove-from-favorites="removeFromFavorites"
      @favoriteStatusChanged="updateFavoriteStatus"
    ></favorites-list>
    <span v-if="favorites.length === 0" class="container-favourites__text-empty"
      >Вы пока не добавили любимые товары в избранное ❤️.</span
    >
  </div>
</template>

<script>
import FavoritesList from "../UI/FavoritesList.vue";
export default {
  name: "FavoritesPage",
  components: {
    FavoritesList,
  },
  data() {
    return {
      favorites: [],
    };
  },
  mounted() {
    this.getFavoriteProducts();
  },
  methods: {
    getFavoriteProducts() {
      this.favorites = JSON.parse(localStorage.getItem("favorites"));
    },
    removeFromFavorites(item) {
      this.favorites = this.favorites.filter(
        (favorite) => favorite.id !== item.id
      );
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
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
.container-favourites {
  padding: 0.625rem 0.625rem 3.75rem 0.625rem;
}
.container-favourites__home-icon-and-home-title-flex {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.container-favourites__home-title {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: $gray-col;
}
.container-favourites__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: $dark-col;
  margin-top: 1.87rem;
}
.container-favourites__title-border {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.2);
}
.container-favourites__title-border-from1440 {
  display: none;
}
.container-favourites__text-empty {
  display: block;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #1a1a25;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .container-favourites {
    padding: 2.5rem 2.5rem 3.75rem 2.5rem;
  }
  .container-favourites__text-empty {
    font-size: 1rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container-favourites {
    padding: 3.75rem 10.313rem 7.5rem 10.313rem;
  }
  .container-favourites__title {
    font-size: 2.375rem;
  }
  .container-favourites__title-border {
    display: none;
  }
  .container-favourites__title-border-from1440 {
    position: absolute;
    display: block;
    width: 100%;
    border: 1px solid rgba(133, 143, 164, 0.2);
    left: 0rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-favourites {
    padding: 3.75rem 15.938rem 7.5rem 15.938rem;
  }
}
</style>
