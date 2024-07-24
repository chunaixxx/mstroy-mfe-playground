<template>
  <q-page class="row items-center justify-evenly">
    <Counter></Counter>
  </q-page>
</template>

<script setup lang="ts">
import Counter from "src/components/Counter.vue";

defineOptions({
  name: "IndexPage",
});
</script>
