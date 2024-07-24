<template>
  <div class="Counter">
    <button @click="onClick">Click!</button>
    <div>Counter: {{ counter }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const onClick = () => {
  counter.value += 1;
};
</script>
