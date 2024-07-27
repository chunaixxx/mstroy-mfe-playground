<template>
  <div>
    <q-chip label="Vue 2" />
    <button @click="onClick">Click v2</button>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "CounterVue2",

  methods: {
    onClick() {
      console.log(Vue.version);
    },
  },
});
</script>

<style lang="scss" scoped></style>
