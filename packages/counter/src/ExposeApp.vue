<template>
  <div class="counter-wc">
    <div class="q-my-md">
      <div>Prop label:</div>
      <div>{{ label }}</div>
    </div>
    <div>
      <Counter @click-counter="onClick" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Counter from "./components/Counter.vue";

const emit = defineEmits(["click-counter"]);

defineProps<{
  label: string;
}>();

const onClick = (from: string) => {
  emit("click-counter", from);
};
</script>
