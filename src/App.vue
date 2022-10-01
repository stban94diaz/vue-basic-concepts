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
  <div>
    <h1>Composition API</h1>
    <UserRepositories :user="'Esteban'" />
    <Home />
  </div>
</template>

<script>
// Components
import Menu from "./components/Menu.vue";
import Modal from "./components/Modal.vue";
import UserRepositories from "./components/UserRepositories.vue";
import Home from "./components/Home.vue";

// Mixins
import base from "@/mixins/base.js";

export default {
  name: "App",
  components: { Menu, Modal, UserRepositories, Home },
  mixins: [base],
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
