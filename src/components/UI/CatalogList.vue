<template>
  <div class="container-catalog__cards-list-flex">
    <transition-group name="item-list">
      <catalog-item
        v-for="item in sortedItems"
        :item="item"
        :key="item.id"
      ></catalog-item>
    </transition-group>
  </div>
</template>

<script>
import CatalogItem from "../UI/CatalogItem.vue";
export default {
  name: "CatalogList",
  components: {
    CatalogItem,
  },
  props: {
    sortedItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.item-list-item {
  display: inline-block;
  margin-right: 10px;
}
.item-list-enter-active,
.item-list-leave-active {
  transition: all 0.6s ease;
}
.item-list-enter-from,
.item-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.item-list-move {
  transition: transform 0.6s ease;
}
.container-catalog__cards-list-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 0.62rem;
  margin-top: 1.25rem;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .container-catalog__cards-list-flex {
    gap: 1.25rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-catalog__cards-list-flex {
    margin-right: 16rem;
  }
}
</style>
