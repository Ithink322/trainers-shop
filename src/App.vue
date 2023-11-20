<template>
  <div class="app">
    <my-header></my-header>
    <menus></menus>
    <main>
      <router-view></router-view>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./components/UI/MyHeader.vue";
import Menus from "./components/UI/Menus.vue";
import MainPage from "./components/pages/MainPage.vue";
import MyFooter from "./components/UI/MyFooter.vue";
export default {
  name: "App",
  components: { MyHeader, Menus, MainPage, MyFooter },
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
  /* outline: solid 1px red; */
}
body {
  min-width: 20em;
  background-color: #f6f6f6;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-family: "Inter", sans-serif;
}
</style>
