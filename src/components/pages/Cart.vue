<template>
  <div class="container-cart">
    <h1 class="container-cart__title">Моя корзина</h1>
    <div class="container-cart__title-border"></div>
    <cart-list ref="cartList" @productRemoved="removeProduct"></cart-list>
    <div class="container-cart__total-price">
      <div class="container-cart__total-price-main-flex">
        <div class="container-cart__total-price-in-total-flex">
          <span class="container-cart__in-total-text">Итого:</span>
          <span class="container-cart__in-total-price">₽</span>
        </div>
        <div class="container-cart__total-price-btns-flex">
          <button class="container-cart__total-price-proceed-to-checkout-btns">
            Перейти к оформлению
          </button>
          <button class="container-cart__total-price-buy-in-one-click-btn">
            Купить в 1 клик
          </button>
          <button class="container-cart__total-price-make-commercial-offer-btn">
            Сделать коммерческое предложение
          </button>
        </div>
        <div class="container-cart__total-price-use-bonus-points-flex">
          <input
            type="checkbox"
            class="container-cart__total-price-use-bonus-points-checkbox"
          />
          <span class="container-cart__total-price-use-bonus-points-text"
            >Использовать бонусные баллы Требуется
            <span class="container-cart__total-price-use-bonus-points-text-span"
              >авторизация</span
            ></span
          >
        </div>
      </div>
    </div>
    <div class="container-cart__guarantee">
      <h2 class="container-cart__guarantee-title">
        Дополнительная гарантия до 5 лет
      </h2>
      <span class="container-cart__guarantee-description"
        ><span class="container-cart__guarantee-description-span"
          >Хотите быть полностью уверены в новом товаре? </span
        >Оформите Дополнительную гарантию на срок до 5 лет. Она начнет
        действовать сразу после истечения основного срока гарантии.
        <span class="container-cart__guarantee-description-span-more"
          >Подробнее</span
        ></span
      >
      <guarantee-list
        :products="cartListProducts"
        :removedProduct="removedProduct"
      ></guarantee-list>
    </div>
  </div>
</template>

<script>
import CartList from "../UI/CartList.vue";
import GuaranteeList from "../UI/GuaranteeList.vue";
export default {
  components: { CartList, GuaranteeList },
  name: "Cart",
  data() {
    return {
      cartListProducts: [],
      CartItem: {},
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.cartListProducts = this.$refs.cartList.products;
    });
  },
  methods: {
    removeProduct(id) {
      const index = this.cartListProducts.findIndex((p) => p.id === id);
      if (index !== -1) {
        this.cartListProducts.splice(index, 1);

        let btnIsActivated =
          JSON.parse(localStorage.getItem("guaranteeActivated")) || [];
        btnIsActivated = btnIsActivated.filter(
          (activatedId) => activatedId !== id.toString()
        );

        let counters = document.querySelectorAll(
          ".container-cart__guarantee-counter-text"
        );
        let currentCounters =
          JSON.parse(localStorage.getItem("currentCounters")) || [];

        // Удаление соответствующего элемента из массива currentCounters на основе индекса
        currentCounters.splice(index, 1);

        localStorage.setItem(
          "guaranteeActivated",
          JSON.stringify(btnIsActivated)
        );
        localStorage.setItem(
          "currentCounters",
          JSON.stringify(currentCounters)
        );
      }
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

.container-cart {
  padding: 0.625rem 0.625rem 3.75rem 0.625rem;
}
.container-cart__title {
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a1a25;
  margin-top: 1.87rem;
}
.container-cart__title-border {
  width: 100%;
  border: 1px solid rgba(133, 143, 164, 0.2);
}
.container-cart__total-price {
  position: relative;
  background: $white-col;
  border-radius: 6px;
  padding: 1.88rem;
  margin-top: 1.94rem;
}
.container-cart__total-price-main-flex {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.container-cart__total-price-in-total-flex {
  display: flex;
  gap: 1.25rem;
}
.container-cart__in-total-text,
.container-cart__in-total-price {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: $red-col;
}
.container-cart__total-price-btns-flex {
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
}
.container-cart__total-price-proceed-to-checkout-btns {
  border: none;
  background: $red-col;
  border-radius: 4px;
  padding: 1.25rem;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $white-col;
}
.container-cart__total-price-buy-in-one-click-btn,
.container-cart__total-price-make-commercial-offer-btn {
  border: 1px solid $red-col;
  background: transparent;
  border-radius: 4px;
  padding: 0.75rem 1.25rem;
  width: fit-content;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $red-col;
}
.container-cart__total-price-use-bonus-points-flex {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}
.container-cart__total-price-use-bonus-points-checkbox {
  flex-shrink: 0;
}
.container-cart__total-price-use-bonus-points-text {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: $dark-blue-col;
}
.container-cart__total-price-use-bonus-points-text-span {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #4b7ee8;
  cursor: pointer;
}
.container-cart__guarantee {
  position: relative;
  background: $dark-blue-col;
  border-radius: 6px;
  padding: 1.25rem;
  margin-top: 3.12rem;
}
.container-cart__guarantee-title {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: $white-col;
}
.container-cart__guarantee-description-span {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: rgba(246, 246, 246, 0.5);
}
.container-cart__guarantee-description {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: rgba(246, 246, 246, 0.5);
}
.container-cart__guarantee-description-span-more {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #4b7ee8;
  cursor: pointer;
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
  .container-cart {
    padding: 2.5rem 2.5rem 3.75rem 2.5rem;
  }
  .container-cart__total-price {
    width: 450px;
  }
  .container-cart__text-empty {
    font-size: 1rem;
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .container-cart__guarantee {
    padding: 2.5rem;
  }
  .container-cart__guarantee-title {
    font-size: 1.875rem;
  }
  .container-cart__guarantee-description-span,
  .container-cart__guarantee-description,
  .container-cart__guarantee-description-span-more {
    font-size: 1rem;
  }
  .container-cart__guarantee-at-certain-item-flex {
    justify-content: space-between;
  }
  .container-cart__guarantee-at-certain-item-title {
    font-size: 1rem;
  }
  .container-cart__guarantee-at-certain-item-num {
    font-size: 0.875rem;
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .container-cart {
    padding: 3.75rem 10.313rem 7.5rem 10.313rem;
  }
}

/* 1920px = 120em */
@media (min-width: 120em) {
  .container-cart {
    padding: 3.75rem 15.938rem 7.5rem 15.938rem;
  }
  .container-cart__item {
    width: 66%;
  }
  .container-cart__total-price {
    position: absolute;
    right: 15.938rem;
    top: 22.7rem;
    margin-top: 0rem;
  }
  .container-cart__guarantee {
    width: 66%;
    margin-top: 1.94rem;
  }
}
</style>
