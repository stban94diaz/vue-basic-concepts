<template>
  <div>
    <h1>Transiciones</h1>

    <button @click="show = !show">Menu</button>
    <Menu v-show="show" />
  </div>
  <div>
    <h1>TelePorts - Modal</h1>
    <Modal />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { Menu, Modal },
  data: () => ({
    show: false,
  }),
  beforeCreate() {
    console.log("beforeCreate", this.$data, this.$el);
  },
  created() {
    console.log("created", this.$data, this.$el);
  },
  beforeMounted() {
    console.log("beforeMounted", this.$data, this.$el);
  },
  mounted() {
    console.log("mounted", this.$data, this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.$data, this.$el);
  },
  updated() {
    console.log("updated", this.$data, this.$el);
  },
  beforeUnmount() {
    console.log("beforeUnmount", this.$data, this.$el);
  },
  unmounted() {
    console.log("unmounted", this.$data, this.$el);
  },
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
