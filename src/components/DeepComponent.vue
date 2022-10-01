<template>
  <div>User name: {{ userName }}</div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const userName = inject("userName"); // by default this in not reactive for that use toRefs

    return { userName };
  },
};
</script>
