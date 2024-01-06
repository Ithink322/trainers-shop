<template>
  <div class="container-cart__guarantee-at-certain-items-flex">
    <guarantee-item
      v-for="product in products"
      :product="product"
      :key="product.id"
    ></guarantee-item>
  </div>
</template>

<script>
import GuaranteeItem from "../UI/GuaranteeItem.vue";
export default {
  name: "GuaranteeList",
  components: { GuaranteeItem },
  props: {
    products: {
      type: Array,
      required: true,
    },
    removedProduct: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.container-cart__guarantee-at-certain-items-flex {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.88rem;
}
</style>
