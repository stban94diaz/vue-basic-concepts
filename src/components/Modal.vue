<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <button @click="toggle">Modal</button>
    <teleport to="body">
      <div v-show="show" class="modal">
        <div class="modal__body">
          <h1>Titulo</h1>
          <p>Lorem ipsum dolor sit amet, consectet</p>
          <button @click="toggle">Cerrar</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.205);
}

.modal__body {
  width: 50%;
  min-height: 200px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
}
</style>
