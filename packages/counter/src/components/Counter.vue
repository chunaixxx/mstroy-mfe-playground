<template>
  <div class="Counter">
    <div>
      <QChip color="primary" text-color="white">Vue v3.4.18</QChip>
      <QChip color="teal" text-color="white">Quasar v2.16.0</QChip>
      <QChip color="orange" text-color="white">Webpack v5</QChip>
    </div>

    <q-btn color="deep-orange" label="Click me!" @click="onClick" />
    <div>Counter: {{ counter }}</div>
  </div>
</template>

<script setup>
import { QChip } from "quasar";
import { ref } from "vue";

const emit = defineEmits(["click-counter"]);

const counter = ref(0);

const onClick = () => {
  counter.value += 1;
  emit("click-counter", "packages/counter");
};
</script>

<style lang="sass">
.Counter
    padding: 8px
    border-radius: 8px
    background: #e1e1e1
</style>
