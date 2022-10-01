<template>
  <div>{{ user }} Respositories</div>
</template>

<script>
import { onMounted } from "vue";

export default {
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    repositories: [], // 1
    filters: {}, // 3
    searchQuery: "", // 2
  }),
  setup(props, ctx) {
    console.log(props, ctx);
    onMounted(() => console.log("onMounted - composition API"));
  },
  computed: {
    filteredRepositories() {
      // 3
      return null;
    },
    repositoriesMatchingSearchQuery() {
      // 2
      return null;
    },
  },
};
</script>
