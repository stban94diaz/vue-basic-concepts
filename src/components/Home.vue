<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>Composition API - {{ text }} ({{ obj.counter }})</div>
  <h3>Computed functions</h3>
  Nombre completo: {{ fullName }}
</template>

<script>
import { computed, reactive, ref, toRefs, watch } from "vue";

export default {
  props: {
    firstName: String,
    lastName: String,
  },
  setup(props) {
    const text = ref("Hola Vue");
    const obj = reactive({ counter: 0 });

    const { firstName, lastName } = toRefs(props);

    setInterval(() => obj.counter++, 2000);

    watch(
      () => obj.counter,
      (valor, anterior) => console.log(valor, anterior)
    );
    // watch(obj, (valor, anterior) =>
    //   console.log(JSON.stringify(valor), JSON.stringify(anterior))
    // );

    const fullName = computed(() => `${firstName.value} ${lastName.value}`);

    return { text, obj, fullName };
  },
};
</script>
