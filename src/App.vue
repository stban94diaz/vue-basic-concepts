<template>
  <button @click="show = !show">Menu</button>
  <Menu v-show="show" />
</template>

<script>
import Menu from "./components/Menu.vue";
export default {
  name: "App",
  components: { Menu },
  data: () => ({
    show: false,
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
