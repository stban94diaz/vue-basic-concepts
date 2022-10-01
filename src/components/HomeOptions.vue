<template>
  <div>{{ fullName }}</div>
  <div>{{ userName }}</div>
  <button ref="btn">Click!</button>
</template>

<script>
export default {
  props: {
    firstName: String,
    lastName: String,
  },
  inject: ["userName"],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  mounted() {
    console.log("Vue - Options", this.$refs.btn);
  },
};
</script>
