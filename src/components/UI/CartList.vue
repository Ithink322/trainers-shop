<template>
  <div class="container-cart__items-list-flex">
    <span v-if="products.length === 0" class="container-cart__text-empty"
      >В корзине ничего нет 😭.</span
    >
    <transition-group name="cart-item-list">
      <cart-item
        v-for="product in products"
        :product="product"
        :products="products"
        :remove-product="removeProductFromTheCart"
        @productRemoved="removeProductFromTheCart(product.id)"
        :calculateTotalPrice="calculateTotalPrice"
        :updateTotalQty="updateTotalQty"
        :key="product.id"
        ref="CartItem"
      ></cart-item>
    </transition-group>
  </div>
</template>

<script>
import CartItem from "../UI/CartItem.vue";
export default {
  components: { CartItem },
  name: "CartList",
  data() {
    return {
      products: [],
      selectedCharacteristics: {},
      pricesInCharacteristics: 0,
    };
  },
  methods: {
    getCartProducts() {
      this.products = JSON.parse(localStorage.getItem("cart"));
    },
    removeProductFromTheCart(id) {
      this.products = this.products.filter((product) => {
        return product.id !== id;
      });
      localStorage.setItem("cart", JSON.stringify(this.products));
      this.$emit("productRemoved", id);
      this.updateTotalQty();
    },
    calculateTotalPrice() {
      let totalPriceElement = document.querySelector(
          ".container-cart__in-total-price"
        ),
        totalSum = 0;

      this.products.forEach((product) => {
        totalSum +=
          parseInt(product.currentPrice.replace(/\s/g, "")) * product.qty;
      });
      totalPriceElement.innerText = totalSum.toLocaleString() + " ₽";
    },
    updateTotalQty() {
      let totalQty = 0;
      this.products.forEach((product) => {
        totalQty += Number(product.qty);
      });
      localStorage.setItem("totalQtyOfProducts", totalQty.toString());
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
  },
  mounted() {
    this.getCartProducts();
    this.updateTotalQty();
  },
};
</script>

<style lang="scss">
.cart-item-list-enter-active,
.cart-item-list-leave-active {
  transition: all 0.6s ease;
}
.cart-item-list-enter-from,
.cart-item-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.cart-item-list-move {
  transition: transform 0.6s ease;
}
.container-cart__items-list-flex {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.25rem;
}
.container-cart__text-empty {
  display: block;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #1a1a25;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container-cart__text-empty {
    font-size: 1rem;
  }
}
</style>
