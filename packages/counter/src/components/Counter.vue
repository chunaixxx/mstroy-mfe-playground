<template>
  <div class="Counter">
    <q-chip label="chunai" :dark="false" />

    <button @click="onClick">Click!</button>
    <div>Counter: {{ counter }}</div>
  </div>
</template>

<script setup>
import Quasar from "quasar";
import { QChip as QChip2 } from "quasar";
import { ref, version, getCurrentInstance } from "vue";
import { useQuasar } from "quasar";

console.log("getCurrentInstance vue3:", getCurrentInstance());

const counter = ref(0);

const onClick = () => {
  counter.value += 1;
  console.log(version);
};
</script>

<style lang="sass">
.Counter
    background: red
</style>
