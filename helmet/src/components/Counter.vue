<template>
  <div class="Counter">
    <div>
      <QChip color="red" text-color="white">Vue v2.7.16</QChip>
      <QChip color="teal" text-color="white">Quasar v1.22.10</QChip>
      <QChip color="orange" text-color="white">Webpack v4</QChip>
    </div>

    <q-btn color="deep-orange" label="Click me!" @click="onClick" />
    <div>Counter: {{ counter }}</div>
  </div>
</template>

<script>
import { QChip } from "quasar";
import Vue from "vue";

export default Vue.extend({
  name: "Counter",
  components: { QChip },
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    onClick() {
      this.counter += 1;
    },
  },
});
</script>

<style lang="sass">
.Counter
    padding: 8px
    border-radius: 8px
    background: #e1e1e1
</style>
