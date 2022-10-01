<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <transition name="fade">
    <ul>
      <li>Opcion 1</li>
      <li>Opcion 2</li>
      <li>Opcion 3</li>
    </ul>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
