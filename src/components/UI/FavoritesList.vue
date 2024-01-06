<template>
  <div class="container-favourites__favorite-items-flex">
    <transition-group name="favorite-item-list">
      <catalog-item
        v-for="item in favorites"
        :key="item.id"
        :item="item"
        @remove-from-favorites="removeFromFavorites"
      ></catalog-item>
    </transition-group>
  </div>
</template>

<script>
import CatalogItem from "../UI/CatalogItem.vue";
export default {
  name: "FavoritesList",
  components: { CatalogItem },
  props: {
    favorites: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeFromFavorites(item) {
      this.$emit("remove-from-favorites", item);
    },
  },
  computed: {
    isFavorite() {
      return (item) => {
        let favorites = localStorage.getItem("favorites");
        if (favorites) {
          favorites = JSON.parse(favorites);
          return favorites.some((favorite) => favorite.id === item.id);
        }
        return false;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.favorite-item-list-enter-active,
.favorite-item-list-leave-active {
  transition: all 0.6s ease;
}
.favorite-item-list-enter-from,
.favorite-item-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.favorite-item-list-move {
  transition: transform 0.6s ease;
}
.container-favourites__favorite-items-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 0.62rem;
  margin-top: 1.25rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-favourites__favorite-items-flex {
    gap: 1.25rem;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container-catalog__card-item {
    width: 23.4%;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-favourites__favorite-items-flex {
    margin-top: 3rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-catalog__card-item {
    width: 18.4%;
  }
}
</style>
