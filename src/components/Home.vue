<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>Composition API - {{ text }} ({{ obj.counter }})</div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const text = ref("Hola Vue");
    const obj = reactive({ counter: 0 });

    setInterval(() => obj.counter++, 2000);

    return { text, obj };
  },
};
</script>
