<template>
  <q-page class="row items-center justify-evenly">
    <Counter />

    <counter-wc />
  </q-page>
</template>

<script>
import Vue from "vue";

import Counter from "../components/Counter.vue";
import RegisterWebComponent from "counter/RegisterWebComponent";

export default Vue.extend({
  name: "Index",
  components: { Counter },

  methods: {
    onClick() {
      console.log(Vue.version);
    },
  },
});
</script>
