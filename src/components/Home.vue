<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>Composition API - {{ text }} ({{ obj.counter }})</div>
</template>

<script>
import { reactive, ref, watch } from "vue";

export default {
  setup() {
    const text = ref("Hola Vue");
    const obj = reactive({ counter: 0 });

    setInterval(() => obj.counter++, 2000);

    watch(
      () => obj.counter,
      (valor, anterior) => console.log(valor, anterior)
    );
    // watch(obj, (valor, anterior) =>
    //   console.log(JSON.stringify(valor), JSON.stringify(anterior))
    // );

    return { text, obj };
  },
};
</script>
