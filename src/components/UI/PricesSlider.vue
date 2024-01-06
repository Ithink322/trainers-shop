<template>
  <div class="container-catalog__slider-range-inputs">
    <input
      type="number"
      min="121800"
      max="194300"
      placeholder="121 800"
      class="container-catalog__slider-range-input"
      id="input-0"
      ref="minPrice"
    />
    <div class="container-catalog__slider-range-border"></div>
    <input
      type="number"
      min="121800"
      max="194300"
      placeholder="194 300"
      class="container-catalog__slider-range-input"
      id="input-1"
      ref="maxPrice"
    />
  </div>
  <div class="container-catalog__slider-range" id="range-slider"></div>
</template>

<script>
export default {
  name: "PricesSlider",
  mounted() {
    const rangeSlider = document.getElementById("range-slider");
    noUiSlider.create(rangeSlider, {
      start: [121800, 194300],
      connect: true,
      step: 10,
      range: {
        min: [121800],
        max: [194300],
      },
    });

    const input0 = document.getElementById("input-0"),
      input1 = document.getElementById("input-1");
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on("update", (values, handle) => {
      inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;
      rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
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
/* hide input number arrows for Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* hide input number arrows for Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.container-catalog__slider-range {
  width: 198px;
  margin-top: 1.25rem;
  margin-left: 0.25rem;
}
.container-catalog__slider-range-inputs {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.container-catalog__slider-range-input {
  border: none;
  width: 96px;
  height: 30px;
  border-radius: 0.25rem;
  padding: 0rem 0.875rem;
  border: 1px solid rgba(133, 143, 164, 0.2);
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: $dark-blue-col;
}
.container-catalog__slider-range-border {
  width: 19px;
  height: 2px;
  border-radius: 1px;
  background: rgba(133, 143, 164, 0.5);
}
.noUi-target {
  background-color: $red-col;
  border: none;
  height: 2px;
}
.noUi-connect {
  background-color: $red-col;
}
.noUi-handle::after,
.noUi-handle::before {
  display: none;
}
.noUi-handle {
  box-shadow: none;
  border-radius: 50%;
  border: 2px solid $red-col;
  background-color: $white-col;
  cursor: pointer;
}
.noUi-horizontal .noUi-handle {
  width: 20px;
  height: 20px;
  top: -0.6rem;
  /* right: 0rem; */
}
</style>
