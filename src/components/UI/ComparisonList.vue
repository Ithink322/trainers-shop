<template>
  <div class="container-comparison__items-flex" ref="sliderContainer">
    <transition-group name="comparison-item-list">
      <comparison-item
        v-for="comparison in comparisons"
        :key="comparison.id"
        :comparison="comparison"
        :comparisons="comparisons"
        @remove-comparison="removeFromComparisons"
      ></comparison-item>
    </transition-group>
  </div>
</template>

<script>
import ComparisonItem from "../UI/ComparisonItem.vue";
export default {
  name: "ComparisonList",
  components: { ComparisonItem },
  props: {
    comparisons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeFromComparisons(comparison) {
      this.$emit("remove-comparison", comparison);
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

/* 768px = 48em */
@media (min-width: 48em) {
  .comparison-item-list-enter-active,
  .comparison-item-list-leave-active {
    transition: all 0.6s ease;
  }
  .comparison-item-list-enter-from,
  .comparison-item-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .comparison-item-list-move {
    transition: transform 0.6s ease;
  }
  .container-comparison__items-flex {
    position: absolute;
    display: flex;
    gap: 1.25rem;
    margin-top: 7.13rem;
    margin-left: 1.25rem;
    transition: transform 0.4s ease-in-out 0s;
  }
}
</style>
