<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>Composition API - {{ text }} ({{ obj.counter }})</div>
  <h3>Computed functions</h3>
  Nombre completo: {{ fullName }}
  <h3>Provider / inject</h3>
  <DeepComponent />
</template>

<script setup>
import {
  defineProps,
  defineExpose,
  defineEmits,
  computed,
  reactive,
  ref,
  toRefs,
  watch,
  useSlots,
  useAttrs,
} from "vue";
import DeepComponent from "@/components/DeepComponent.vue";

const props = defineProps({
  firstName: String,
  lastName: String,
});
const emit = defineEmits(["load"]);

const text = ref("Hola Vue");
const obj = reactive({ counter: 0 });

const { firstName, lastName } = toRefs(props);

setInterval(() => obj.counter++, 2000);

watch(
  () => obj.counter,
  (valor, anterior) => console.log(valor, anterior)
);

const fullName = computed(() => `${firstName.value} ${lastName.value}`);

console.log("Attributes - composition API Setup", useAttrs());
defineExpose({ fullName });
console.log("Slots - composition API Setup", useSlots());
setTimeout(
  () => emit("load", "Evento despues de 4s - composition API Setup"),
  4000
);
</script>
