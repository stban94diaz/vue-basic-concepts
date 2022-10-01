export default {
  beforeCreate() {
    console.log("beforeCreate", this.$data, this.$el);
  },
  created() {
    console.log("created", this.$data, this.$el);
  },
  beforeMounted() {
    console.log("beforeMounted", this.$data, this.$el);
  },
  mounted() {
    console.log("mounted", this.$data, this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.$data, this.$el);
  },
  updated() {
    console.log("updated", this.$data, this.$el);
  },
  beforeUnmount() {
    console.log("beforeUnmount", this.$data, this.$el);
  },
  unmounted() {
    console.log("unmounted", this.$data, this.$el);
  },
};
