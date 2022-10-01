<template>
  <div>User name: {{ userName }}</div>
  <button ref="btn">Click me!!!</button>
</template>

<script>
import { inject, ref, watch } from "vue";

export default {
  setup() {
    const userName = inject("userName"); // by default this in not reactive for that use toRefs
    const btn = ref(null);

    watch(btn, () => console.log(btn));

    return { userName, btn };
  },
};
</script>
